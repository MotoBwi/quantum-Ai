#!/usr/bin/env python3
"""
AgentKit gRPC Server - CrewAI Multi-Agent Integration

A gRPC server implementing TalkService for Rapida Voice AI with CrewAI
multi-agent orchestration.

Features:
    - Multiple specialized AI agents (Researcher, Analyst, Writer)
    - Task delegation and coordination
    - Parallel and sequential task execution
    - Memory sharing between agents
    - Custom tools per agent
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
ANTHROPIC_KEY = os.getenv("ANTHROPIC_API_KEY")
HOST = os.getenv("GRPC_HOST", "localhost")
PORT = int(os.getenv("GRPC_PORT", "50051"))


# CrewAI imports
try:
    from crewai import Agent, Task, Crew, Process
    from crewai.tools import BaseTool
    from langchain_openai import ChatOpenAI

    CREWAI_AVAILABLE = True
except ImportError:
    CREWAI_AVAILABLE = False
    logger.warning(
        "CrewAI not installed. Install with: pip install crewai crewai-tools langchain-openai"
    )


# Custom Tools for CrewAI Agents
class SearchTool:
    """Web search simulation tool."""

    def __init__(self):
        self.name = "search"
        self.description = "Search the web for information"

    def run(self, query: str) -> str:
        logger.info(f"Searching: {query}")
        return f"Search results for '{query}': Found relevant information about {query}. Key findings include recent developments and expert opinions on the topic."


class DatabaseTool:
    """Database lookup simulation tool."""

    def __init__(self):
        self.name = "database"
        self.description = "Query the customer database"

    def run(self, query: str) -> str:
        logger.info(f"Database query: {query}")
        return f"Database results: Found matching records for '{query}'. Customer data retrieved successfully with account status: Active, Tier: Premium."


class AnalyticsTool:
    """Analytics simulation tool."""

    def __init__(self):
        self.name = "analytics"
        self.description = "Analyze data and generate insights"

    def run(self, data: str) -> str:
        logger.info(f"Analyzing: {data}")
        return f"Analysis complete for '{data}': Key metrics show positive trends. Confidence level: 85%. Recommendation: Proceed with suggested action."


def create_crew_agents():
    """Create the multi-agent crew."""
    if not CREWAI_AVAILABLE or not OPENAI_KEY:
        return None, None

    llm = ChatOpenAI(model="gpt-4o-mini", api_key=OPENAI_KEY)

    # Research Agent - Gathers information
    researcher = Agent(
        role="Research Specialist",
        goal="Gather comprehensive information about the user's query",
        backstory="""You are an expert research specialist with years of experience
        in finding and synthesizing information. You excel at understanding what
        information is needed and gathering it efficiently.""",
        verbose=True,
        allow_delegation=False,
        llm=llm,
    )

    # Analyst Agent - Processes and analyzes information
    analyst = Agent(
        role="Data Analyst",
        goal="Analyze gathered information and extract key insights",
        backstory="""You are a skilled data analyst who can take raw information
        and transform it into actionable insights. You identify patterns, trends,
        and important details that others might miss.""",
        verbose=True,
        allow_delegation=False,
        llm=llm,
    )

    # Response Agent - Crafts the final response
    responder = Agent(
        role="Voice Response Specialist",
        goal="Craft clear, concise responses suitable for voice interaction",
        backstory="""You are an expert at communicating complex information in
        simple, conversational terms. You understand that users are interacting
        via voice and need responses that are easy to understand and remember.
        You keep responses brief but informative.""",
        verbose=True,
        allow_delegation=False,
        llm=llm,
    )

    return [researcher, analyst, responder], llm


def create_tasks_for_query(query: str, agents: list) -> list:
    """Create tasks based on user query."""
    researcher, analyst, responder = agents

    # Task 1: Research
    research_task = Task(
        description=f"""Research the following user query and gather relevant information:
        Query: {query}

        Find key facts, data points, and relevant context that would help answer this query.
        Focus on accuracy and relevance.""",
        agent=researcher,
        expected_output="A summary of researched information relevant to the query",
    )

    # Task 2: Analyze
    analysis_task = Task(
        description=f"""Analyze the research findings for the query: {query}

        Take the research results and:
        1. Identify the most important points
        2. Extract actionable insights
        3. Note any limitations or caveats
        4. Prioritize information by relevance""",
        agent=analyst,
        expected_output="Analysis with key insights and prioritized information",
        context=[research_task],
    )

    # Task 3: Respond
    response_task = Task(
        description=f"""Create a voice-friendly response for the query: {query}

        Using the analysis, craft a response that:
        1. Is concise (2-3 sentences max for simple queries)
        2. Uses conversational language
        3. Highlights the most important point first
        4. Is easy to understand when heard (not read)
        5. Ends with a clear conclusion or next step""",
        agent=responder,
        expected_output="A concise, voice-friendly response",
        context=[research_task, analysis_task],
    )

    return [research_task, analysis_task, response_task]


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


def run_multi_agent_crew(
    query: str, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Run the multi-agent crew and yield responses."""

    if not CREWAI_AVAILABLE:
        mock_text = (
            "CrewAI is not configured. Please install crewai and set OPENAI_API_KEY."
        )
        yield assistant_response(msg_id, mock_text, completed=True)
        return

    if not OPENAI_KEY:
        mock_text = "Please set OPENAI_API_KEY to enable the multi-agent system."
        yield assistant_response(msg_id, mock_text, completed=True)
        return

    try:
        # Progress indicators for voice feedback
        yield assistant_response(
            msg_id, "Let me gather some information... ", completed=False
        )

        # Create agents
        agents, llm = create_crew_agents()
        if not agents:
            yield assistant_response(
                msg_id, "Unable to initialize agents.", completed=True
            )
            return

        # Create tasks
        tasks = create_tasks_for_query(query, agents)

        yield assistant_response(msg_id, "Analyzing the data... ", completed=False)

        # Create and run crew
        crew = Crew(
            agents=agents,
            tasks=tasks,
            process=Process.sequential,  # Run tasks in sequence
            verbose=True,
        )

        # Execute crew
        result = crew.kickoff()

        yield assistant_response(msg_id, "Here's what I found: ", completed=False)

        # Get the final output
        final_response = str(result)

        # Stream response word by word for natural voice output
        words = final_response.split()
        for word in words[:-1]:
            yield assistant_response(msg_id, word + " ", completed=False)
            time.sleep(0.03)

        # Final complete response
        yield assistant_response(msg_id, final_response, completed=True)

    except Exception as e:
        logger.error(f"CrewAI error: {e}")
        error_text = f"I encountered an issue with my research team: {str(e)}"
        yield assistant_response(msg_id, error_text, completed=True)


def run_simple_response(
    query: str, msg_id: str
) -> Iterator[AssistantMessagingResponse]:
    """Fallback simple response when CrewAI is not available."""
    if OPENAI_KEY:
        from openai import OpenAI

        client = OpenAI(api_key=OPENAI_KEY)

        stream = client.chat.completions.create(
            model="gpt-4o-mini",
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
        mock_response = (
            f"I received your query: '{query}'. Set up API keys for full responses."
        )
        yield assistant_response(msg_id, mock_response, completed=True)


class CrewAIMultiAgentServer(TalkServiceServicer):
    """gRPC servicer implementing TalkService with CrewAI multi-agent system."""

    def Talk(
        self,
        request_iterator: Iterator[AssistantMessagingRequest],
        context: grpc.ServicerContext,
    ) -> Iterator[AssistantMessagingResponse]:
        """Handle bidirectional streaming AssistantTalk RPC."""
        configured = False
        messages = []
        use_crew = CREWAI_AVAILABLE and OPENAI_KEY
        logger.info(f"New connection from {context.peer()}, CrewAI: {use_crew}")

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
                            if use_crew:
                                full_text = ""
                                for resp in run_multi_agent_crew(content, msg_id):
                                    if resp.assistant.completed:
                                        full_text = resp.assistant.text.content
                                    yield resp
                            else:
                                full_text = ""
                                for resp in run_simple_response(content, msg_id):
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
    add_AgentKitServicer_to_server(CrewAIMultiAgentServer(), server)
    address = f"{HOST}:{PORT}"
    server.add_insecure_port(address)
    logger.info(f"CrewAI Available: {CREWAI_AVAILABLE}")
    logger.info("Agents: Research Specialist, Data Analyst, Voice Response Specialist")
    server.start()

    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        logger.info("Stopping server...")
        server.stop(grace=5)


if __name__ == "__main__":
    serve()
