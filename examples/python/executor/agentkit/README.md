# AgentKit gRPC Server Example

A Python gRPC server implementing the TalkService.AssistantTalk bidirectional streaming service for Rapida Voice AI.

## Quick Start

```bash
# Install dependencies (for Anthropic and OpenAI)
pip install -r requirements.txt

# For Gemini example (separate dependencies due to protobuf conflicts)
# pip install -r requirements-gemini.txt

# Generate proto files
python -m grpc_tools.protoc \
    -I../../../../protos/artifacts \
    --python_out=. \
    --grpc_python_out=. \
    talk-api.proto common.proto

# Using Anthropic (default)
export ANTHROPIC_API_KEY="your-api-key"
python anthropic-claude.py

# Or using OpenAI
export OPENAI_API_KEY="your-api-key"
python openai-gpt.py

# Or using Gemini (separate environment)
export GOOGLE_API_KEY="your-api-key"
python gemini-example.py
```

The server will start on `localhost:50051`.

## Setup Notes

- **Main requirements.txt**: Supports Anthropic and OpenAI models
- **requirements-gemini.txt**: Use this for Gemini example with google-genai (has different protobuf constraints)

## Environment Variables

| Variable            | Default                      | Description                                |
| ------------------- | ---------------------------- | ------------------------------------------ |
| `LLM_PROVIDER`      | `anthropic`                  | LLM provider: `openai` or `anthropic`      |
| `OPENAI_API_KEY`    | -                            | OpenAI API key (required for OpenAI)       |
| `ANTHROPIC_API_KEY` | -                            | Anthropic API key (required for Anthropic) |
| `OPENAI_MODEL`      | `gpt-4o-mini`                | OpenAI model to use                        |
| `ANTHROPIC_MODEL`   | `claude-sonnet-4-5-20250929` | Anthropic model to use                     |
| `GRPC_HOST`         | `localhost`                  | gRPC server host                           |
| `GRPC_PORT`         | `50051`                      | gRPC server port                           |
| `SYSTEM_PROMPT`     | Default assistant prompt     | System prompt for LLM                      |

**Note:** If no API key is set, the server falls back to mock responses.

## Protocol

The server implements `TalkService.AssistantTalk` bidirectional streaming RPC from `talk-api.proto`.

### Request Types (Client → Server)

#### Configuration

Sent first to initialize the session.

```protobuf
AssistantMessagingRequest {
  configuration: AssistantConversationConfiguration {
    assistantConversationId: 12345
    assistant: AssistantDefinition {
      assistantId: 67890
      version: "1.0.0"
    }
    args: { ... }
    metadata: { ... }
  }
}
```

#### User Message

Send user input to the LLM.

```protobuf
AssistantMessagingRequest {
  message: AssistantConversationUserMessage {
    id: "msg-123"
    text: AssistantConversationMessageTextContent {
      content: "Hello, how are you?"
    }
    completed: true
  }
}
```

### Response Types (Server → Client)

#### Assistant Message (Streaming)

Streamed text chunks with `completed=false`, then final with `completed=true`.

```protobuf
AssistantMessagingResponse {
  code: 200
  success: true
  assistant: AssistantConversationAssistantMessage {
    id: "msg-123"
    completed: false  // true for final message
    text: AssistantConversationMessageTextContent {
      content: "Hello! "
    }
  }
}
```

#### Action (Tool Call)

Server requests an action from the client.

```protobuf
AssistantMessagingResponse {
  code: 200
  success: true
  action: AssistantConversationAction {
    name: "end_conversation"
    action: END_CONVERSATION
  }
}
```

#### Interruption

Sent when user interrupts the assistant.

```protobuf
AssistantMessagingResponse {
  code: 200
  success: true
  interruption: AssistantConversationInterruption { ... }
}
```

#### Error

Sent when an error occurs.

```protobuf
AssistantMessagingResponse {
  code: 500
  success: false
  error: Error {
    errorCode: 500
    errorMessage: "Internal server error"
  }
}
```

## Communication Flow

```
┌─────────────┐                          ┌─────────────┐
│   Client    │                          │   Server    │
│  (Go/Rust)  │                          │  (Python)   │
└──────┬──────┘                          └──────┬──────┘
       │                                        │
       │  ─────── Configuration ──────────────► │
       │                                        │
       │  ◄────── Ack (success=true) ────────── │
       │                                        │
       │  ─────── UserMessage ────────────────► │
       │                                        │
       │  ◄────── Assistant (chunk 1) ───────── │
       │  ◄────── Assistant (chunk 2) ───────── │
       │  ◄────── Assistant (chunk N) ───────── │
       │  ◄────── Assistant (completed) ─────── │
       │                                        │
       │  ─────── UserMessage ────────────────► │
       │                                        │
       │  ◄────── Assistant (streaming) ─────── │
       │                                        │
       │  ─────── [Close Stream] ─────────────► │
       │                                        │
```

## Testing

### Test with grpcurl

```bash
# List services
grpcurl -plaintext localhost:50051 list

# Describe service
grpcurl -plaintext localhost:50051 describe talk_api.TalkService
```

### Test with Python client

```python
import grpc
import talk_api_pb2 as talk_pb2
import talk_api_pb2_grpc as talk_grpc
import common_pb2

def generate_requests():
    # Send configuration first
    yield talk_pb2.AssistantMessagingRequest(
        configuration=common_pb2.AssistantConversationConfiguration(
            assistantConversationId=12345,
        )
    )
    # Then send user message
    yield talk_pb2.AssistantMessagingRequest(
        message=common_pb2.AssistantConversationUserMessage(
            id="msg-1",
            text=common_pb2.AssistantConversationMessageTextContent(
                content="Hello, who are you?"
            ),
            completed=True,
        )
    )

channel = grpc.insecure_channel('localhost:50051')
stub = talk_grpc.TalkServiceStub(channel)

for response in stub.AssistantTalk(generate_requests()):
    if response.HasField("assistant"):
        print(response.assistant.text.content, end="", flush=True)
```

## Available Examples

### 1. Simple LLM (`simple-llm.py`)

Basic example supporting both OpenAI and Anthropic with switchable providers.

```bash
export LLM_PROVIDER="anthropic"  # or "openai"
export ANTHROPIC_API_KEY="your-key"
python simple-llm.py
```

### 2. OpenAI GPT with Function Calling (`openai-gpt.py`)

OpenAI GPT-4o integration with function calling for tools like weather, search, appointments, and call transfer.

```bash
export OPENAI_API_KEY="your-key"
python openai-gpt.py
```

**Features**: Weather lookup, knowledge search, appointment scheduling, call transfer

### 3. Anthropic Claude Voice Agent (`anthropic-claude.py`)

Anthropic Claude optimized for voice interactions with tool use for phone call scenarios.

```bash
export ANTHROPIC_API_KEY="your-key"
python anthropic-claude.py
```

**Voice Features**: Identity verification, order status checks, refund processing, call notes, human transfer, callback scheduling

**Key Voice Optimizations**:

- Concise, conversational responses optimized for voice synthesis
- Tool calling for customer service actions (verify, check status, process refund)
- Call context preservation across multiple tool executions
- Natural pause handling and speech pacing
- Professional phone agent behavior

### 4. Azure OpenAI GPT-4.1 Nano Voice Agent (`azure-openai-gpt.py`)

Azure OpenAI integration with GPT-4.1 Nano model for fast, cost-effective voice agent operations.

```bash
export AZURE_OPENAI_KEY="your-key"
export AZURE_OPENAI_ENDPOINT="https://your-instance.openai.azure.com/"
export AZURE_OPENAI_DEPLOYMENT="gpt-4-1-nano"
python azure-openai-gpt.py
```

**Voice Features**: Identity verification, shipment tracking, return processing, call notes, agent transfer

**Why GPT-4.1 Nano for Voice**:

- ⚡ Fastest inference speed (optimized for real-time voice)
- 💰 Most cost-effective model (lowest API costs)
- 🎯 Sufficient intelligence for customer service conversations
- 🔧 Function calling for tool use in voice calls
- 📊 Optimized for concise responses (max 30 words per turn)

**Azure Setup**:

1. Create Azure OpenAI resource
2. Deploy GPT-4.1 Nano model
3. Get your endpoint and key
4. Set environment variables (see above)
5. Run the server

### 5. Gemini Example (`gemini-example.py`)

Google's Gemini 2.0 API with google-genai SDK integrated with Rapida gRPC for real-time voice interactions.

```bash
# Note: Use separate environment due to protobuf version constraints
pip install -r requirements-gemini.txt
export GOOGLE_API_KEY="your-google-api-key"
python gemini-example.py
```

**Voice Features**:

- Location-based services
- Weather information
- Restaurant recommendations
- Tourist attraction discovery
- Travel tips and recommendations

**Key Capabilities**:

- 🎙️ Bidirectional gRPC streaming
- 🌍 Location services and geolocation
- 🔧 Function calling with 5 travel tools
- 📊 Conversation history management
- 🎯 Call termination with summaries

**Architecture**:

- Rapida gRPC TalkService implementation
- Google Generative AI (google-genai SDK) with function calling
- Streaming responses with tool execution
- Graceful fallback for missing API key
- Tool routing (intermediate vs call-ending tools)

**Environment Setup**:

Due to protobuf version constraints, Gemini requires separate environment:

```bash
# Create separate venv for Gemini (optional but recommended)
python3 -m venv gemini-env
source gemini-env/bin/activate

# Install Gemini-specific dependencies (with google-genai)
pip install -r requirements-gemini.txt

# Set API key and run
export GOOGLE_API_KEY="your-api-key"
python gemini-example.py
```

**Google Genai SDK**:

- Uses `google-genai` (newer Google SDK)
- Supports streaming responses and function calling
- Better integration with latest Gemini models
- Requires separate environment from Rapida's protobuf 6.x

### 6. n8n Workflow Integration (`n8n-workflow.py`)

Integration with n8n for workflow automation. Routes queries to appropriate workflows based on intent.

```bash
export N8N_BASE_URL="http://localhost:5678"
export N8N_API_KEY="your-key"  # Optional
export OPENAI_API_KEY="your-key"  # For fallback
python n8n-workflow.py
```

**Features**: Intent-based routing, workflow webhooks, fallback LLM, conversation context passing

### 7. LangChain ReAct Agent (`langchain-agent.py`)

LangChain ReAct agent with customizable tools and conversation memory.

```bash
pip install langchain langchain-openai langchain-anthropic
export OPENAI_API_KEY="your-key"
python langchain-agent.py
```

**Features**: Web search, weather, calculator, database lookup, notifications, conversation memory

### 8. CrewAI Multi-Agent (`crewai-multi-agent.py`)

CrewAI multi-agent system with specialized agents (Researcher, Analyst, Response Writer).

```bash
pip install crewai crewai-tools langchain-openai
export OPENAI_API_KEY="your-key"
python crewai-multi-agent.py
```

**Features**: Research specialist, data analyst, voice response specialist, sequential task execution

### 9. AutoGen Collaborative Agents (`autogen-collaborative.py`)

Microsoft AutoGen collaborative agents with group chat orchestration.

```bash
pip install pyautogen
export OPENAI_API_KEY="your-key"
python autogen-collaborative.py
```

**Features**: VoiceAssistant, TechExpert, ServiceAgent, Researcher, intelligent routing, group chat for complex queries

## Files

| File                       | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| `simple-llm.py`            | Basic OpenAI/Anthropic streaming implementation         |
| `openai-gpt.py`            | OpenAI GPT with function calling                        |
| `anthropic-claude.py`      | Anthropic Claude optimized for voice agent interactions |
| `azure-openai-gpt.py`      | Azure OpenAI GPT-4.1 Nano (fast & cost-effective voice) |
| `gemini-example.py`        | Google Gemini 2.0 with google-genai SDK (travel assist) |
| `n8n-workflow.py`          | n8n workflow automation integration                     |
| `langchain-agent.py`       | LangChain ReAct agent                                   |
| `crewai-multi-agent.py`    | CrewAI multi-agent orchestration                        |
| `autogen-collaborative.py` | AutoGen collaborative agents                            |
| `requirements.txt`         | Python dependencies (Anthropic, OpenAI, Azure)          |
| `requirements-gemini.txt`  | Gemini-specific dependencies (separate protobuf)        |
| `README.md`                | This documentation                                      |

## Requirements

- Python 3.9+
- grpcio, grpcio-tools (for proto generation)
- openai and/or anthropic (for LLM support)

### Additional Dependencies by Example

| Example                    | Additional Packages                                    |
| -------------------------- | ------------------------------------------------------ |
| `simple-llm.py`            | `openai` or `anthropic`                                |
| `openai-gpt.py`            | `openai`                                               |
| `anthropic-claude.py`      | `anthropic`                                            |
| `azure-openai-gpt.py`      | `openai` (for Azure OpenAI SDK)                        |
| `gemini-example.py`        | `google-genai` (use requirements-gemini.txt)           |
| `n8n-workflow.py`          | `requests`, optionally `openai`/`anthropic`            |
| `langchain-agent.py`       | `langchain`, `langchain-openai`, `langchain-anthropic` |
| `crewai-multi-agent.py`    | `crewai`, `crewai-tools`, `langchain-openai`           |
| `autogen-collaborative.py` | `pyautogen`                                            |

## Common Environment Variables

| Variable                  | Default         | Description                        |
| ------------------------- | --------------- | ---------------------------------- |
| `GRPC_HOST`               | `localhost`     | Server host                        |
| `GRPC_PORT`               | `50051`         | Server port                        |
| `AUTH_TOKEN`              | `mysecrettoken` | Authorization token                |
| `SSL_CERT`                | `server.crt`    | TLS certificate file               |
| `SSL_KEY`                 | `server.key`    | TLS key file                       |
| `OPENAI_API_KEY`          | -               | OpenAI API key                     |
| `ANTHROPIC_API_KEY`       | -               | Anthropic API key                  |
| `AZURE_OPENAI_KEY`        | -               | Azure OpenAI API key               |
| `AZURE_OPENAI_ENDPOINT`   | -               | Azure OpenAI endpoint URL          |
| `AZURE_OPENAI_DEPLOYMENT` | -               | Azure OpenAI model deployment      |
| `GOOGLE_API_KEY`          | -               | Google API key (for Gemini)        |
| `OPENAI_API_VERSION`      | `2024-12-01`    | Azure OpenAI API version           |
| `MAX_TOKENS`              | `4096` or `512` | Max response tokens (512 for nano) |
| `SYSTEM_PROMPT`           | (varies)        | System prompt for LLM              |

## Troubleshooting

### Protobuf Version Mismatch

**Error**: `Detected mismatched Protobuf Gencode/Runtime major versions when loading common.proto: gencode 6.30.0 runtime X.X.X`

**Cause**: The main environment uses `protobuf>=6.0.0` for Rapida compatibility. If you're trying to use Gemini in the same environment, `google-generativeai` will downgrade protobuf to 5.x, causing a mismatch.

**Solution**:

1. **For Anthropic/OpenAI only** (main environment):

   ```bash
   pip install -r requirements.txt
   export ANTHROPIC_API_KEY="your-key"
   python anthropic-claude.py
   ```

2. **For Gemini only** (separate environment):
   ```bash
   # Create a separate venv
   python3 -m venv gemini-env
   source gemini-env/bin/activate
   pip install -r requirements-gemini.txt
   export GOOGLE_API_KEY="your-key"
   python gemini-example.py
   ```

### Import Errors

**Error**: `ModuleNotFoundError: No module named 'openai'` or `anthropic`

**Solution**: Ensure you've installed the requirements:

```bash
pip install -r requirements.txt
```

### gRPC Server Won't Start

**Error**: `Address already in use` on port 50051

**Solution**: Change the port:

```bash
export GRPC_PORT=50052
python anthropic-claude.py
```

Or kill the existing process:

```bash
lsof -ti:50051 | xargs kill -9
```

### API Key Not Set

**Error**: Server returns mock responses instead of real LLM responses

**Solution**: Set the required API key:

```bash
# For Anthropic
export ANTHROPIC_API_KEY="your-anthropic-key"

# For OpenAI
export OPENAI_API_KEY="your-openai-key"

# For Gemini
export GOOGLE_API_KEY="your-google-api-key"
```
