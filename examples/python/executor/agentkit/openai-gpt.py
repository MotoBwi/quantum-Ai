#!/usr/bin/env python3
"""
AgentKit gRPC Server - OpenAI GPT Integration with Function Calling

A gRPC server implementing TalkService for Rapida Voice AI with OpenAI GPT
models and function calling capabilities.

Features:
    - OpenAI GPT-4o / GPT-4o-mini integration
    - Function calling support for tool execution
    - Streaming responses
    - Conversation history management
"""

import json
import logging
import os
import time
from concurrent import futures
from typing import Iterator, Any

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
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))
SYSTEM_PROMPT = os.getenv(
    "SYSTEM_PROMPT",
    """You are a helpful voice AI assistant. Be concise, friendly, and conversational.
    You have access to tools to help users with their requests.
    When using tools, explain what you're doing briefly.""",
)


# OpenAI Client
openai_client = None
if OPENAI_KEY:
    from openai import OpenAI

    openai_client = OpenAI(api_key=OPENAI_KEY)
else:
    logger.warning("OPENAI_API_KEY not set, using mock responses")

# Define available tools for function calling
TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather for a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g., 'San Francisco, CA'",
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "Temperature unit",
                    },
                },
                "required": ["location"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "search_knowledge",
            "description": "Search the knowledge base for information",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {
                        "type": "string",
                        "description": "Search query",
                    },
                },
                "required": ["query"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "schedule_appointment",
            "description": "Schedule an appointment",
            "parameters": {
                "type": "object",
                "properties": {
                    "date": {
                        "type": "string",
                        "description": "Date in YYYY-MM-DD format",
                    },
                    "time": {"type": "string", "description": "Time in HH:MM format"},
                    "purpose": {
                        "type": "string",
                        "description": "Purpose of the appointment",
                    },
                },
                "required": ["date", "time", "purpose"],
            },
        },
    },
    {
        "type": "function",
        "function": {
            "name": "transfer_call",
            "description": "Transfer the call to a human agent",
            "parameters": {
                "type": "object",
                "properties": {
                    "department": {
                        "type": "string",
                        "enum": ["sales", "support", "billing"],
                        "description": "Department to transfer to",
                    },
                    "reason": {"type": "string", "description": "Reason for transfer"},
                },
                "required": ["department"],
            },
        },
    },
]


def execute_tool(name: str, args: dict) -> dict:
    """Execute a tool and return the result."""
    logger.info(f"Executing tool: {name} with args: {args}")

    if name == "get_weather":
        # Mock weather response
        return {
            "location": args.get("location", "Unknown"),
            "temperature": 72,
            "unit": args.get("unit", "fahrenheit"),
            "condition": "sunny",
            "humidity": 45,
        }
    elif name == "search_knowledge":
        # Mock knowledge base search
        return {
            "query": args.get("query"),
            "results": [
                {
                    "title": "Relevant Article 1",
                    "summary": "This is a relevant article...",
                },
                {
                    "title": "Relevant Article 2",
                    "summary": "Another relevant result...",
                },
            ],
        }
    elif name == "schedule_appointment":
        return {
            "success": True,
            "appointment_id": "APT-12345",
            "date": args.get("date"),
            "time": args.get("time"),
            "purpose": args.get("purpose"),
        }
    elif name == "transfer_call":
        return {
            "success": True,
            "department": args.get("department"),
            "estimated_wait": "2 minutes",
        }
    else:
        return {"error": f"Unknown tool: {name}"}


def response(
    code: int = 200, success: bool = True, **kwargs
) -> AssistantMessagingResponse:
    """Create a response message."""
    return AssistantMessagingResponse(code=code, success=success, **kwargs)


def assistant_response(
    msg_id: str, content: str, completed: bool = False
) -> AssistantMessagingResponse:
    """Create an assistant response with text content."""
    return response(
        assistant=AssistantConversationAssistantMessage(
            id=msg_id,
            completed=completed,
            text=AssistantConversationMessageTextContent(content=content),
        )
    )


def error_response(code: int, message: str) -> AssistantMessagingResponse:
    """Create an error response."""
    return response(
        code=code, success=False, error=Error(errorCode=code, errorMessage=message)
    )


def action_response(
    name: str, action_type: int, args: dict = None
) -> AssistantMessagingResponse:
    """Create an action response (tool call notification)."""
    from google.protobuf.any_pb2 import Any

    action = AssistantConversationAction(name=name, action=action_type)
    if args:
        for k, v in args.items():
            any_val = Any()
            any_val.Pack(v) if hasattr(v, "DESCRIPTOR") else None
            action.args[k].CopyFrom(any_val)
    return response(action=action)


def stream_openai_with_tools(
    messages: list, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Stream OpenAI response with function calling support."""
    full_text = ""

    if not openai_client:
        # Mock response
        mock_text = "I'm a mock assistant. Set OPENAI_API_KEY to enable real responses."
        for word in mock_text.split():
            yield assistant_response(msg_id, word + " ", completed=False)
            time.sleep(0.03)
        yield assistant_response(msg_id, mock_text, completed=True)
        return

    try:
        # First, make a non-streaming call to check for tool calls
        response_obj = openai_client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=[{"role": "system", "content": SYSTEM_PROMPT}] + messages,
            tools=TOOLS,
            tool_choice="auto",
        )

        assistant_message = response_obj.choices[0].message

        # Handle tool calls
        if assistant_message.tool_calls:
            for tool_call in assistant_message.tool_calls:
                func_name = tool_call.function.name
                func_args = json.loads(tool_call.function.arguments)

                # Notify about tool execution
                yield assistant_response(
                    msg_id, f"Let me {func_name.replace('_', ' ')}... ", completed=False
                )

                # Execute the tool
                result = execute_tool(func_name, func_args)

                # Add tool result to messages
                messages.append(
                    {
                        "role": "assistant",
                        "content": None,
                        "tool_calls": [
                            {
                                "id": tool_call.id,
                                "type": "function",
                                "function": {
                                    "name": func_name,
                                    "arguments": tool_call.function.arguments,
                                },
                            }
                        ],
                    }
                )
                messages.append(
                    {
                        "role": "tool",
                        "tool_call_id": tool_call.id,
                        "content": json.dumps(result),
                    }
                )

            # Get final response after tool execution
            stream = openai_client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=[{"role": "system", "content": SYSTEM_PROMPT}] + messages,
                stream=True,
            )

            for chunk in stream:
                if chunk.choices and chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    full_text += content
                    yield assistant_response(msg_id, content, completed=False)

        else:
            # No tool calls, stream the response
            stream = openai_client.chat.completions.create(
                model=OPENAI_MODEL,
                messages=[{"role": "system", "content": SYSTEM_PROMPT}] + messages,
                stream=True,
            )

            for chunk in stream:
                if chunk.choices and chunk.choices[0].delta.content:
                    content = chunk.choices[0].delta.content
                    full_text += content
                    yield assistant_response(msg_id, content, completed=False)

    except Exception as e:
        logger.error(f"OpenAI error: {e}")
        full_text = f"I encountered an error: {str(e)}"
        yield assistant_response(msg_id, full_text, completed=False)

    # Send final complete message
    yield assistant_response(msg_id, full_text, completed=True)


class OpenAIAgentServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService with OpenAI GPT."""

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
                            for resp in stream_openai_with_tools(messages, msg_id):
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
    add_AgentKitServicer_to_server(OpenAIAgentServer(), server)
    server.add_insecure_port(f"{HOST}:{PORT}")
    logger.info(f"Model: {OPENAI_MODEL}, Tools: {len(TOOLS)} available")
    server.start()
    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
