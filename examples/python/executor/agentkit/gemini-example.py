#!/usr/bin/env python3
"""
AgentKit gRPC Server - Google Gemini Travel Companion Integration

A gRPC server implementing TalkService for Rapida Voice AI with Google's Gemini API.
Features a travel companion with location, weather, and attraction discovery.

Features:
    - Google Gemini API integration
    - Function calling for travel services
    - Location-based recommendations
    - Streaming responses
    - Travel assistant capabilities

Setup:
    pip install google-genai
    export GOOGLE_API_KEY="your-google-api-key"
    python gemini-example.py

The server will start on `localhost:50051`.
"""

import json
import logging
import os
import time
from typing import Iterator

import grpc
from google import genai
from google.genai import types
from rapida import (
    AgentKitAgent,
    AgentKitServer,
    TalkInput,
    TalkOutput,
)

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Configuration
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "1024"))

# Initialize Google Generative AI (google-genai)
gemini_client = None
if GOOGLE_API_KEY:
    gemini_client = genai.Client(api_key=GOOGLE_API_KEY)
    logger.info(f"Initialized Gemini client with model: {GEMINI_MODEL}")
else:
    logger.warning("GOOGLE_API_KEY not set, using mock responses")

# ============================================================================
# SYSTEM PROMPT FOR TRAVEL COMPANION
# ============================================================================

SYSTEM_PROMPT = os.getenv(
    "SYSTEM_PROMPT",
    """You are a helpful and friendly travel companion voice assistant for phone calls.

VOICE INTERACTION GUIDELINES:
- Keep responses concise and natural for voice (2-3 sentences max)
- Speak conversationally, avoid special characters and technical jargon
- Use clear pronunciation and natural pacing
- Acknowledge the user warmly and professionally
- Ask clarifying questions one at a time

TRAVEL COMPANION CAPABILITIES:
- Help users find their current location
- Provide weather information (Celsius & Fahrenheit)
- Recommend nearby restaurants and attractions
- Suggest tourist destinations and museums
- Provide local travel tips and information
- Set and save favorite locations

CONVERSATION FLOW:
- Start: "Hello! I'm your travel companion. How can I help you explore today?"
- Middle: Gather preferences, use tools to find information
- End: "Is there anything else? Thank you for using travel companion!"

RESPONSE GUIDELINES:
- Always be helpful and encouraging about travel experiences
- Provide practical, actionable recommendations
- Ask follow-up questions to better assist
- Be honest about limitations (e.g., "I don't have real-time prices")
- Keep responses brief - this is a voice interface""",
)

# ============================================================================
# TRAVEL COMPANION TOOLS
# ============================================================================

TOOLS = [
    {
        "name": "get_current_location",
        "description": "Get the user's current location (city, coordinates)",
        "parameters_json_schema": {
            "type": "object",
            "properties": {},
            "required": [],
        },
    },
    {
        "name": "get_weather",
        "description": "Get current weather information for a location",
        "parameters_json_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name or location",
                }
            },
            "required": ["location"],
        },
    },
    {
        "name": "find_attractions",
        "description": "Find nearby tourist attractions, restaurants, or points of interest",
        "parameters_json_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name or location",
                },
                "category": {
                    "type": "string",
                    "enum": ["restaurants", "museums", "parks", "landmarks", "hotels"],
                    "description": "Type of attractions to find",
                },
                "radius_km": {
                    "type": "number",
                    "description": "Search radius in kilometers",
                },
            },
            "required": ["location", "category"],
        },
    },
    {
        "name": "save_location",
        "description": "Save a favorite location for the user",
        "parameters_json_schema": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "Name of the location/place",
                },
                "address": {
                    "type": "string",
                    "description": "Full address",
                },
                "latitude": {
                    "type": "number",
                    "description": "Latitude coordinate",
                },
                "longitude": {
                    "type": "number",
                    "description": "Longitude coordinate",
                },
            },
            "required": ["name", "address", "latitude", "longitude"],
        },
    },
    {
        "name": "terminate_call",
        "description": "Call this function to terminate the call",
        "parameters_json_schema": {
            "type": "object",
            "properties": {
                "reason": {
                    "type": "string",
                    "enum": ["issue_resolved", "customer_goodbye", "transfer_complete"],
                    "description": "Reason for call termination",
                },
                "summary": {
                    "type": "string",
                    "description": "Brief summary of the travel assistance provided",
                },
            },
            "required": ["reason"],
        },
    },
]


def is_call_ending_tool(tool_name: str) -> bool:
    """Check if a tool execution should end the call."""
    return tool_name == "terminate_call"


# ============================================================================
# TOOL EXECUTION
# ============================================================================


def execute_tool(name: str, args: dict) -> str:
    """Execute a tool and return the result as a string."""
    logger.info(f"Executing tool: {name} with args: {args}")

    if name == "get_current_location":
        return json.dumps(
            {
                "success": True,
                "city": "San Francisco",
                "country": "United States",
                "latitude": 37.7749,
                "longitude": -122.4194,
            }
        )

    elif name == "get_weather":
        return json.dumps(
            {
                "success": True,
                "location": args.get("location", "San Francisco"),
                "condition": "Partly Cloudy",
                "temperature_celsius": 18,
                "temperature_fahrenheit": 64,
                "humidity": 65,
                "wind_speed_kmh": 12,
            }
        )

    elif name == "find_attractions":
        attractions = {
            "restaurants": [
                {"name": "The French Laundry", "distance_km": 8.5, "cuisine": "French"},
                {
                    "name": "State Bird Provisions",
                    "distance_km": 3.2,
                    "cuisine": "American",
                },
            ],
            "museums": [
                {"name": "de Young Museum", "distance_km": 5.0},
                {"name": "California Academy of Sciences", "distance_km": 5.2},
            ],
            "parks": [
                {"name": "Golden Gate Park", "distance_km": 2.5},
                {"name": "Mission Dolores Park", "distance_km": 4.0},
            ],
        }

        return json.dumps(
            {
                "success": True,
                "location": args.get("location"),
                "category": args.get("category"),
                "attractions": attractions.get(args.get("category"), []),
            }
        )

    elif name == "save_location":
        return json.dumps(
            {
                "success": True,
                "name": args.get("name"),
                "address": args.get("address"),
                "message": f"Saved {args.get('name')} to your favorites!",
            }
        )

    elif name == "terminate_call":
        return json.dumps(
            {
                "success": True,
                "call_terminated": True,
                "reason": args.get("reason", "issue_resolved"),
                "summary": args.get("summary", "Travel assistance completed"),
            }
        )

    return json.dumps({"error": f"Unknown tool: {name}"})


# ============================================================================
# GEMINI AGENT IMPLEMENTATION
# ============================================================================


class GeminiTravelAgent(AgentKitAgent):
    """
    Travel companion agent using Google Gemini.

    Extends AgentKitAgent to use built-in response builders for
    sending data back to Rapida.
    """

    def Talk(
        self,
        request_iterator: Iterator[TalkInput],
        context: grpc.ServicerContext,
    ) -> Iterator[TalkOutput]:
        """Handle bidirectional streaming Talk RPC."""
        configured = False
        messages = []
        logger.info(f"New connection from {context.peer()}")

        try:
            for request in request_iterator:
                # Handle configuration request
                if self.is_configuration_request(request):
                    config = request.configuration
                    configured = True
                    messages = []
                    assistant_id = (
                        config.assistant.assistantId if config.assistant else "unknown"
                    )
                    logger.info(f"Configured: assistant={assistant_id}")
                    # yield self.configuration_response(config)

                # Handle message request
                elif self.is_message_request(request):
                    if not configured:
                        yield self.error_response(400, "Not configured")
                        continue

                    # Handle text message
                    if self.is_text_message(request):
                        msg_id = self.get_message_id(request)
                        content = self.get_user_text(request)
                        logger.info(f"User [{msg_id}]: {content[:50]}...")
                        messages.append({"role": "user", "content": content})

                        try:
                            full_text = ""
                            for resp in self._stream_gemini_response(messages, msg_id):
                                if resp.assistant.completed:
                                    full_text = resp.assistant.text
                                yield resp
                            messages.append({"role": "assistant", "content": full_text})
                            logger.info(
                                f"[{msg_id}] Response completed, conversation has {len(messages)} messages"
                            )

                        except Exception as e:
                            logger.error(f"[{msg_id}] Error: {e}", exc_info=True)
                            yield self.error_response(500, str(e))

                    # Handle audio message
                    elif self.is_audio_message(request):
                        yield self.error_response(501, "Audio not implemented")

                else:
                    yield self.error_response(400, "Unknown request type")

        except grpc.RpcError as e:
            logger.error(f"RPC error: {e}")
        except Exception as e:
            logger.error(f"Unexpected error: {e}")
        finally:
            logger.info("Connection closed")

    def _stream_gemini_response(
        self, messages: list, msg_id: str
    ) -> Iterator[TalkOutput]:
        """
        Stream Gemini responses with tool calling.
        Uses AgentKitAgent response builders to send data back to Rapida.
        """
        start_time = time.time()
        logger.info(f"[{msg_id}] Streaming with {len(messages)} messages")
        full_text = ""

        # Handle missing API key with mock response
        if not gemini_client:
            logger.warning("Gemini client not initialized, returning mock response")
            mock_text = "I'm a travel assistant! I can help you with location services, weather info, restaurants, and attractions. What would you like to know?"
            for word in mock_text.split():
                yield self.assistant_response(msg_id, word + " ", completed=False)
                time.sleep(0.03)
            yield self.assistant_response(msg_id, mock_text, completed=True)
            return

        try:
            # Filter out system messages from conversation
            filtered_messages = [m for m in messages if m.get("role") != "system"]

            # Convert messages to google-genai format
            formatted_messages = []
            for msg in filtered_messages:
                if msg.get("role") == "user":
                    formatted_messages.append(
                        types.Content(
                            role="user",
                            parts=[types.Part.from_text(text=msg.get("content", ""))],
                        )
                    )
                elif msg.get("role") == "assistant":
                    formatted_messages.append(
                        types.Content(
                            role="model",
                            parts=[types.Part.from_text(text=msg.get("content", ""))],
                        )
                    )

            # Create tool definitions for google-genai
            tools_declaration = types.Tool(function_declarations=TOOLS)

            # Send request to Gemini API
            logger.info(f"[{msg_id}] Sending request to Gemini with tools")
            request_start = time.time()
            response_obj = gemini_client.models.generate_content(
                model=GEMINI_MODEL,
                contents=formatted_messages,
                config=types.GenerateContentConfig(
                    system_instruction=SYSTEM_PROMPT,
                    tools=[tools_declaration],
                    temperature=0.7,
                    top_p=0.95,
                    max_output_tokens=MAX_TOKENS,
                ),
            )
            request_time = time.time() - request_start
            logger.info(
                f"[{msg_id}] Received response from Gemini in {request_time:.2f}s"
            )

            # Process response content blocks
            tool_use_blocks = []
            text_content = ""

            logger.info(
                f"[{msg_id}] Processing {len(response_obj.candidates[0].content.parts)} response blocks"
            )
            for idx, block in enumerate(response_obj.candidates[0].content.parts):
                logger.debug(f"[{msg_id}] Block {idx}: {type(block).__name__}")
                if hasattr(block, "text") and block.text:
                    logger.debug(f"[{msg_id}] Found text block: {block.text[:50]}...")
                    text_content += block.text
                elif hasattr(block, "function_call"):
                    logger.info(
                        f"[{msg_id}] Found function call: {block.function_call.name}"
                    )
                    tool_use_blocks.append(block)

            # If there are tool uses, execute them
            if tool_use_blocks:
                logger.info(f"[{msg_id}] Found {len(tool_use_blocks)} tools to execute")

                # Stream initial text if any
                if text_content:
                    logger.info(f"[{msg_id}] Streaming initial text before tools")
                    for word in text_content.split():
                        full_text += word + " "
                        yield self.assistant_response(
                            msg_id, word + " ", completed=False
                        )
                        time.sleep(0.02)

                # Execute tools and collect results
                tool_results = []
                has_ending_tool = False

                for tool_idx, tool_block in enumerate(tool_use_blocks):
                    tool_name = tool_block.function_call.name
                    tool_args = (
                        dict(tool_block.function_call.args)
                        if tool_block.function_call.args
                        else {}
                    )

                    # Execute the tool
                    logger.info(
                        f"[{msg_id}] Executing tool {tool_idx + 1}/{len(tool_use_blocks)}: {tool_name} with args {tool_args}"
                    )
                    self.tool_call(msg_id, tool_idx, tool_name, tool_args)
                    tool_result = execute_tool(tool_name, tool_args)
                    tool_results.append((tool_block, tool_result))

                    # Yield appropriate tool call action using AgentKitAgent methods
                    if is_call_ending_tool(tool_name):
                        logger.info(f"[{msg_id}] Tool {tool_name} is call-ending")
                        has_ending_tool = True
                        yield self.terminate_call(
                            msg_id, {"reason": "end_call triggered"}
                        )
                    else:
                        logger.info(f"[{msg_id}] Tool {tool_name} is intermediate")
                        yield self.tool_call_result(
                            msg_id, tool_idx, tool_name, tool_result
                        )

                # If call is ending, don't continue with Gemini
                if has_ending_tool:
                    logger.info(f"[{msg_id}] Call ending tool executed, stopping")
                    yield self.assistant_response(
                        msg_id, full_text.strip(), completed=True
                    )
                    return

                # Continue conversation with tool results back to Gemini
                logger.info(
                    f"[{msg_id}] Sending {len(tool_results)} tool results back to Gemini"
                )

                # Build function response parts
                function_response_parts = []
                for tool_block, result in tool_results:
                    function_response_parts.append(
                        types.Part.from_function_response(
                            name=tool_block.function_call.name,
                            response=json.loads(result),
                        )
                    )

                # Add assistant's tool call and user's tool response to conversation
                formatted_messages.append(
                    types.Content(
                        role="model",
                        parts=response_obj.candidates[0].content.parts,
                    )
                )
                formatted_messages.append(
                    types.Content(
                        role="user",
                        parts=function_response_parts,
                    )
                )

                # Get final response from Gemini with tool results
                logger.info(
                    f"[{msg_id}] Requesting final response from Gemini after tool execution"
                )
                final_response = gemini_client.models.generate_content(
                    model=GEMINI_MODEL,
                    contents=formatted_messages,
                    config=types.GenerateContentConfig(
                        system_instruction=SYSTEM_PROMPT,
                        tools=[tools_declaration],
                        temperature=0.7,
                        top_p=0.95,
                        max_output_tokens=MAX_TOKENS,
                    ),
                )

                # Extract and stream final text
                final_text = ""
                for block in final_response.candidates[0].content.parts:
                    if hasattr(block, "text") and block.text:
                        final_text += block.text

                if final_text:
                    logger.info(
                        f"[{msg_id}] Streaming final response: {final_text[:50]}..."
                    )
                    for word in final_text.split():
                        full_text += word + " "
                        yield self.assistant_response(
                            msg_id, word + " ", completed=False
                        )
                        time.sleep(0.02)

            else:
                # No tools, stream the text response
                logger.info(f"[{msg_id}] No tools found, streaming text response only")
                for word in text_content.split():
                    full_text += word + " "
                    yield self.assistant_response(msg_id, word + " ", completed=False)
                    time.sleep(0.02)

        except Exception as e:
            logger.error(f"[{msg_id}] Gemini error: {e}", exc_info=True)
            full_text = f"I encountered an error: {str(e)}"
            yield self.assistant_response(msg_id, full_text, completed=False)

        total_time = time.time() - start_time
        logger.info(f"[{msg_id}] Completed in {total_time:.2f}s")
        yield self.assistant_response(msg_id, full_text, completed=True)


# ============================================================================
# SERVER STARTUP
# ============================================================================


def serve():
    """Start the Gemini Travel Companion gRPC server."""
    logger.info("Starting Gemini Travel Companion gRPC server...")

    # Create agent and server using Rapida AgentKit
    agent = GeminiTravelAgent()
    server = AgentKitServer(agent=agent, host=HOST, port=PORT)

    # Start server
    server.start()
    logger.info(f"Server listening on {server.address}")

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Shutting down server...")
        server.stop(0)


# ============================================================================
# MAIN ENTRY POINT
# ============================================================================


if __name__ == "__main__":
    serve()
