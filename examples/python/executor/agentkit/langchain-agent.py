#!/usr/bin/env python3
"""
AgentKit gRPC Server - LangChain Agent Integration

A gRPC server implementing TalkService for Rapida Voice AI with LangChain
ReAct agents and tool chains.

Features:
    - LangChain ReAct agent with customizable tools
    - Memory management for conversations
    - Multiple LLM backend support (OpenAI, Anthropic)
    - Retrieval-Augmented Generation (RAG) support
    - Custom tool creation and chaining
"""

import logging
import os
import time
from concurrent import futures
from typing import Iterator, Any

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
LLM_PROVIDER = os.getenv("LLM_PROVIDER", "openai")  # "openai" or "anthropic"
OPENAI_KEY = os.getenv("OPENAI_API_KEY")
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
ANTHROPIC_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-sonnet-4-5-20250929")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))


SYSTEM_PROMPT = os.getenv(
    "SYSTEM_PROMPT",
    """You are a helpful voice AI assistant with access to various tools.
    You can search the web, look up information, perform calculations, and more.
    Be concise since this is a voice interface. Always explain what you're doing.""",
)

# LangChain imports
try:
    from langchain.agents import AgentExecutor, create_react_agent
    from langchain_core.prompts import PromptTemplate
    from langchain_core.tools import Tool, StructuredTool
    from langchain.memory import ConversationBufferWindowMemory
    from langchain_core.callbacks import BaseCallbackHandler
    from pydantic import BaseModel, Field

    LANGCHAIN_AVAILABLE = True
except ImportError:
    LANGCHAIN_AVAILABLE = False
    logger.warning(
        "LangChain not installed. Install with: pip install langchain langchain-openai langchain-anthropic"
    )

# LLM setup
llm = None
if LANGCHAIN_AVAILABLE:
    if LLM_PROVIDER == "openai" and OPENAI_KEY:
        from langchain_openai import ChatOpenAI

        llm = ChatOpenAI(model=OPENAI_MODEL, api_key=OPENAI_KEY, streaming=True)
    elif LLM_PROVIDER == "anthropic" and ANTHROPIC_KEY:
        from langchain_anthropic import ChatAnthropic

        llm = ChatAnthropic(
            model=ANTHROPIC_MODEL, api_key=ANTHROPIC_KEY, streaming=True
        )


# Custom Tool Definitions
def search_web(query: str) -> str:
    """Simulate web search."""
    logger.info(f"Web search: {query}")
    return f"Search results for '{query}': Found 3 relevant articles about {query}. The most relevant information suggests that {query} is a topic of current interest with recent developments in the field."


def get_weather(location: str) -> str:
    """Get weather for a location."""
    logger.info(f"Getting weather for: {location}")
    return f"The weather in {location} is currently 72°F (22°C) with partly cloudy skies. Humidity is 45% with light winds from the west."


def calculate(expression: str) -> str:
    """Perform a calculation."""
    logger.info(f"Calculating: {expression}")
    try:
        # Safe evaluation of mathematical expressions
        allowed_names = {"__builtins__": {}}
        result = eval(expression, allowed_names, {})
        return f"The result of {expression} is {result}"
    except Exception as e:
        return f"Error calculating {expression}: {str(e)}"


def lookup_database(query: str, table: str = "customers") -> str:
    """Look up information in a database."""
    logger.info(f"Database lookup: {query} in {table}")
    mock_data = {
        "customers": {
            "result": "Found customer John Doe (ID: 12345) - Premium member since 2023"
        },
        "orders": {
            "result": "Order #98765 - Shipped on 2026-01-25, tracking: 1Z999AA1"
        },
        "products": {
            "result": "Product SKU-001: Widget Pro - $49.99, In Stock (150 units)"
        },
    }
    return mock_data.get(table, {}).get(
        "result", f"No results found for {query} in {table}"
    )


def send_notification(recipient: str, message: str, channel: str = "email") -> str:
    """Send a notification to someone."""
    logger.info(f"Sending {channel} notification to {recipient}")
    return f"Notification sent to {recipient} via {channel}: '{message[:50]}...'"


# Create LangChain tools
LANGCHAIN_TOOLS = []
if LANGCHAIN_AVAILABLE:
    LANGCHAIN_TOOLS = [
        Tool(
            name="web_search",
            description="Search the web for current information. Use this when you need to find up-to-date information.",
            func=search_web,
        ),
        Tool(
            name="weather",
            description="Get the current weather for a location. Input should be a city name.",
            func=get_weather,
        ),
        Tool(
            name="calculator",
            description="Perform mathematical calculations. Input should be a mathematical expression.",
            func=calculate,
        ),
        Tool(
            name="database_lookup",
            description="Look up information in the database. Input format: 'query|table' where table is customers, orders, or products.",
            func=lambda x: lookup_database(
                x.split("|")[0], x.split("|")[1] if "|" in x else "customers"
            ),
        ),
        Tool(
            name="send_notification",
            description="Send a notification. Input format: 'recipient|message|channel' where channel is email, sms, or push.",
            func=lambda x: send_notification(*[p.strip() for p in x.split("|")[:3]]),
        ),
    ]


# ReAct Prompt Template
REACT_PROMPT = """Answer the following questions as best you can. You have access to the following tools:

{tools}

Use the following format:

Question: the input question you must answer
Thought: you should always think about what to do
Action: the action to take, should be one of [{tool_names}]
Action Input: the input to the action
Observation: the result of the action
... (this Thought/Action/Action Input/Observation can repeat N times)
Thought: I now know the final answer
Final Answer: the final answer to the original input question

Important: Be concise in your final answer since this is a voice interface.

Begin!

Question: {input}
Thought:{agent_scratchpad}"""


class StreamingCallback(BaseCallbackHandler):
    """Callback to capture streaming tokens."""

    def __init__(self):
        self.tokens = []

    def on_llm_new_token(self, token: str, **kwargs) -> None:
        self.tokens.append(token)


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


def run_langchain_agent(
    user_input: str, memory: Any, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Run the LangChain agent and yield responses."""

    if not LANGCHAIN_AVAILABLE or not llm:
        mock_text = (
            "LangChain is not configured. Please install langchain and set API keys."
        )
        yield assistant_response(msg_id, mock_text, completed=True)
        return

    try:
        # Create prompt
        prompt = PromptTemplate(
            template=REACT_PROMPT,
            input_variables=["input", "agent_scratchpad", "tools", "tool_names"],
        )

        # Create agent
        agent = create_react_agent(llm, LANGCHAIN_TOOLS, prompt)

        # Create executor with memory
        agent_executor = AgentExecutor(
            agent=agent,
            tools=LANGCHAIN_TOOLS,
            memory=memory,
            verbose=True,
            handle_parsing_errors=True,
            max_iterations=5,
        )

        # Initial thinking indicator
        yield assistant_response(msg_id, "Let me think about that... ", completed=False)

        # Run agent
        result = agent_executor.invoke({"input": user_input})
        output = result.get("output", "I couldn't process that request.")

        # Stream the response word by word for natural voice output
        words = output.split()
        for i, word in enumerate(words[:-1]):
            yield assistant_response(msg_id, word + " ", completed=False)
            time.sleep(0.03)

        # Final response
        yield assistant_response(msg_id, output, completed=True)

    except Exception as e:
        logger.error(f"LangChain agent error: {e}")
        error_text = f"I encountered an issue: {str(e)}"
        yield assistant_response(msg_id, error_text, completed=True)


class LangChainAgentServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService with LangChain agent."""

    def __init__(self):
        # Store memories per conversation
        self.conversation_memories = {}

    def get_memory(self, conversation_id: str):
        """Get or create conversation memory."""
        if not LANGCHAIN_AVAILABLE:
            return None
        if conversation_id not in self.conversation_memories:
            self.conversation_memories[conversation_id] = (
                ConversationBufferWindowMemory(
                    memory_key="chat_history",
                    return_messages=True,
                    k=10,  # Keep last 10 exchanges
                )
            )
        return self.conversation_memories[conversation_id]

    def Talk(
        self,
        request_iterator: Iterator[AssistantMessagingRequest],
        context: grpc.ServicerContext,
    ) -> Iterator[AssistantMessagingResponse]:
        """Handle bidirectional streaming AssistantTalk RPC."""
        configured = False
        conversation_id = None
        logger.info(f"New connection from {context.peer()}")

        try:
            for request in request_iterator:
                if request.HasField("configuration"):
                    config = request.configuration
                    configured = True
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

                        try:
                            memory = self.get_memory(conversation_id)
                            for resp in run_langchain_agent(content, memory, msg_id):
                                yield resp

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
            # Clean up memory for this conversation
            if conversation_id and conversation_id in self.conversation_memories:
                del self.conversation_memories[conversation_id]


def serve():
    """Start the gRPC server."""
    server = grpc.server(
        futures.ThreadPoolExecutor(max_workers=10),
    )
    add_AgentKitServicer_to_server(LangChainAgentServer(), server)
    address = f"{HOST}:{PORT}"
    server.add_insecure_port(address)
    logger.info(f"LLM Provider: {LLM_PROVIDER}")
    logger.info(f"Available tools: {[t.name for t in LANGCHAIN_TOOLS]}")
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
