#!/usr/bin/env python3
"""
AgentKit gRPC Server - Anthropic Claude Integration with Tool Use

A gRPC server implementing TalkService for Rapida Voice AI with Anthropic Claude
models and tool use capabilities.

Features:
    - Anthropic Claude 3.5/4 integration
    - Tool use support for agentic workflows
    - Extended thinking for complex reasoning
    - Streaming responses
    - Conversation memory management


AssistantConversationAction
"""

import json
import logging
import os
import time
from concurrent import futures
from typing import Iterator
import grpc
from rapida import (
    TalkServiceServicer,
    AssistantConversationAssistantMessage,
    AssistantConversationAction,
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
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")
ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-sonnet-4-5-20250929")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "4096"))
ENABLE_EXTENDED_THINKING = (
    os.getenv("ENABLE_EXTENDED_THINKING", "false").lower() == "true"
)

SYSTEM_PROMPT = os.getenv(
    "SYSTEM_PROMPT",
    """You are a professional voice AI customer service agent for phone calls.
    
VOICE INTERACTION GUIDELINES:
- Keep responses concise and natural for voice (2-3 sentences max)
- Speak conversationally, avoid technical jargon
- Use clear pronunciation and natural pacing
- Acknowledge the caller warmly and professionally
- Ask clarifying questions one at a time

VOICE-SPECIFIC BEHAVIOR:
- Always start with a greeting: "Hello, thank you for calling [Company]"
- Confirm customer identity before discussing details
- Summarize actions taken before ending the call
- Offer additional help before disconnecting
- Use pauses for natural conversation flow

AVAILABLE TOOLS AND WHEN TO USE THEM:

1. verify_customer_identity
   - When: Customer calls in and you need to confirm who they are
   - Why: Required before accessing any customer account details
   - Example: "May I verify your identity first?"

2. check_order_status
   - When: Customer asks about their order, shipment, or delivery
   - Why: To provide real-time tracking information
   - Example: "Let me check your order status for you."

3. process_refund_request
   - When: Customer wants to return something or get a refund
   - Why: To process returns, cancellations, or refund requests
   - Example: "I can help you process a refund for that order."

4. create_call_note
   - When: After resolving issues or before ending call
   - Why: To document what happened in the call for their account
   - Example: "Let me create a note about this for your account."

5. transfer_to_agent
   - When: Customer needs something beyond your capabilities (billing issues, technical problems, escalations)
   - Why: To connect them with a specialist human agent
   - Example: "Let me transfer you to our billing specialist."

6. schedule_callback
   - When: Customer is unavailable now but wants to be called back
   - Why: To arrange a time for an agent to follow up
   - Example: "Would you like me to schedule a callback for tomorrow morning?"

7. terminate_call
   - When: Customer says goodbye, the issue is resolved, or after transferring/scheduling
   - Why: To properly end the call
   - Example: "Thank you for calling. Goodbye!"

DECISION LOGIC:
- Start: Always verify identity (verify_customer_identity)
- Middle: Help with their issue (check_order_status, process_refund_request, etc.)
- Document: Create call notes (create_call_note) before ending
- End: Use terminate_call when customer says goodbye or issue is resolved""",
)


# Anthropic Client
anthropic_client = None
if ANTHROPIC_KEY:
    from anthropic import Anthropic

    anthropic_client = Anthropic(api_key=ANTHROPIC_KEY)
else:
    logger.warning("ANTHROPIC_API_KEY not set, using mock responses")

# Define available tools for Claude - Voice Agent specific
TOOLS = [
    {
        "name": "verify_customer_identity",
        "description": "Verify customer identity using account information for secure access",
        "input_schema": {
            "type": "object",
            "properties": {
                "customer_id": {
                    "type": "string",
                    "description": "The unique customer ID or phone number",
                },
                "verification_method": {
                    "type": "string",
                    "enum": ["account_number", "last_four_ssn", "email", "phone"],
                    "description": "Method of verification",
                },
            },
            "required": ["customer_id", "verification_method"],
        },
    },
    {
        "name": "check_order_status",
        "description": "Check the current status of an order including tracking information",
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "The order ID to look up",
                },
                "phone_number": {
                    "type": "string",
                    "description": "Customer phone number (alternative lookup)",
                },
            },
            "required": ["order_id"],
        },
    },
    {
        "name": "process_refund_request",
        "description": "Process a refund request for a returned or cancelled order",
        "input_schema": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "The order ID to refund",
                },
                "reason": {
                    "type": "string",
                    "enum": [
                        "damaged",
                        "wrong_item",
                        "not_as_described",
                        "changed_mind",
                        "other",
                    ],
                    "description": "Reason for refund",
                },
                "refund_method": {
                    "type": "string",
                    "enum": ["original_payment", "store_credit", "check"],
                    "description": "How to refund the customer",
                },
            },
            "required": ["order_id", "reason"],
        },
    },
    {
        "name": "create_call_note",
        "description": "Create a note about this call for the customer account",
        "input_schema": {
            "type": "object",
            "properties": {
                "customer_id": {
                    "type": "string",
                    "description": "Customer ID to attach note to",
                },
                "note": {
                    "type": "string",
                    "description": "Summary of what was discussed and actions taken",
                },
                "action_items": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Follow-up actions needed",
                },
            },
            "required": ["customer_id", "note"],
        },
    },
    {
        "name": "transfer_to_agent",
        "description": "Transfer the call to a human agent or department",
        "input_schema": {
            "type": "object",
            "properties": {
                "reason": {
                    "type": "string",
                    "description": "Reason for transfer",
                },
                "department": {
                    "type": "string",
                    "enum": ["sales", "support", "billing", "technical", "retention"],
                    "description": "Department to transfer to",
                },
                "urgency": {
                    "type": "string",
                    "enum": ["normal", "high", "urgent"],
                    "description": "Call urgency level",
                },
                "customer_context": {
                    "type": "string",
                    "description": "Information about the customer for the agent",
                },
            },
            "required": ["reason", "department"],
        },
    },
    {
        "name": "schedule_callback",
        "description": "Schedule a callback from a human agent at a later time",
        "input_schema": {
            "type": "object",
            "properties": {
                "customer_phone": {
                    "type": "string",
                    "description": "Phone number to call back",
                },
                "preferred_time": {
                    "type": "string",
                    "description": "Preferred time for callback (e.g., 'morning', 'afternoon', '2pm')",
                },
                "reason": {
                    "type": "string",
                    "description": "Reason for the callback",
                },
            },
            "required": ["customer_phone", "reason"],
        },
    },
    {
        "name": "terminate_call",
        "description": "Call this function to terminate the call",
        "input_schema": {
            "type": "object",
            "properties": {
                "reason": {
                    "type": "string",
                    "enum": [
                        "issue_resolved",
                        "customer_goodbye",
                        "transfer_complete",
                        "callback_scheduled",
                    ],
                    "description": "Reason for call termination",
                },
                "summary": {
                    "type": "string",
                    "description": "Brief summary of what was accomplished in this call",
                },
            },
            "required": ["reason"],
        },
    },
]


def execute_tool(name: str, args: dict) -> str:
    """Execute a tool and return the result as a string."""
    logger.info(f"Executing tool: {name} with args: {args}")

    if name == "verify_customer_identity":
        return json.dumps(
            {
                "success": True,
                "customer_id": args.get("customer_id"),
                "verified": True,
                "verification_method": args.get("verification_method"),
                "account_name": "John Doe",
                "account_status": "active",
            }
        )

    elif name == "check_order_status":
        return json.dumps(
            {
                "order_id": args.get("order_id"),
                "status": "in_transit",
                "tracking_number": "1Z999AA10123456784",
                "carrier": "UPS",
                "estimated_delivery": "2026-01-29",
                "items": [
                    {
                        "name": "Electronics Device",
                        "quantity": 1,
                        "status": "in_transit",
                    },
                ],
                "last_update": "2026-01-27 10:30 AM",
            }
        )

    elif name == "process_refund_request":
        return json.dumps(
            {
                "success": True,
                "refund_id": "REF-54321",
                "order_id": args.get("order_id"),
                "amount": 99.99,
                "refund_method": args.get("refund_method", "original_payment"),
                "status": "processing",
                "estimated_completion": "3-5 business days",
                "tracking_for_return": "Return label will be emailed",
            }
        )

    elif name == "create_call_note":
        return json.dumps(
            {
                "success": True,
                "note_id": "NOTE-12345",
                "customer_id": args.get("customer_id"),
                "timestamp": "2026-01-27T10:45:00Z",
                "message": "Call note created successfully",
            }
        )

    elif name == "transfer_to_agent":
        return json.dumps(
            {
                "success": True,
                "transfer_id": "TXF-99999",
                "department": args.get("department", "support"),
                "agent_name": "Sarah Johnson",
                "estimated_wait": "2-3 minutes",
                "queue_position": 1,
            }
        )

    elif name == "schedule_callback":
        return json.dumps(
            {
                "success": True,
                "callback_id": "CB-55555",
                "phone_number": args.get("customer_phone"),
                "scheduled_time": args.get("preferred_time", "within 24 hours"),
                "confirmation": "We'll call you back shortly",
            }
        )

    elif name == "terminate_call":
        return json.dumps(
            {
                "success": True,
                "call_terminated": True,
                "reason": args.get("reason", "issue_resolved"),
                "summary": args.get("summary", "Call ended successfully"),
                "timestamp": "2026-01-27T10:50:00Z",
            }
        )

    return json.dumps({"error": f"Unknown tool: {name}"})


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


# ============================================================================
# TOOL ROUTING - Determines if tool call ends the conversation
# ============================================================================

CALL_ENDING_TOOLS = {
    "transfer_to_agent",  # Transfers to human agent
    "terminate_call",  # Terminates the call
}


def is_call_ending_tool(tool_name: str) -> bool:
    """Check if a tool execution should end the call."""
    return tool_name in CALL_ENDING_TOOLS


# ============================================================================
# TOOL CALL HANDLERS - Called when Claude decides to use a tool during voice call
# ============================================================================


def on_tool_call(message_id: str, name: str, args: dict) -> AssistantConversationAction:
    """
    Handle intermediate tool call from Claude (does not end the conversation).

    Called when the agent needs to execute an action like looking up customer info,
    checking order status, creating a note, etc. The conversation continues after.

    Args:
        message_id: Unique identifier for this message in the conversation
        name: Name of the tool being called (e.g., 'check_order_status')
        args: Dictionary of arguments passed to the tool

    Returns:
        AssistantConversationAction response indicating tool execution
    """
    return response(
        action=AssistantConversationAction(
            id=message_id,
            name=name,
            args=args,
            action=AssistantConversationAction.ACTION_UNSPECIFIED,
        )
    )


def on_end_tool_call(
    message_id: str, name: str, args: dict
) -> AssistantConversationAction:
    """
    Handle final tool call from Claude that ends the conversation.

    Called when the agent executes a tool that concludes the call, such as
    transferring to a human agent or scheduling a callback. This signals
    the end of the voice interaction.

    Args:
        message_id: Unique identifier for this message in the conversation
        name: Name of the tool being called (typically 'transfer_to_agent')
        args: Dictionary of arguments passed to the tool

    Returns:
        AssistantConversationAction with END_CONVERSATION action set
    """
    return response(
        action=AssistantConversationAction(
            id=message_id,
            name=name,
            args=args,
            action=AssistantConversationAction.END_CONVERSATION,
        )
    )


# ============================================================================


def stream_claude_with_tools(
    messages: list, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Stream Claude response with tool use support."""
    full_text = ""

    if not anthropic_client:
        mock_text = (
            "I'm a mock assistant. Set ANTHROPIC_API_KEY to enable real responses."
        )
        for word in mock_text.split():
            yield assistant_response(msg_id, word + " ", completed=False)
            time.sleep(0.03)
        yield assistant_response(msg_id, mock_text, completed=True)
        return

    try:
        # Filter out system messages from conversation
        filtered_messages = [m for m in messages if m["role"] != "system"]

        # Make request with tools
        response_obj = anthropic_client.messages.create(
            model=ANTHROPIC_MODEL,
            max_tokens=MAX_TOKENS,
            system=SYSTEM_PROMPT,
            tools=TOOLS,
            messages=filtered_messages,
        )

        # Process response content blocks
        tool_use_blocks = []
        text_content = ""

        for block in response_obj.content:
            if block.type == "text":
                text_content += block.text
            elif block.type == "tool_use":
                tool_use_blocks.append(block)

        # If there are tool uses, execute them
        if tool_use_blocks:
            # Stream initial text if any
            if text_content:
                for word in text_content.split():
                    yield assistant_response(msg_id, word + " ", completed=False)
                    time.sleep(0.02)

            # Execute tools and collect results
            tool_results = []
            for tool_block in tool_use_blocks:
                tool_name = tool_block.name
                tool_args = tool_block.input

                # Yield appropriate tool call action (intermediate or call-ending)
                if is_call_ending_tool(tool_name):
                    yield on_end_tool_call(msg_id, tool_name, tool_args)
                else:
                    yield on_tool_call(msg_id, tool_name, tool_args)

                # Execute the tool
                yield assistant_response(
                    msg_id, f"[Executing {tool_name}...] ", completed=False
                )
                result = execute_tool(tool_name, tool_args)
                tool_results.append(
                    {
                        "type": "tool_result",
                        "tool_use_id": tool_block.id,
                        "content": result,
                    }
                )

            # Continue conversation with tool results
            new_messages = filtered_messages + [
                {"role": "assistant", "content": response_obj.content},
                {"role": "user", "content": tool_results},
            ]

            # Stream final response
            with anthropic_client.messages.stream(
                model=ANTHROPIC_MODEL,
                max_tokens=MAX_TOKENS,
                system=SYSTEM_PROMPT,
                messages=new_messages,
            ) as stream:
                for text in stream.text_stream:
                    full_text += text
                    yield assistant_response(msg_id, text, completed=False)

        else:
            # No tools, stream the text response
            with anthropic_client.messages.stream(
                model=ANTHROPIC_MODEL,
                max_tokens=MAX_TOKENS,
                system=SYSTEM_PROMPT,
                messages=filtered_messages,
            ) as stream:
                for text in stream.text_stream:
                    full_text += text
                    yield assistant_response(msg_id, text, completed=False)

    except Exception as e:
        logger.error(f"Anthropic error: {e}")
        full_text = f"I encountered an error: {str(e)}"
        yield assistant_response(msg_id, full_text, completed=False)

    yield assistant_response(msg_id, full_text, completed=True)


class AnthropicAgentServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService with Anthropic Claude."""

    def Talk(
        self,
        request_iterator: Iterator[AssistantMessagingRequest],
        context: grpc.ServicerContext,
    ) -> Iterator[AssistantMessagingResponse]:
        """Handle bidirectional streaming AssistantTalk RPC."""
        configured = False
        messages = []
        logger.info(f"New connection from {context.peer()}")

        try:
            for request in request_iterator:
                if request.HasField("configuration"):
                    config = request.configuration
                    configured = True
                    messages = []
                    assistant_id = (
                        config.assistant.assistantId if config.assistant else "unknown"
                    )
                    logger.info(f"Configured: assistant={assistant_id}")
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
                            for resp in stream_claude_with_tools(messages, msg_id):
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
    add_AgentKitServicer_to_server(AnthropicAgentServer(), server)
    server.add_insecure_port(f"{HOST}:{PORT}")
    logger.info(f"Model: {ANTHROPIC_MODEL}, Tools: {len(TOOLS)} available")
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
