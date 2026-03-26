"""
Rapida AgentKit Example — Python gRPC Agent Server

This example shows how to build a voice AI agent that connects to Rapida's
assistant-api via the AgentKit protocol. The external agent owns the full
conversation loop: LLM calls, tool execution, and state management.

Protocol flow (mirrors WebTalk/WebRTC):
  1. Rapida → initialization   — first message, always. Acknowledge it.
  2. Rapida → configuration    — optional mode change. Acknowledge it.
  3. Rapida → message          — user turn. Stream assistant replies back.

Run:
    python main.py [--port 50051] [--token mysecret] [--insecure]

Point your Rapida assistant's AgentKit provider URL at:
    localhost:50051   (insecure/dev)
"""

import argparse
import datetime
import json
import logging
import signal
import sys
import uuid

from rapida import AgentKitAgent, AgentKitServer

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s — %(message)s",
)
logger = logging.getLogger("agentkit-example")


# ---------------------------------------------------------------------------
# Tool definitions
# ---------------------------------------------------------------------------

TOOLS = {
    "get_weather": {
        "description": "Get the current weather for a city.",
        "params": ["city"],
    },
    "get_time": {
        "description": "Get the current UTC time.",
        "params": [],
    },
    "end_call": {
        "description": "End the conversation immediately.",
        "params": ["reason"],
    },
    "transfer_call": {
        "description": "Transfer the call to another number or department.",
        "params": ["destination"],
    },
}


def execute_tool(name: str, args: dict) -> dict:
    """Simulate tool execution. Replace with real integrations."""
    if name == "get_weather":
        city = args.get("city", "unknown")
        return {"city": city, "temp_c": 22, "condition": "partly cloudy"}
    elif name == "get_time":
        return {"utc": datetime.datetime.utcnow().isoformat() + "Z"}
    elif name == "end_call":
        return {"ok": True, "reason": args.get("reason", "requested")}
    elif name == "transfer_call":
        return {"ok": True, "destination": args.get("destination", "support")}
    return {"error": f"unknown tool: {name}"}


# ---------------------------------------------------------------------------
# Minimal LLM stub — replace with your real LLM (OpenAI, Anthropic, etc.)
# ---------------------------------------------------------------------------

def call_llm(conversation_id: int, history: list[dict], user_text: str) -> tuple[str, str | None, dict]:
    """
    Stub LLM call. Returns (response_text, tool_name_or_None, tool_args).

    Replace this with real LLM calls. Example with OpenAI:

        import openai
        client = openai.OpenAI(api_key="sk-...")
        resp = client.chat.completions.create(
            model="gpt-4o",
            messages=history + [{"role": "user", "content": user_text}],
            tools=[...],
        )
        ...
    """
    text_lower = user_text.lower()

    # Tool routing (keyword-based for demo purposes)
    if "weather" in text_lower:
        city = "London"
        for word in user_text.split():
            if word[0].isupper() and len(word) > 2:
                city = word
                break
        return "", "get_weather", {"city": city}

    if "time" in text_lower or "clock" in text_lower:
        return "", "get_time", {}

    words_lower = set(text_lower.replace("?", "").replace(".", "").split())
    if any(kw in words_lower for kw in ("bye", "goodbye", "end", "hang", "stop")):
        return "Goodbye! Have a great day.", "end_call", {"reason": "user requested"}

    if "transfer" in text_lower or "support" in text_lower:
        return "", "transfer_call", {"destination": "support"}

    # Default echo with a helpful reply
    return f"You said: \"{user_text}\". How can I help you further?", None, {}


# ---------------------------------------------------------------------------
# Agent implementation
# ---------------------------------------------------------------------------

class ExampleAgent(AgentKitAgent):
    """
    Example AgentKit agent demonstrating the full protocol.

    Implements:
    - Initialization acknowledgement
    - Configuration acknowledgement
    - Tool calls (get_weather, get_time, end_call, transfer_call)
    - Streaming text responses
    - Conversation history tracking per session
    """

    def __init__(self):
        # Per-conversation state: { conversation_id: [{"role": ..., "content": ...}] }
        self._histories: dict[int, list[dict]] = {}

    # ------------------------------------------------------------------
    # gRPC streaming RPC — the main entry point
    # ------------------------------------------------------------------

    def Talk(self, request_iterator, context):
        """
        Bidirectional streaming RPC. Called once per conversation by Rapida.

        Rapida sends TalkInput messages; we yield TalkOutput messages back.
        The stream stays open for the entire conversation lifetime.
        """
        conversation_id: int | None = None

        for request in request_iterator:

            # ── 1. Initialization ──────────────────────────────────────
            if self.is_initialization_request(request):
                conversation_id = self.get_conversation_id(request)
                assistant_id = self.get_assistant_id(request)

                logger.info(
                    "Conversation initialized: conv_id=%s assistant_id=%s",
                    conversation_id,
                    assistant_id,
                )

                # Set up conversation history with a system prompt
                self._histories[conversation_id] = [
                    {
                        "role": "system",
                        "content": (
                            "You are a helpful voice assistant. "
                            "Be concise — responses will be spoken aloud. "
                            "Available tools: get_weather, get_time, end_call, transfer_call."
                        ),
                    }
                ]

                # Always acknowledge initialization first
                yield self.initialization_response(request.initialization)

            # ── 2. Configuration ───────────────────────────────────────
            elif self.is_configuration_request(request):
                logger.info("Configuration update received for conv_id=%s", conversation_id)
                yield self.configuration_response(request.configuration)

            # ── 3. User message ────────────────────────────────────────
            elif self.is_message_request(request):
                msg_id = self.get_message_id(request)

                if self.is_text_message(request):
                    user_text = self.get_user_text(request)
                    logger.info("User [conv=%s msg=%s]: %s", conversation_id, msg_id, user_text)

                    # Add to history
                    history = self._histories.get(conversation_id, [])
                    history.append({"role": "user", "content": user_text})

                    # Call LLM / tool router
                    reply_text, tool_name, tool_args = call_llm(
                        conversation_id, history, user_text
                    )

                    if tool_name:
                        # ── Tool call flow ──────────────────────────────
                        tool_id = str(uuid.uuid4())

                        # Notify Rapida we're calling a tool (observability)
                        yield self.tool_call(msg_id, tool_id, tool_name, tool_args)

                        # Execute the tool
                        result = execute_tool(tool_name, tool_args)
                        logger.info(
                            "Tool %s(%s) → %s", tool_name, tool_args, result
                        )

                        # Directives: end_call / transfer_call
                        if tool_name == "end_call":
                            yield self.tool_call_result(
                                msg_id, tool_id, tool_name, result, success=True
                            )
                            if reply_text:
                                yield self.assistant_response(msg_id, reply_text, completed=False)
                                yield self.assistant_response(msg_id, reply_text, completed=True)
                            yield self.terminate_call(msg_id, result)
                            # Stream ends — Rapida will close the conversation
                            return

                        if tool_name == "transfer_call":
                            yield self.tool_call_result(
                                msg_id, tool_id, tool_name, result, success=True
                            )
                            yield self.transfer_call(msg_id, result)
                            return

                        # Regular tool — build a reply from the result
                        yield self.tool_call_result(
                            msg_id, tool_id, tool_name, result, success=True
                        )

                        # Generate a human-readable reply from the tool result
                        if tool_name == "get_weather":
                            city = result.get("city", "")
                            temp = result.get("temp_c", "?")
                            cond = result.get("condition", "")
                            reply = f"In {city} it's {temp}°C and {cond}."
                        elif tool_name == "get_time":
                            reply = f"The current UTC time is {result.get('utc', '?')}."
                        else:
                            reply = json.dumps(result)

                        # Add tool result + assistant reply to history
                        history.append(
                            {"role": "tool", "name": tool_name, "content": json.dumps(result)}
                        )
                        history.append({"role": "assistant", "content": reply})

                        # Stream the reply back in chunks
                        yield from self._stream_text(msg_id, reply)

                    else:
                        # ── Plain text response ─────────────────────────
                        history.append({"role": "assistant", "content": reply_text})
                        yield from self._stream_text(msg_id, reply_text)

                elif self.is_audio_message(request):
                    # Audio messages — your STT happens on Rapida's side so by
                    # the time AgentKit receives messages they are already text.
                    # This branch handles raw audio if stream_mode=AUDIO is set.
                    logger.debug("Audio message received (not handled in this example)")
                    yield self.assistant_response(
                        msg_id,
                        "Audio input is not supported in this example.",
                        completed=True,
                    )

    # ------------------------------------------------------------------
    # Helpers
    # ------------------------------------------------------------------

    def _stream_text(self, msg_id: str, text: str):
        """
        Yield text in word-by-word chunks followed by a completed=True sentinel.

        This simulates streaming from an LLM. With a real LLM you'd iterate
        over the streamed tokens and yield each chunk with completed=False,
        then yield the full text with completed=True.
        """
        words = text.split()
        buffer = ""
        for i, word in enumerate(words):
            buffer += ("" if i == 0 else " ") + word
            # Yield a chunk every 3 words (tune to taste)
            if (i + 1) % 3 == 0:
                yield self.assistant_response(msg_id, buffer, completed=False)
                buffer = ""

        # Flush remaining words
        if buffer:
            yield self.assistant_response(msg_id, buffer, completed=False)

        # Final message with completed=True carries the full text
        # so Rapida can use it for TTS / history storage.
        yield self.assistant_response(msg_id, text, completed=True)


# ---------------------------------------------------------------------------
# Entry point
# ---------------------------------------------------------------------------

def parse_args():
    parser = argparse.ArgumentParser(description="Rapida AgentKit example server")
    parser.add_argument("--port", type=int, default=50051, help="gRPC port (default: 50051)")
    parser.add_argument("--host", default="0.0.0.0", help="Bind host (default: 0.0.0.0)")
    parser.add_argument("--workers", type=int, default=10, help="Thread pool size (default: 10)")
    parser.add_argument("--token", default=None, help="Auth token (enables auth if set)")
    parser.add_argument("--cert", default=None, help="Path to SSL certificate (.crt)")
    parser.add_argument("--key", default=None, help="Path to SSL private key (.key)")
    return parser.parse_args()


def main():
    args = parse_args()

    ssl_config = None
    if args.cert and args.key:
        ssl_config = {"cert_path": args.cert, "key_path": args.key}

    auth_config = None
    if args.token:
        auth_config = {"enabled": True, "token": args.token}

    server = AgentKitServer(
        agent=ExampleAgent(),
        host=args.host,
        port=args.port,
        max_workers=args.workers,
        ssl_config=ssl_config,
        auth_config=auth_config,
    )

    server.start()

    logger.info("AgentKit server listening on %s", server.address)
    if ssl_config:
        logger.info("SSL enabled")
    if auth_config:
        logger.info("Auth enabled (token required)")
    logger.info("Press Ctrl+C to stop")

    # Graceful shutdown on SIGINT / SIGTERM
    def _shutdown(signum, frame):
        logger.info("Shutting down...")
        server.stop(grace=5)
        sys.exit(0)

    signal.signal(signal.SIGINT, _shutdown)
    signal.signal(signal.SIGTERM, _shutdown)

    server.wait_for_termination()


if __name__ == "__main__":
    main()
