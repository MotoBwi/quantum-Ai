#!/usr/bin/env python3
"""
AgentKit gRPC Server - n8n Workflow Integration

A gRPC server implementing TalkService for Rapida Voice AI with n8n
workflow automation integration.

Features:
    - n8n webhook integration for workflow triggers
    - Wait for workflow completion with polling
    - Multiple workflow routing based on intent
    - Fallback LLM for general conversation
"""

import json
import logging
import os
import time
import uuid
from concurrent import futures
from typing import Iterator, Optional
import requests

import grpc
from grpc import ServerInterceptor
from rapida import (
    TalkServiceServicer,
    AssistantConversationAssistantMessage,
    AssistantConversationMessageTextContent,
    Error,
    AssistantMessagingResponse,
    AssistantMessagingRequest,
    add_AgentKitServicer_to_server,
)

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Configuration
N8N_BASE_URL = os.getenv("N8N_BASE_URL", "http://localhost:5678")
N8N_API_KEY = os.getenv("N8N_API_KEY")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))


# Workflow mappings - map intents to n8n webhook URLs
WORKFLOW_WEBHOOKS = {
    "order_status": os.getenv("N8N_WEBHOOK_ORDER_STATUS", "/webhook/order-status"),
    "support_ticket": os.getenv("N8N_WEBHOOK_SUPPORT", "/webhook/support-ticket"),
    "appointment": os.getenv("N8N_WEBHOOK_APPOINTMENT", "/webhook/book-appointment"),
    "refund": os.getenv("N8N_WEBHOOK_REFUND", "/webhook/process-refund"),
    "general": os.getenv("N8N_WEBHOOK_GENERAL", "/webhook/general-inquiry"),
}

# Intent keywords for routing
INTENT_KEYWORDS = {
    "order_status": [
        "order",
        "tracking",
        "shipment",
        "delivery",
        "package",
        "where is my",
    ],
    "support_ticket": [
        "problem",
        "issue",
        "help",
        "support",
        "broken",
        "not working",
        "error",
    ],
    "appointment": [
        "appointment",
        "schedule",
        "book",
        "meeting",
        "calendar",
        "availability",
    ],
    "refund": ["refund", "return", "money back", "cancel order", "reimburse"],
}

# Optional fallback LLM
FALLBACK_LLM = os.getenv("FALLBACK_LLM", "openai")  # "openai", "anthropic", or "none"
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")

openai_client = None
anthropic_client = None

if FALLBACK_LLM == "openai" and OPENAI_KEY:
    from openai import OpenAI

    openai_client = OpenAI(api_key=OPENAI_KEY)
elif FALLBACK_LLM == "anthropic" and ANTHROPIC_KEY:
    from anthropic import Anthropic

    anthropic_client = Anthropic(api_key=ANTHROPIC_KEY)


def detect_intent(text: str) -> str:
    """Detect user intent from message text."""
    text_lower = text.lower()
    for intent, keywords in INTENT_KEYWORDS.items():
        if any(keyword in text_lower for keyword in keywords):
            return intent
    return "general"


def call_n8n_webhook(
    webhook_path: str, payload: dict, timeout: int = 30
) -> Optional[dict]:
    """Call an n8n webhook and return the response."""
    url = f"{N8N_BASE_URL}{webhook_path}"
    headers = {"Content-Type": "application/json"}
    if N8N_API_KEY:
        headers["Authorization"] = f"Bearer {N8N_API_KEY}"

    try:
        logger.info(f"Calling n8n webhook: {url}")
        response = requests.post(url, json=payload, headers=headers, timeout=timeout)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.Timeout:
        logger.error(f"n8n webhook timeout: {url}")
        return {"error": "Workflow timed out"}
    except requests.exceptions.RequestException as e:
        logger.error(f"n8n webhook error: {e}")
        return {"error": str(e)}


def call_fallback_llm(messages: list, msg_id: str) -> Iterator[tuple[str, bool]]:
    """Use fallback LLM for general conversation. Yields (text, is_final) tuples."""
    system = "You are a helpful voice AI assistant. Be concise and conversational."

    if openai_client:
        stream = openai_client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "system", "content": system}] + messages,
            stream=True,
        )
        full_text = ""
        for chunk in stream:
            if chunk.choices and chunk.choices[0].delta.content:
                content = chunk.choices[0].delta.content
                full_text += content
                yield content, False
        yield full_text, True

    elif anthropic_client:
        filtered = [m for m in messages if m["role"] != "system"]
        with anthropic_client.messages.stream(
            model="claude-sonnet-4-5-20250929",
            max_tokens=1024,
            system=system,
            messages=filtered,
        ) as stream:
            full_text = ""
            for text in stream.text_stream:
                full_text += text
                yield text, False
            yield full_text, True

    else:
        # No LLM available
        response = "I'll connect you to our automated workflow system."
        yield response, True


def response(
    code: int = 200, success: bool = True, **kwargs
) -> AssistantMessagingResponse:
    return AssistantMessagingResponse(code=code, success=success, **kwargs)


def assistant_response(
    msg_id: str, content: str, completed: bool = False
) -> AssistantMessagingResponse:
    return response(
        assistant=AssistantConversationAssistantMessage(
            id=msg_id,
            completed=completed,
            text=AssistantConversationMessageTextContent(content=content),
        )
    )


def error_response(code: int, message: str) -> AssistantMessagingResponse:
    return response(
        code=code, success=False, error=Error(errorCode=code, errorMessage=message)
    )


def process_workflow_response(workflow_result: dict, intent: str) -> str:
    """Convert n8n workflow response to natural language."""
    if "error" in workflow_result:
        return f"I apologize, but I encountered an issue processing your request: {workflow_result['error']}. Would you like to speak with a human agent?"

    # Handle different workflow response types
    if intent == "order_status":
        order = workflow_result.get("order", {})
        return (
            f"I found your order {order.get('id', 'N/A')}. "
            f"The status is {order.get('status', 'unknown')}. "
            f"It's expected to arrive by {order.get('estimated_delivery', 'soon')}. "
            f"Tracking number is {order.get('tracking_number', 'N/A')}."
        )

    elif intent == "support_ticket":
        ticket = workflow_result.get("ticket", {})
        return (
            f"I've created a support ticket for you. "
            f"Your ticket number is {ticket.get('id', 'N/A')}. "
            f"Our team will respond within {ticket.get('response_time', '24 hours')}. "
            f"Is there anything else I can help you with?"
        )

    elif intent == "appointment":
        appointment = workflow_result.get("appointment", {})
        if appointment.get("success"):
            return (
                f"Great! I've booked your appointment for {appointment.get('date', '')} "
                f"at {appointment.get('time', '')}. "
                f"You'll receive a confirmation email shortly."
            )
        else:
            slots = appointment.get("available_slots", [])
            if slots:
                return (
                    f"That time isn't available. Here are some open slots: "
                    f"{', '.join(slots[:3])}. Would any of these work for you?"
                )
            return "I couldn't find any available appointments. Would you like me to add you to a waitlist?"

    elif intent == "refund":
        refund = workflow_result.get("refund", {})
        return (
            f"I've initiated a refund for order {refund.get('order_id', 'N/A')}. "
            f"The refund amount of ${refund.get('amount', '0')} will be processed within "
            f"{refund.get('processing_time', '5-7 business days')}. "
            f"You'll receive a confirmation email once it's complete."
        )

    # Default response for general or unknown
    return workflow_result.get(
        "message", "I've processed your request. Is there anything else you need?"
    )


def process_with_n8n(
    user_message: str, conversation_id: str, messages: list, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Process user message through n8n workflow."""
    # Detect intent
    intent = detect_intent(user_message)
    logger.info(f"Detected intent: {intent}")

    # Get appropriate webhook
    webhook = WORKFLOW_WEBHOOKS.get(intent, WORKFLOW_WEBHOOKS["general"])

    # Initial acknowledgment
    acknowledgments = {
        "order_status": "Let me check on that order for you...",
        "support_ticket": "I'll create a support ticket for you...",
        "appointment": "Let me check the available appointments...",
        "refund": "I'll process that refund request...",
        "general": "Let me look into that for you...",
    }
    yield assistant_response(
        msg_id, acknowledgments.get(intent, "Processing..."), completed=False
    )

    # Prepare workflow payload
    payload = {
        "message": user_message,
        "intent": intent,
        "conversation_id": conversation_id,
        "request_id": str(uuid.uuid4()),
        "history": messages[-5:]
        if len(messages) > 5
        else messages,  # Last 5 messages for context
        "timestamp": time.time(),
    }

    # Call n8n workflow
    result = call_n8n_webhook(webhook, payload)

    if result and not result.get("error"):
        # Process workflow response
        response_text = process_workflow_response(result, intent)
        yield assistant_response(msg_id, response_text, completed=True)
    else:
        # Fallback to LLM if workflow fails
        error_msg = (
            result.get("error", "Unknown error") if result else "Workflow unavailable"
        )
        logger.warning(f"n8n workflow failed: {error_msg}, falling back to LLM")

        if openai_client or anthropic_client:
            full_text = ""
            for text, is_final in call_fallback_llm(messages, msg_id):
                if is_final:
                    yield assistant_response(msg_id, text, completed=True)
                else:
                    yield assistant_response(msg_id, text, completed=False)
                    full_text = text
        else:
            yield assistant_response(
                msg_id,
                "I apologize, but I'm having trouble processing your request right now. Would you like to speak with a human agent?",
                completed=True,
            )


class N8NWorkflowServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService with n8n workflow integration."""

    def Talk(
        self,
        request_iterator: Iterator[AssistantMessagingRequest],
        context: grpc.ServicerContext,
    ) -> Iterator[AssistantMessagingResponse]:
        """Handle bidirectional streaming AssistantTalk RPC."""
        configured = False
        messages = []
        conversation_id = None
        logger.info(f"New connection from {context.peer()}")

        try:
            for request in request_iterator:
                if request.HasField("configuration"):
                    config = request.configuration
                    configured = True
                    messages = []
                    conversation_id = str(config.assistantConversationId)
                    assistant_id = (
                        config.assistant.assistantId if config.assistant else "unknown"
                    )
                    logger.info(
                        f"Configured: assistant={assistant_id}, conversation={conversation_id}"
                    )
                    yield response(configuration=config)

                elif request.HasField("message"):
                    if not configured:
                        yield error_response(400, "Not configured")
                        continue

                    msg = request.message
                    msg_id = msg.id

                    if msg.HasField("text"):
                        content = msg.text.content
                        logger.info(f"User [{msg_id}]: {content[:50]}...")
                        messages.append({"role": "user", "content": content})

                        try:
                            full_text = ""
                            for resp in process_with_n8n(
                                content, conversation_id, messages, msg_id
                            ):
                                if resp.assistant.completed:
                                    full_text = resp.assistant.text.content
                                yield resp
                            messages.append({"role": "assistant", "content": full_text})

                        except Exception as e:
                            logger.error(f"Error: {e}")
                            yield error_response(500, str(e))

                    elif msg.HasField("audio"):
                        yield error_response(501, "Audio not implemented")
                else:
                    yield error_response(400, "Unknown request type")

        except grpc.RpcError as e:
            logger.error(f"RPC error: {e}")
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
        finally:
            logger.info("Connection closed")


def serve():
    """Start the gRPC server."""
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    add_AgentKitServicer_to_server(N8NWorkflowServer(), server)
    address = f"{HOST}:{PORT}"
    server.add_insecure_port(address)
    logger.info(f"n8n URL: {N8N_BASE_URL}")
    logger.info(f"Workflow webhooks: {list(WORKFLOW_WEBHOOKS.keys())}")
    logger.info(f"Fallback LLM: {FALLBACK_LLM}")
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
