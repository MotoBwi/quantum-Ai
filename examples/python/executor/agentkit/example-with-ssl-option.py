#!/usr/bin/env python3
"""
AgentKit gRPC Server for Voice AI - TalkService Implementation

A minimal gRPC server that implements the TalkService.AssistantTalk bidirectional
streaming service for Rapida Voice AI.

Flow:
    1. Client sends configuration -> Server acks
    2. Client sends message (can send multiple)
    3. Server streams assistant chunks (completed=false)
    4. Server sends final assistant (completed=true)
    5. Server can send action for tool calls
    6. Either side can close
"""

import logging
import os
import time
from concurrent import futures
from typing import Iterator
import grpc
from grpc import ServerInterceptor
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
PROVIDER = os.getenv("LLM_PROVIDER", "anthropic").lower()
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-sonnet-4-5-20250929")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))
SYSTEM_PROMPT = os.getenv(
    "SYSTEM_PROMPT", "You are a helpful AI assistant. Be concise and friendly."
)

# Authorization Token
AUTH_TOKEN = os.getenv("AUTH_TOKEN", "mysecrettoken")

# SSL Configuration
SSL_CERT = os.getenv("SSL_CERT", "executor/agentkit/server.crt")
SSL_KEY = os.getenv("SSL_KEY", "executor/agentkit/server.key")

# LLM Clients
openai_client = None
anthropic_client = None

if PROVIDER == "openai" and OPENAI_KEY:
    from openai import OpenAI

    openai_client = OpenAI(api_key=OPENAI_KEY)
elif PROVIDER == "anthropic" and ANTHROPIC_KEY:
    from anthropic import Anthropic

    anthropic_client = Anthropic(api_key=ANTHROPIC_KEY)


# Authorization Interceptor
class AuthorizationInterceptor(ServerInterceptor):
    """Intercepts requests to validate Authorization header token."""

    def intercept_service(self, continuation, handler_call_details):
        metadata = dict(handler_call_details.invocation_metadata)
        token = metadata.get("authorization")
        if token != AUTH_TOKEN:

            def abort(ignored_request, context):
                context.abort(
                    grpc.StatusCode.UNAUTHENTICATED, "Invalid authorization token"
                )

            return grpc.unary_unary_rpc_method_handler(abort)
        return continuation(handler_call_details)


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
        code=code,
        success=False,
        error=Error(errorCode=code, errorMessage=message),
    )


def action_response(name: str, action_type: int) -> AssistantMessagingResponse:
    """Create an action response (tool call)."""
    return response(action=AssistantConversationAction(name=name, action=action_type))


def stream_llm(messages: list, msg_id: str) -> Iterator[AssistantMessagingResponse]:
    """Stream LLM response. Yields assistant response chunks."""
    full_text = ""

    if PROVIDER == "openai" and openai_client:
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

    elif PROVIDER == "anthropic" and anthropic_client:
        filtered = [m for m in messages if m["role"] != "system"]
        with anthropic_client.messages.stream(
            model=ANTHROPIC_MODEL,
            max_tokens=4096,
            system=SYSTEM_PROMPT,
            messages=filtered,
        ) as stream:
            for text in stream.text_stream:
                full_text += text
                yield assistant_response(msg_id, text, completed=False)

    else:
        # Mock response
        full_text = "Hello! I'm a mock assistant. Configure OPENAI_API_KEY or ANTHROPIC_API_KEY for real responses."
        for word in full_text.split():
            yield assistant_response(msg_id, word + " ", completed=False)
            time.sleep(0.03)

    # Send final complete message with full content
    yield assistant_response(msg_id, full_text, completed=True)


class AgenticServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService.AssistantTalk bidirectional streaming."""

    def Talk(
        self,
        request_iterator: Iterator[AssistantMessagingRequest],
        context: grpc.ServicerContext,
    ) -> Iterator[AssistantMessagingResponse]:
        """Handle bidirectional streaming AssistantTalk RPC."""
        configured = False
        messages = []
        config = None
        logger.info(f"New connection from {context.peer()}")
        try:
            for request in request_iterator:
                # Handle Configuration
                if request.HasField("configuration"):
                    config = request.configuration
                    configured = True
                    messages = []
                    assistant_id = (
                        config.assistant.assistantId if config.assistant else "unknown"
                    )
                    conv_id = config.assistantConversationId
                    logger.info(
                        f"Configured: assistant={assistant_id}, conversation={conv_id}"
                    )
                    # Acknowledge configuration
                    yield response(configuration=config)

                # Handle User Message
                elif request.HasField("message"):
                    if not configured:
                        yield error_response(400, "Not configured")
                        continue

                    msg = request.message
                    msg_id = msg.id

                    # Get text content
                    if msg.HasField("text"):
                        content = msg.text.content
                        logger.info(f"User [{msg_id}]: {content[:50]}...")

                        messages.append({"role": "user", "content": content})

                        try:
                            # Stream LLM response
                            full_text = ""
                            for resp in stream_llm(messages, msg_id):
                                if resp.assistant.completed:
                                    full_text = resp.assistant.text.content
                                yield resp

                            messages.append({"role": "assistant", "content": full_text})

                            # Example: detect hangup intent and send action
                            if any(
                                word in full_text.lower()
                                for word in ["goodbye", "bye", "end call"]
                            ):
                                logger.info("Detected end conversation intent")
                                # Could send: yield action_response("end_conversation", AssistantConversationAction.END_CONVERSATION)

                        except Exception as e:
                            logger.error(f"LLM error: {e}")
                            yield error_response(500, str(e))

                    elif msg.HasField("audio"):
                        logger.debug("Received audio message (not implemented)")
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
    # Add authorization interceptor
    interceptors = [AuthorizationInterceptor()]
    server = grpc.server(
        futures.ThreadPoolExecutor(max_workers=10), interceptors=interceptors
    )
    add_AgentKitServicer_to_server(AgenticServer(), server)
    address = f"{HOST}:{PORT}"

    # SSL credentials
    if os.path.exists(SSL_CERT) and os.path.exists(SSL_KEY):
        with open(SSL_CERT, "rb") as f:
            cert = f.read()
        with open(SSL_KEY, "rb") as f:
            key = f.read()
        # Log certificate info for debugging
        logger.info(f"Loading SSL cert from {SSL_CERT} ({len(cert)} bytes)")
        logger.info(f"Loading SSL key from {SSL_KEY} ({len(key)} bytes)")
        server_credentials = grpc.ssl_server_credentials(
            [(key, cert)],
            root_certificates=None,  # No client cert verification
            require_client_auth=False,
        )
        server.add_secure_port(address, server_credentials)
        logger.info(f"Starting gRPC server with SSL/TLS on {address}")
    else:
        server.add_insecure_port(address)
        logger.warning("SSL cert/key not found, starting insecure server!")
        logger.info(f"Starting gRPC server on {address}")
    logger.info(
        f"Provider: {PROVIDER}, Model: {ANTHROPIC_MODEL if PROVIDER == 'anthropic' else OPENAI_MODEL}"
    )
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
