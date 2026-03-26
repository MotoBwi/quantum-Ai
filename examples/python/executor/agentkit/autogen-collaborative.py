#!/usr/bin/env python3
"""
AgentKit gRPC Server - AutoGen Collaborative Agents Integration

A gRPC server implementing TalkService for Rapida Voice AI with Microsoft
AutoGen collaborative multi-agent conversations.

Features:
    - AutoGen AssistantAgent and UserProxyAgent
    - Collaborative problem-solving between agents
    - Code execution capabilities
    - Human-in-the-loop interaction patterns
    - Group chat orchestration
"""

import logging
import os
import time
from concurrent import futures
from typing import Iterator
import grpc
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
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))
ENABLE_CODE_EXECUTION = os.getenv("ENABLE_CODE_EXECUTION", "false").lower() == "true"

# AutoGen imports
try:
    from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

    AUTOGEN_AVAILABLE = True
except ImportError:
    AUTOGEN_AVAILABLE = False
    logger.warning("AutoGen not installed. Install with: pip install pyautogen")


def get_llm_config():
    """Get LLM configuration for AutoGen agents."""
    if not OPENAI_KEY:
        return None
    return {
        "model": OPENAI_MODEL,
        "api_key": OPENAI_KEY,
        "temperature": 0.7,
    }


def create_autogen_agents():
    """Create AutoGen agents for collaborative conversation."""
    if not AUTOGEN_AVAILABLE or not OPENAI_KEY:
        return None

    llm_config = get_llm_config()

    # Primary Assistant - Handles general queries
    primary_assistant = AssistantAgent(
        name="VoiceAssistant",
        system_message="""You are a helpful voice AI assistant. Your responses should be:
        - Concise (this is a voice interface)
        - Conversational and friendly
        - Clear and easy to understand when heard
        Keep responses to 2-3 sentences unless more detail is requested.
        You can collaborate with other agents when specialized knowledge is needed.""",
        llm_config=llm_config,
    )

    # Technical Expert - Handles technical questions
    tech_expert = AssistantAgent(
        name="TechExpert",
        system_message="""You are a technical expert specializing in:
        - Software and technology explanations
        - Technical troubleshooting
        - Product specifications and comparisons
        Provide accurate technical information in simple terms.
        Remember responses will be spoken aloud, so be concise.""",
        llm_config=llm_config,
    )

    # Customer Service Agent - Handles service-related queries
    service_agent = AssistantAgent(
        name="ServiceAgent",
        system_message="""You are a customer service specialist focused on:
        - Order status and tracking
        - Returns and refunds
        - Account issues
        - Policy explanations
        Be empathetic and solution-oriented.
        Provide clear next steps in a conversational manner.""",
        llm_config=llm_config,
    )

    # Research Agent - Handles information gathering
    researcher = AssistantAgent(
        name="Researcher",
        system_message="""You are a research specialist who:
        - Gathers relevant information
        - Synthesizes data from multiple sources
        - Provides factual, well-organized answers
        Focus on accuracy and relevance. Summarize findings concisely.""",
        llm_config=llm_config,
    )

    # User Proxy - Represents the human user in the conversation
    user_proxy = UserProxyAgent(
        name="User",
        human_input_mode="NEVER",  # We'll handle input manually
        max_consecutive_auto_reply=0,
        code_execution_config={"use_docker": False} if ENABLE_CODE_EXECUTION else False,
    )

    return {
        "primary": primary_assistant,
        "tech": tech_expert,
        "service": service_agent,
        "researcher": researcher,
        "user_proxy": user_proxy,
    }


def route_to_agent(query: str) -> str:
    """Route query to appropriate agent based on content."""
    query_lower = query.lower()

    # Technical queries
    if any(
        word in query_lower
        for word in [
            "how does",
            "technical",
            "code",
            "software",
            "programming",
            "computer",
            "tech",
        ]
    ):
        return "tech"

    # Service queries
    if any(
        word in query_lower
        for word in [
            "order",
            "return",
            "refund",
            "account",
            "shipping",
            "tracking",
            "cancel",
        ]
    ):
        return "service"

    # Research queries
    if any(
        word in query_lower
        for word in ["research", "find out", "what is", "explain", "information about"]
    ):
        return "researcher"

    # Default to primary assistant
    return "primary"


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


def run_autogen_conversation(
    query: str, agents: dict, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Run AutoGen conversation and yield responses."""

    if not agents:
        mock_text = "AutoGen is not configured. Please install pyautogen and set OPENAI_API_KEY."
        yield assistant_response(msg_id, mock_text, completed=True)
        return

    try:
        # Route to appropriate agent
        agent_type = route_to_agent(query)
        selected_agent = agents[agent_type]
        user_proxy = agents["user_proxy"]

        logger.info(f"Routing query to {agent_type} agent: {selected_agent.name}")
        yield assistant_response(
            msg_id, f"[Consulting {selected_agent.name}...] ", completed=False
        )

        # Initiate conversation
        chat_result = user_proxy.initiate_chat(
            selected_agent,
            message=query,
            max_turns=2,
            silent=True,
        )

        # Extract the response
        if chat_result.chat_history:
            # Get the last assistant message
            for msg in reversed(chat_result.chat_history):
                if (
                    msg.get("role") == "assistant"
                    or msg.get("name") == selected_agent.name
                ):
                    response_text = msg.get("content", "")
                    if response_text:
                        # Stream response for natural voice output
                        words = response_text.split()
                        for word in words[:-1]:
                            yield assistant_response(
                                msg_id, word + " ", completed=False
                            )
                            time.sleep(0.03)
                        yield assistant_response(msg_id, response_text, completed=True)
                        return

        # Fallback if no response found
        yield assistant_response(
            msg_id, "I apologize, I couldn't process that request.", completed=True
        )

    except Exception as e:
        logger.error(f"AutoGen error: {e}")
        error_text = f"I encountered an issue: {str(e)}"
        yield assistant_response(msg_id, error_text, completed=True)


def run_group_chat(
    query: str, agents: dict, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Run AutoGen group chat for complex queries requiring multiple agents."""

    if not agents:
        yield assistant_response(msg_id, "AutoGen is not configured.", completed=True)
        return

    try:
        yield assistant_response(
            msg_id, "[Consulting multiple experts...] ", completed=False
        )

        # Create group chat with relevant agents
        agent_list = [
            agents["primary"],
            agents["tech"],
            agents["service"],
            agents["researcher"],
        ]

        group_chat = GroupChat(
            agents=agent_list,
            messages=[],
            max_round=4,
        )

        manager = GroupChatManager(
            groupchat=group_chat,
            llm_config=get_llm_config(),
        )

        # Start group chat
        chat_result = agents["user_proxy"].initiate_chat(
            manager,
            message=query,
            max_turns=1,
        )

        # Get final response
        if chat_result.chat_history:
            final_response = chat_result.chat_history[-1].get("content", "")
            if final_response:
                words = final_response.split()
                for word in words[:-1]:
                    yield assistant_response(msg_id, word + " ", completed=False)
                    time.sleep(0.03)
                yield assistant_response(msg_id, final_response, completed=True)
                return

        yield assistant_response(
            msg_id, "The team couldn't reach a conclusion.", completed=True
        )

    except Exception as e:
        logger.error(f"Group chat error: {e}")
        yield assistant_response(
            msg_id, f"Error in group discussion: {str(e)}", completed=True
        )


def run_simple_fallback(
    query: str, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Simple fallback when AutoGen is not available."""
    if OPENAI_KEY:
        from openai import OpenAI

        client = OpenAI(api_key=OPENAI_KEY)

        stream = client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful voice assistant. Be concise.",
                },
                {"role": "user", "content": query},
            ],
            stream=True,
        )

        full_text = ""
        for chunk in stream:
            if chunk.choices and chunk.choices[0].delta.content:
                content = chunk.choices[0].delta.content
                full_text += content
                yield assistant_response(msg_id, content, completed=False)

        yield assistant_response(msg_id, full_text, completed=True)
    else:
        yield assistant_response(
            msg_id, "Please set OPENAI_API_KEY for responses.", completed=True
        )


class AutoGenCollaborativeServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService with AutoGen collaborative agents."""

    def __init__(self):
        self.agents = None
        if AUTOGEN_AVAILABLE and OPENAI_KEY:
            self.agents = create_autogen_agents()

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
                            if self.agents:
                                # Use group chat for complex queries
                                is_complex = (
                                    len(content.split()) > 20
                                    or "and" in content.lower()
                                )
                                if is_complex:
                                    full_text = ""
                                    for resp in run_group_chat(
                                        content, self.agents, msg_id
                                    ):
                                        if resp.assistant.completed:
                                            full_text = resp.assistant.text.content
                                        yield resp
                                else:
                                    full_text = ""
                                    for resp in run_autogen_conversation(
                                        content, self.agents, msg_id
                                    ):
                                        if resp.assistant.completed:
                                            full_text = resp.assistant.text.content
                                        yield resp
                            else:
                                full_text = ""
                                for resp in run_simple_fallback(content, msg_id):
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
    server = grpc.server(
        futures.ThreadPoolExecutor(max_workers=10),
    )
    add_AgentKitServicer_to_server(AutoGenCollaborativeServer(), server)
    address = f"{HOST}:{PORT}"
    server.add_insecure_port(address)
    logger.info(f"AutoGen Available: {AUTOGEN_AVAILABLE}")
    logger.info("Agents: VoiceAssistant, TechExpert, ServiceAgent, Researcher")
    logger.info(f"Code Execution: {ENABLE_CODE_EXECUTION}")
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
