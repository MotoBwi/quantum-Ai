#!/usr/bin/env python3
"""Quick test client for the AgentKit gRPC server."""

import sys
import grpc
from rapida.clients.protos.agentkit_pb2 import TalkInput, TalkOutput
from rapida.clients.protos.agentkit_pb2_grpc import AgentKitStub
from rapida.clients.protos.talk_api_pb2 import (
    ConversationInitialization,
    ConversationUserMessage,
)
from rapida.clients.protos.common_pb2 import AssistantDefinition


def request_generator():
    """Generate a sequence of requests to test the agent."""
    # 1. Send initialization
    print("[CLIENT] Sending initialization...")
    yield TalkInput(
        initialization=ConversationInitialization(
            assistantConversationId=12345,
            assistant=AssistantDefinition(assistantId=1),
        )
    )

    # 2. Send a user message
    print("[CLIENT] Sending message: 'Hello, I need help with my order'")
    yield TalkInput(
        message=ConversationUserMessage(
            id="msg-001",
            text="Hello, I need help with my order",
        )
    )

    # 3. Send another message
    print("[CLIENT] Sending message: 'Can you check order ORD-98765?'")
    yield TalkInput(
        message=ConversationUserMessage(
            id="msg-002",
            text="Can you check order ORD-98765?",
        )
    )


def main():
    host = sys.argv[1] if len(sys.argv) > 1 else "localhost:50051"
    print(f"[CLIENT] Connecting to {host}...")

    channel = grpc.insecure_channel(host)
    stub = AgentKitStub(channel)

    try:
        responses = stub.Talk(request_generator())
        for resp in responses:
            if resp.HasField("initialization"):
                print(
                    f"[SERVER] Initialization ACK (conv={resp.initialization.assistantConversationId})"
                )
            elif resp.HasField("assistant"):
                msg = resp.assistant
                status = "FINAL" if msg.completed else "chunk"
                text = msg.text[:80] if msg.text else ""
                print(f"[SERVER] [{status}] {text}")
            elif resp.HasField("tool"):
                print(f"[SERVER] Tool call: {resp.tool.name}({resp.tool.id})")
            elif resp.HasField("toolResult"):
                print(
                    f"[SERVER] Tool result: {resp.toolResult.name} success={resp.toolResult.success}"
                )
            elif resp.HasField("directive"):
                print(f"[SERVER] Directive: type={resp.directive.type}")
            elif resp.HasField("error"):
                print(f"[SERVER] Error: {resp.error.errorMessage}")
            else:
                print(f"[SERVER] Response: code={resp.code} success={resp.success}")
    except grpc.RpcError as e:
        print(f"[CLIENT] RPC error: {e.code()} - {e.details()}")
    finally:
        channel.close()
        print("[CLIENT] Done.")


if __name__ == "__main__":
    main()
