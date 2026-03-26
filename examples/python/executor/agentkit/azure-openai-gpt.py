#!/usr/bin/env python3
"""
AgentKit gRPC Server - Azure OpenAI GPT-4.1 Nano Integration

A gRPC server implementing TalkService for Rapida Voice AI with Azure OpenAI
GPT-4.1 Nano model for efficient voice agent operations.

Features:
    - Azure OpenAI GPT-4.1 Nano integration (fast & cost-effective)
    - Function calling for tool use in voice conversations
    - Optimized for voice interactions with concise responses
    - Streaming responses for real-time voice synthesis
    - Call context preservation across tool executions


Setup:
    1. Set Azure OpenAI credentials:
       export AZURE_OPENAI_KEY="your-key"
       export AZURE_OPENAI_ENDPOINT="https://your-instance.openai.azure.com/"
       export AZURE_OPENAI_DEPLOYMENT="gpt-4-1-nano" # or your deployment name

    2. Optional settings:
       export OPENAI_API_VERSION="2024-12-01" (or latest)
       export SYSTEM_PROMPT="Custom voice agent prompt"

    3. Run the server:
       python azure-openai-gpt.py
"""

import json
import logging
import os
import time
from typing import Iterator, Optional

from openai import AzureOpenAI
from rapida import AgentKitAgent, AgentKitServer

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# ============================================================================
# AZURE OPENAI CONFIGURATION
# ============================================================================

AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY")
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT")
AZURE_OPENAI_DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT", "gpt-4-1-nano")
OPENAI_API_VERSION = os.getenv("OPENAI_API_VERSION", "2024-12-01")

# gRPC Configuration
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "512"))  # Nano is efficient, keep concise

# ============================================================================
# VOICE AGENT SYSTEM PROMPT
# ============================================================================

SYSTEM_PROMPT = os.getenv(
    "SYSTEM_PROMPT",
    """You are a professional voice AI customer service agent for phone calls.

CRITICAL VOICE GUIDELINES:
- Keep ALL responses under 30 words (voice interface requirement)
- Use natural, conversational speech - no technical jargon
- Ask ONE question at a time
- Speak clearly with natural pauses
- Always confirm customer identity before sensitive info
- Summarize actions taken before ending call

VOICE-SPECIFIC BEHAVIOR:
- Start: "Hello, thank you for calling. How can I help you today?"
- Middle: Gather info, use tools, speak naturally
- End: "Is there anything else? Thank you for calling!"

AVAILABLE TOOLS AND WHEN TO USE THEM:

1. verify_identity
   - When: Customer calls and you need to confirm who they are
   - Why: Required before accessing account details
   
2. check_shipment
   - When: Customer asks about order status or tracking
   - Why: Provide real-time shipment information
   
3. process_return
   - When: Customer wants to return or refund an order
   - Why: Handle returns and process refunds
   
4. create_note
   - When: Before ending call or after resolving issues
   - Why: Document the call in their account
   
5. transfer_call
   - When: Customer needs a human agent (beyond your capability)
   - Why: Connect to specialist support team
   
6. terminate_call
   - When: Customer says goodbye or issue is resolved
   - Why: Properly end the call

DECISION FLOW:
→ Greet and verify identity (verify_identity)
→ Help with their issue (check_shipment, process_return)
→ Document with note (create_note)
→ End call with terminate_call

Remember: This is VOICE - be brief, friendly, use natural pauses.""",
)

# ============================================================================
# AZURE OPENAI CLIENT INITIALIZATION
# ============================================================================

azure_client: Optional[AzureOpenAI] = None

if AZURE_OPENAI_KEY and AZURE_OPENAI_ENDPOINT:
    azure_client = AzureOpenAI(
        api_key=AZURE_OPENAI_KEY,
        api_version=OPENAI_API_VERSION,
        azure_endpoint=AZURE_OPENAI_ENDPOINT,
    )
    logger.info(
        f"Azure OpenAI connected. Deployment: {AZURE_OPENAI_DEPLOYMENT}, API Version: {OPENAI_API_VERSION}"
    )
else:
    logger.warning(
        "AZURE_OPENAI_KEY or AZURE_OPENAI_ENDPOINT not set, using mock responses"
    )

# ============================================================================
# VOICE AGENT TOOLS (Optimized for Phone Calls)
# ============================================================================

TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "verify_identity",
            "description": "Verify customer identity before accessing account",
            "parameters": {
                "type": "object",
                "properties": {
                    "customer_id": {
                        "type": "string",
                        "description": "Phone number or account number",
                    },
                    "verification_code": {
                        "type": "string",
                        "description": "Last 4 digits of SSN or verification PIN",
                    },
                },
                "required": ["customer_id", "verification_code"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "check_shipment",
            "description": "Check order and shipment status",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_id": {
                        "type": "string",
                        "description": "Customer's order ID",
                    },
                },
                "required": ["order_id"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "process_return",
            "description": "Process a return and initiate refund",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_id": {
                        "type": "string",
                        "description": "Order to return",
                    },
                    "reason": {
                        "type": "string",
                        "enum": [
                            "damaged",
                            "wrong_item",
                            "not_as_described",
                            "changed_mind",
                        ],
                        "description": "Reason for return",
                    },
                },
                "required": ["order_id", "reason"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "create_note",
            "description": "Add a note to customer account about this call",
            "parameters": {
                "type": "object",
                "properties": {
                    "summary": {
                        "type": "string",
                        "description": "Brief summary of what was discussed",
                    },
                },
                "required": ["summary"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "transfer_call",
            "description": "Transfer call to human agent or department",
            "parameters": {
                "type": "object",
                "properties": {
                    "department": {
                        "type": "string",
                        "enum": ["support", "sales", "billing", "technical"],
                        "description": "Where to transfer",
                    },
                    "reason": {
                        "type": "string",
                        "description": "Why transferring",
                    },
                },
                "required": ["department", "reason"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "terminate_call",
            "description": "Call this function to terminate the call",
            "parameters": {
                "type": "object",
                "properties": {
                    "reason": {
                        "type": "string",
                        "enum": [
                            "issue_resolved",
                            "customer_goodbye",
                            "transfer_complete",
                        ],
                        "description": "Reason for call termination",
                    },
                    "summary": {
                        "type": "string",
                        "description": "Brief summary of what was accomplished",
                    },
                },
                "required": ["reason"],
            },
        },
    },
]

# ============================================================================
# TOOL EXECUTION FUNCTIONS
# ============================================================================


def execute_tool(name: str, args: dict) -> str:
    """Execute a tool and return voice-friendly response."""
    logger.info(f"Executing tool: {name}")

    if name == "verify_identity":
        return json.dumps(
            {
                "success": True,
                "message": "Identity verified",
                "customer_name": "John Doe",
            }
        )

    elif name == "check_shipment":
        return json.dumps(
            {
                "order_id": args.get("order_id"),
                "status": "in_transit",
                "tracking": "1Z999AA10123456784",
                "carrier": "UPS",
                "delivery_date": "January 29, 2026",
            }
        )

    elif name == "process_return":
        return json.dumps(
            {
                "success": True,
                "return_id": "RET-12345",
                "refund_amount": "$99.99",
                "timeline": "3-5 business days",
                "label": "Sent via email",
            }
        )

    elif name == "create_note":
        return json.dumps(
            {
                "success": True,
                "note_saved": True,
            }
        )

    elif name == "transfer_call":
        return json.dumps(
            {
                "success": True,
                "message": "Connecting you now. Please stay on the line.",
                "department": args.get("department"),
            }
        )

    elif name == "terminate_call":
        return json.dumps(
            {
                "success": True,
                "call_terminated": True,
                "reason": args.get("reason", "issue_resolved"),
                "summary": args.get("summary", "Call ended successfully"),
            }
        )

    return json.dumps({"error": f"Unknown tool: {name}"})


# ============================================================================
# TOOL ROUTING - Determines if tool call ends the conversation
# ============================================================================

CALL_ENDING_TOOLS = {
    "transfer_call",  # Transfers to human agent (call ends)
    "terminate_call",  # Terminates the call
}


# ============================================================================
# GRPC SERVICE IMPLEMENTATION
# ============================================================================


class AzureOpenAIAgent(AgentKitAgent):
    """AgentKit agent using Azure OpenAI GPT-4.1 Nano for voice conversations."""

    def Talk(self, request_iterator, context):
        """Handle bidirectional streaming Talk RPC."""
        initialized = False
        messages = []
        logger.info(f"New call from {context.peer()}")

        try:
            for request in request_iterator:
                # 1. Initialization — always first
                if self.is_initialization_request(request):
                    conv_id = self.get_conversation_id(request)
                    assistant_id = self.get_assistant_id(request)
                    initialized = True
                    messages = []
                    logger.info(
                        f"Call initialized: conversation={conv_id}, assistant={assistant_id}"
                    )
                    yield self.initialization_response(request.initialization)

                # 2. Configuration — optional mode change
                elif self.is_configuration_request(request):
                    logger.info("Configuration received")
                    yield self.configuration_response(request.configuration)

                # 3. User message — main conversation logic
                elif self.is_message_request(request):
                    if not initialized:
                        yield self.error_response(400, "Not initialized")
                        continue

                    msg_id = self.get_message_id(request)

                    if self.is_text_message(request):
                        content = self.get_user_text(request)
                        logger.info(f"Caller [{msg_id}]: {content[:50]}...")
                        messages.append({"role": "user", "content": content})

                        try:
                            full_text = ""
                            for resp in self._stream_with_tools(messages, msg_id):
                                # Track the final completed text
                                if (
                                    resp.HasField("assistant")
                                    and resp.assistant.completed
                                ):
                                    full_text = resp.assistant.text
                                yield resp

                            if full_text:
                                messages.append(
                                    {"role": "assistant", "content": full_text}
                                )

                        except Exception as e:
                            logger.error(f"Error processing message: {e}")
                            yield self.error_response(500, str(e))

                    elif self.is_audio_message(request):
                        yield self.error_response(
                            501, "Audio input not yet implemented"
                        )

        except Exception as e:
            logger.error(f"Unexpected error: {e}")
        finally:
            logger.info("Call ended")

    # ========================================================================
    # AZURE OPENAI STREAMING WITH FUNCTION CALLING
    # ========================================================================

    def _stream_with_tools(self, messages: list, msg_id: str):
        """Stream Azure OpenAI GPT-4.1 Nano response with function calling."""
        full_text = ""

        if not azure_client:
            mock_text = "I'm a mock assistant. Set Azure OpenAI credentials to enable real responses."
            for word in mock_text.split():
                yield self.assistant_response(msg_id, word + " ", completed=False)
                time.sleep(0.03)
            yield self.assistant_response(msg_id, mock_text, completed=True)
            return

        try:
            # Filter system messages from conversation history
            filtered_messages = [m for m in messages if m.get("role") != "system"]

            # Initial request with function calling
            response_obj = azure_client.chat.completions.create(
                model=AZURE_OPENAI_DEPLOYMENT,
                messages=[{"role": "system", "content": SYSTEM_PROMPT}]
                + filtered_messages,
                tools=TOOLS,
                tool_choice="auto",
                max_tokens=MAX_TOKENS,
                temperature=0.7,
            )

            # Check if we got a tool call
            if (
                response_obj.choices[0].finish_reason == "tool_calls"
                and response_obj.choices[0].message.tool_calls
            ):
                tool_calls = response_obj.choices[0].message.tool_calls
                assistant_message_content = (
                    response_obj.choices[0].message.content or ""
                )

                # Stream initial text if any
                if assistant_message_content:
                    for word in assistant_message_content.split():
                        yield self.assistant_response(
                            msg_id, word + " ", completed=False
                        )
                        time.sleep(0.02)

                # Execute tools
                tool_results = []
                for tc in tool_calls:
                    tool_name = tc.function.name
                    tool_args = json.loads(tc.function.arguments)

                    # Yield appropriate action based on tool type
                    if tool_name == "transfer_call":
                        yield self.transfer_call(msg_id, tool_args)
                    elif tool_name == "terminate_call":
                        yield self.terminate_call(msg_id, tool_args)
                    else:
                        yield self.tool_call(msg_id, tc.id, tool_name, tool_args)

                    # Execute the tool locally
                    yield self.assistant_response(
                        msg_id, f"[Processing {tool_name}...] ", completed=False
                    )
                    result = execute_tool(tool_name, tool_args)
                    result_dict = json.loads(result)

                    # Send tool result back
                    yield self.tool_call_result(
                        msg_id, tc.id, tool_name, result_dict, success=True
                    )

                    tool_results.append(
                        {
                            "tool_call_id": tc.id,
                            "role": "tool",
                            "name": tool_name,
                            "content": result,
                        }
                    )

                # Continue conversation with tool results
                new_messages = (
                    filtered_messages
                    + [
                        {
                            "role": "assistant",
                            "content": assistant_message_content,
                            "tool_calls": tool_calls,
                        }
                    ]
                    + tool_results
                )

                # Get final response after tool execution
                final_response = azure_client.chat.completions.create(
                    model=AZURE_OPENAI_DEPLOYMENT,
                    messages=[{"role": "system", "content": SYSTEM_PROMPT}]
                    + new_messages,
                    tools=TOOLS,
                    tool_choice="none",
                    max_tokens=MAX_TOKENS,
                    temperature=0.7,
                )

                final_text = final_response.choices[0].message.content or ""
                for word in final_text.split():
                    full_text += word + " "
                    yield self.assistant_response(msg_id, word + " ", completed=False)
                    time.sleep(0.02)

            else:
                # No tool call, just stream the response
                text_content = response_obj.choices[0].message.content or ""
                for word in text_content.split():
                    full_text += word + " "
                    yield self.assistant_response(msg_id, word + " ", completed=False)
                    time.sleep(0.02)

        except Exception as e:
            logger.error(f"Azure OpenAI error: {e}")
            full_text = "I encountered an error. Please try again."
            yield self.assistant_response(msg_id, full_text, completed=False)

        yield self.assistant_response(msg_id, full_text.strip(), completed=True)


# ============================================================================
# SERVER STARTUP
# ============================================================================


def serve():
    """Start the gRPC server."""
    logger.info(
        f"Voice Agent Server Starting"
        f"\n  Model: {AZURE_OPENAI_DEPLOYMENT}"
        f"\n  Provider: Azure OpenAI"
        f"\n  Tools: {len(TOOLS)} available"
        f"\n  Listen: {HOST}:{PORT}"
        f"\n  Max Response: {MAX_TOKENS} tokens"
    )

    server = AgentKitServer(
        agent=AzureOpenAIAgent(),
        host=HOST,
        port=PORT,
        max_workers=10,
    )
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
