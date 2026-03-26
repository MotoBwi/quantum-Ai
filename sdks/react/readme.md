# @rapidaai/react

The official React/TypeScript SDK for the [Rapida](https://rapida.ai) platform. Build real-time voice agents, make phone calls, manage assistants, knowledge bases, endpoints, conversations, and more — all from your React application via gRPC.



[![Build and Publish](https://github.com/rapidaai/rapida-react/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/rapidaai/rapida-react/actions/workflows/npm-publish.yml)
[![Test](https://github.com/rapidaai/rapida-react/actions/workflows/test.yml/badge.svg)](https://github.com/rapidaai/rapida-react/actions/workflows/test.yml)
[![Twitter Follow](https://img.shields.io/twitter/follow/rapidaai)](https://twitter.com/rapidaai)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/rapidaai/rapida-react)](https://github.com/rapidaai/voice-ai/releases/latest)

---

## Installation

```sh
npm install @rapidaai/react@latest
```

or using Yarn:

```sh
yarn add @rapidaai/react@latest
```

### Peer Dependencies

```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0"
}
```

---

## Table of Contents

- [Connection Setup](#connection-setup)
- [Authentication](#authentication)
- [Assistants](#assistants)
- [Phone Calls](#phone-calls)
- [Voice Agent (Web)](#voice-agent-web)
- [Conversations](#conversations)
- [Knowledge Bases](#knowledge-bases)
- [Endpoints](#endpoints)
- [Projects & Organizations](#projects--organizations)
- [Vault (Provider Credentials)](#vault-provider-credentials)
- [Connectors](#connectors)
- [Activity Logs](#activity-logs)
- [Telemetry](#telemetry)
- [Notifications](#notifications)
- [Voice Agent Hooks Reference](#voice-agent-hooks-reference)
- [Voice Agent Components](#voice-agent-components)
- [Types & Configurations](#types--configurations)
- [Connection Modes](#connection-modes)
- [License](#license)

---

## Connection Setup

All SDK functions require a `ConnectionConfig` instance. Create one using an auth mode that fits your use case:

```ts
import { ConnectionConfig } from "@rapidaai/react";

// Public / SDK access (API key)
const config = ConnectionConfig.DefaultConnectionConfig(
  ConnectionConfig.WithSDK({
    ApiKey: "{YOUR_API_KEY}",
    UserId: "user-123",
  })
);

// Authenticated user access
const config = ConnectionConfig.DefaultConnectionConfig(
  ConnectionConfig.WithPersonalToken({
    Authorization: "{JWT_TOKEN}",
    AuthId: "{USER_ID}",
    ProjectId: "{PROJECT_ID}",
  })
);

// Debugger / internal testing
const config = ConnectionConfig.DefaultConnectionConfig(
  ConnectionConfig.WithDebugger({
    authorization: "{JWT_TOKEN}",
    userId: "{USER_ID}",
    projectId: "{PROJECT_ID}",
  })
);
```

### Custom Endpoint (Self-Hosted)

```ts
const config = ConnectionConfig.DefaultConnectionConfig(
  ConnectionConfig.WithSDK({ ApiKey: "...", UserId: "..." })
).withCustomEndpoint({
  assistant: "https://your-assistant-api.example.com",
  web: "https://your-web-api.example.com",
  endpoint: "https://your-endpoint-api.example.com",
});
```

---

## Authentication

Authenticate users, manage passwords, and integrate social login.

```ts
import {
  AuthenticateUser,
  AuthorizeUser,
  RegisterUser,
  VerifyToken,
  ForgotPassword,
  CreatePassword,
  ChangePassword,
  GetUser,
  UpdateUser,
  GetAllUser,
  Google,
  Linkedin,
  Github,
} from "@rapidaai/react";
```

### Authenticate a User

```ts
AuthenticateUser(config, "user@example.com", "password123", (err, response) => {
  if (err) return console.error(err);
  console.log("Token:", response.getToken());
});
```

### Register a New User

```ts
RegisterUser(config, request, (err, response) => {
  if (err) return console.error(err);
  console.log("Registered:", response.getToken());
});
```

### Social Authentication

```ts
// Google OAuth
Google(config, token, authHeader, (err, response) => {
  console.log("Google auth:", response);
});

// LinkedIn OAuth
Linkedin(config, token, authHeader, (err, response) => {
  console.log("LinkedIn auth:", response);
});

// GitHub OAuth
Github(config, token, authHeader, (err, response) => {
  console.log("GitHub auth:", response);
});
```

### Password Management

```ts
// Forgot password
ForgotPassword(config, email, (err, response) => { /* ... */ });

// Create new password (from reset link)
CreatePassword(config, request, (err, response) => { /* ... */ });

// Change password (authenticated)
ChangePassword(config, request, authHeader, (err, response) => { /* ... */ });
```

### User Management

```ts
// Get user details
GetUser(config, userId, authHeader, (err, response) => { /* ... */ });

// Update user
UpdateUser(config, request, authHeader, (err, response) => { /* ... */ });

// List all users
GetAllUser(config, page, pageSize, criteria, (err, response) => { /* ... */ }, authHeader);
```

---

## Assistants

Full CRUD for voice assistants, including deployments, webhooks, tools, knowledge associations, analysis, and providers.

```ts
import {
  GetAllAssistant,
  GetAssistant,
  CreateAssistant,
  DeleteAssistant,
  UpdateAssistantVersion,
  UpdateAssistantDetail,
  CreateAssistantTag,
  GetAssistantMessages,
  GetMessages,
  GetAllAssistantConversationMessage,
  GetAssistantConversation,
} from "@rapidaai/react";
```

### List Assistants

```ts
GetAllAssistant(config, page, pageSize, criteria, (err, response) => {
  if (err) return console.error(err);
  const assistants = response.getAssistantsList();
  assistants.forEach((a) => console.log(a.getName(), a.getId()));
}, authHeader);
```

### Get a Single Assistant

```ts
const response = await GetAssistant(config, request, authHeader);
console.log(response.getAssistant()?.getName());
```

### Create an Assistant

```ts
const response = await CreateAssistant(config, request, authHeader);
console.log("Created assistant:", response.getAssistant()?.getId());
```

### Update an Assistant

```ts
// Update version (full configuration update)
const response = await UpdateAssistantVersion(config, request, authHeader);

// Update details (name, description, tags)
const response = await UpdateAssistantDetail(config, request, authHeader);
```

### Delete an Assistant

```ts
const response = await DeleteAssistant(config, request, authHeader);
```

### Assistant Deployments

Create and manage deployments for different channels:

```ts
import {
  CreateAssistantDebuggerDeployment,
  GetAssistantDebuggerDeployment,
  CreateAssistantApiDeployment,
  GetAssistantApiDeployment,
  CreateAssistantWebpluginDeployment,
  GetAssistantWebpluginDeployment,
  CreateAssistantPhoneDeployment,
  GetAssistantPhoneDeployment,
  CreateAssistantWhatsappDeployment,
  GetAssistantWhatsappDeployment,
} from "@rapidaai/react";

// Create a phone deployment
const response = await CreateAssistantPhoneDeployment(config, request, authHeader);

// Get debugger deployment
const response = await GetAssistantDebuggerDeployment(config, request, authHeader);
```

### Webhooks

```ts
import {
  GetAllAssistantWebhook,
  CreateWebhook,
  UpdateWebhook,
  GetAssistantWebhook,
  DeleteAssistantWebhook,
  GetAllWebhookLog,
  GetWebhookLog,
} from "@rapidaai/react";

// Create a webhook
const response = await CreateWebhook(config, request, authHeader);

// List webhook logs
GetAllWebhookLog(config, page, pageSize, criteria, (err, response) => {
  console.log("Logs:", response.getLogsList());
}, authHeader);
```

### Tools

```ts
import {
  GetAllAssistantTool,
  CreateAssistantTool,
  UpdateAssistantTool,
  GetAssistantTool,
  DeleteAssistantTool,
  GetAssistantToolLog,
  GetAllAssistantToolLog,
} from "@rapidaai/react";

// Create a tool
const response = await CreateAssistantTool(config, request, authHeader);

// List tool logs
GetAllAssistantToolLog(config, page, pageSize, criteria, (err, response) => {
  console.log("Tool logs:", response.getLogsList());
}, authHeader);
```

### Assistant Knowledge Associations

```ts
import {
  GetAllAssistantKnowledge,
  CreateAssistantKnowledge,
  UpdateAssistantKnowledge,
  GetAssistantKnowledge,
  DeleteAssistantKnowledge,
} from "@rapidaai/react";

// Link a knowledge base to an assistant
const response = await CreateAssistantKnowledge(config, request, authHeader);
```

### Analysis

```ts
import {
  GetAllAssistantAnalysis,
  CreateAnalysis,
  UpdateAnalysis,
  GetAssistantAnalysis,
  DeleteAssistantAnalysis,
} from "@rapidaai/react";

const response = await CreateAnalysis(config, request, authHeader);
```

### Providers

```ts
import {
  CreateAssistantProvider,
  GetAllAssistantProvider,
} from "@rapidaai/react";

const response = await CreateAssistantProvider(config, request, authHeader);
```

---

## Phone Calls

Initiate outbound phone calls and bulk calls via SIP/telephony.

```ts
import {
  CreatePhoneCall,
  CreateBulkPhoneCall,
  CreatePhoneCallRequest,
  CreateBulkPhoneCallRequest,
} from "@rapidaai/react";
```

### Make a Phone Call

```ts
const request = new CreatePhoneCallRequest();
request.setAssistantid("{ASSISTANT_ID}");
request.setPhonenumber("+1234567890");

const response = await CreatePhoneCall(config, request, authHeader);
console.log("Call initiated:", response.getConversationid());
```

### Make Bulk Phone Calls

```ts
const request = new CreateBulkPhoneCallRequest();
request.setAssistantid("{ASSISTANT_ID}");
request.setPhonenumbersList(["+1234567890", "+0987654321"]);

const response = await CreateBulkPhoneCall(config, request, authHeader);
console.log("Bulk calls initiated:", response.getConversationidsList());
```

---

## Voice Agent (Web)

Build real-time voice and text conversation agents with WebRTC + gRPC streaming, audio visualization, device management, and feedback hooks.

### Quick Start

```tsx
import {
  VoiceAgent,
  ConnectionConfig,
  AgentConfig,
  Channel,
  InputOptions,
  StringToAny,
} from "@rapidaai/react";

const agent = new VoiceAgent(
  ConnectionConfig.DefaultConnectionConfig(
    ConnectionConfig.WithSDK({
      ApiKey: "{YOUR_API_KEY}",
      UserId: "user-123",
    })
  ).withConnectionCallback({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onError: () => console.log("Connection error"),
  }),

  new AgentConfig(
    "{ASSISTANT_ID}",
    new InputOptions([Channel.Audio, Channel.Text], Channel.Text)
  )
    .addKeywords(["Rapida"])
    .addArgument("name", "John")
    .addMetadata("utm_source", StringToAny("landing_page")),

  {
    onAssistantMessage: (msg) => console.log("Assistant:", msg?.messageText),
    onUserMessage: (msg) => console.log("User:", msg?.messageText),
    onConfiguration: (cfg) => console.log("Config:", cfg),
    onInterrupt: () => console.log("Interrupted"),
    onInitialization: (init) => console.log("Session started:", init),
    onDirective: (dir) => console.log("Directive:", dir),
  }
);
```

### Full Voice Agent UI Example

A production-ready example showing connection, messaging, audio visualization, input mode toggling, mute controls, device selection, and message rendering.

#### 1. Create the Voice Agent Component

```tsx
import React, { FC, useMemo, useState } from "react";
import {
  VoiceAgent as VoiceAgentCore,
  ConnectionConfig,
  AgentConfig,
  AgentCallback,
  useConnectAgent,
  useAgentMessages,
  useInputModeToggleAgent,
  useMuteAgent,
  useMultibandMicrophoneTrackVolume,
  useSelectInputDeviceAgent,
  useMessageFeedback,
  MultibandAudioVisualizerComponent,
  Channel,
  MessageRole,
  MessageStatus,
  Feedback,
} from "@rapidaai/react";

interface VoiceAgentProps {
  connectConfig: ConnectionConfig;
  agentConfig: AgentConfig;
  agentCallback?: AgentCallback;
}

export const VoiceAgent: FC<VoiceAgentProps> = ({
  connectConfig,
  agentConfig,
  agentCallback,
}) => {
  const agent = useMemo(
    () => new VoiceAgentCore(connectConfig, agentConfig, agentCallback),
    [connectConfig, agentConfig, agentCallback]
  );

  return (
    <div className="flex flex-col h-screen">
      <ConversationMessages agent={agent} />
      <MessagingControls agent={agent} />
    </div>
  );
};
```

#### 2. Display Conversation Messages

```tsx
const ConversationMessages: FC<{ agent: VoiceAgentCore }> = ({ agent }) => {
  const { messages } = useAgentMessages(agent);
  const { handleHelpfulnessFeedback } = useMessageFeedback(agent);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.role === MessageRole.User ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-md px-4 py-2 rounded-lg ${
              msg.role === MessageRole.User
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-900"
            }`}
          >
            {msg.messages.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            {msg.status === MessageStatus.Pending && (
              <span className="text-xs opacity-50">typing...</span>
            )}
          </div>

          {msg.role === MessageRole.System && (
            <div className="flex gap-1 ml-2">
              <button
                onClick={() =>
                  handleHelpfulnessFeedback(msg.id, Feedback.Helpful)
                }
              >
                👍
              </button>
              <button
                onClick={() =>
                  handleHelpfulnessFeedback(msg.id, Feedback.NotHelpful)
                }
              >
                👎
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
```

#### 3. Build Messaging Controls (Text + Voice)

```tsx
const MessagingControls: FC<{ agent: VoiceAgentCore }> = ({ agent }) => {
  const [text, setText] = useState("");
  const { handleConnectAgent, handleDisconnectAgent, isConnected, isConnecting } =
    useConnectAgent(agent);
  const { channel, handleTextToggle, handleVoiceToggle } =
    useInputModeToggleAgent(agent);
  const { isMuted, handleToggleMute } = useMuteAgent(agent);

  const micVolume = useMultibandMicrophoneTrackVolume(agent, 5, 0.05, 0.85);

  const { devices, activeDeviceId, setActiveMediaDevice } =
    useSelectInputDeviceAgent({ voiceAgent: agent, requestPermissions: true });

  const handleSendText = () => {
    if (!text.trim()) return;
    agent.onSendText(text);
    setText("");
  };

  return (
    <div className="border-t p-4">
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleTextToggle}
          className={channel === Channel.Text ? "font-bold" : ""}
        >
          Text
        </button>
        <button
          onClick={async () => {
            await handleVoiceToggle();
            if (!isConnected) await handleConnectAgent();
          }}
          className={channel === Channel.Audio ? "font-bold" : ""}
        >
          Voice
        </button>
      </div>

      {channel === Channel.Text && (
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendText()}
            placeholder="Type a message..."
            className="flex-1 border rounded px-3 py-2"
          />
          <button onClick={handleSendText}>Send</button>
          {!isConnected && (
            <button onClick={handleConnectAgent} disabled={isConnecting}>
              {isConnecting ? "Connecting..." : "Connect"}
            </button>
          )}
        </div>
      )}

      {channel === Channel.Audio && isConnected && (
        <div className="flex items-center gap-4">
          <MultibandAudioVisualizerComponent
            state={isMuted ? "disconnected" : "listening"}
            barWidth={4}
            minBarHeight={2}
            maxBarHeight={40}
            frequencies={micVolume}
          />
          <button onClick={handleToggleMute}>
            {isMuted ? "Unmute" : "Mute"}
          </button>
          <select
            value={activeDeviceId}
            onChange={(e) => setActiveMediaDevice(e.target.value)}
          >
            {devices.map((d) => (
              <option key={d.deviceId} value={d.deviceId}>
                {d.label || "Unknown Device"}
              </option>
            ))}
          </select>
          <button onClick={handleDisconnectAgent}>Stop</button>
        </div>
      )}
    </div>
  );
};
```

#### 4. Wire It Up

```tsx
import { ConnectionConfig, AgentConfig, Channel, InputOptions, StringToAny } from "@rapidaai/react";
import { VoiceAgent } from "./voice-agent";

function App() {
  const connectConfig = ConnectionConfig.DefaultConnectionConfig(
    ConnectionConfig.WithSDK({
      ApiKey: "{YOUR_API_KEY}",
      UserId: "user-123",
    })
  );

  const agentConfig = new AgentConfig(
    "{ASSISTANT_ID}",
    new InputOptions([Channel.Audio, Channel.Text], Channel.Text)
  )
    .setUserIdentifier("user-123", "John Doe")
    .addKeywords(["Rapida"])
    .addMetadata("source", StringToAny("web"));

  return <VoiceAgent connectConfig={connectConfig} agentConfig={agentConfig} />;
}
```

#### AgentConfig Methods

| Method | Description |
| --- | --- |
| `.addKeywords(string[])` | Add pronunciation keywords the model should speak clearly. |
| `.addArgument(key, value)` | Add a prompt variable argument (used in prompt templates). |
| `.addMetadata(key, Any)` | Attach metadata (e.g., tracking IDs, UTM params). |
| `.addCustomOption(key, Any)` | Add custom options (e.g., `listen.language`, `speak.language`). |
| `.setUserIdentifier(id, name?)` | Set the end-user's identity for conversation context. |

---

## Conversations

Manage assistant conversations, message/conversation metrics, and bidirectional talk streams.

```ts
import {
  AssistantTalk,
  GetAllAssistantConversation,
  CreateMessageMetric,
  CreateConversationMetric,
  GetAssistantConversation,
  GetAllAssistantConversationMessage,
} from "@rapidaai/react";
```

### List Conversations

```ts
GetAllAssistantConversation(config, page, pageSize, criteria, (err, response) => {
  if (err) return console.error(err);
  const conversations = response.getConversationsList();
  conversations.forEach((c) => console.log(c.getId(), c.getStatus()));
}, authHeader);
```

### Get Conversation Details

```ts
const response = await GetAssistantConversation(config, request, authHeader);
console.log("Conversation:", response.getConversation());
```

### Get Conversation Messages

```ts
GetAllAssistantConversationMessage(config, page, pageSize, criteria, (err, response) => {
  const messages = response.getMessagesList();
  messages.forEach((m) => console.log(m.getRole(), m.getText()));
}, authHeader);
```

### Submit Message Feedback

```ts
const response = await CreateMessageMetric(config, request, authHeader);
```

### Submit Conversation Feedback

```ts
const response = await CreateConversationMetric(config, request, authHeader);
```

### Bidirectional Talk Stream

```ts
const stream = AssistantTalk(config, authHeader);
// stream is a bidirectional gRPC stream for real-time conversation
```

---

## Knowledge Bases

Create, manage, and index knowledge bases and their documents.

```ts
import {
  CreateKnowledge,
  GetKnowledgeBase,
  GetAllKnowledgeBases,
  UpdateKnowledgeDetail,
  CreateKnowledgeTag,
  CreateKnowledgeDocument,
  GetAllKnowledgeDocument,
  GetAllKnowledgeDocumentSegment,
  DeleteKnowledgeDocumentSegment,
  UpdateKnowledgeDocumentSegment,
  GetKnowledgeLog,
  GetAllKnowledgeLog,
  IndexKnowledgeDocument,
} from "@rapidaai/react";
```

### Create a Knowledge Base

```ts
CreateKnowledge(config, providerModelId, providerId, name, description, tags, authHeader, (err, response) => {
  if (err) return console.error(err);
  console.log("Knowledge created:", response.getKnowledge()?.getId());
});
```

### Upload and Index Documents

```ts
// Create a document in the knowledge base
CreateKnowledgeDocument(config, knowledgeId, documents, authHeader, (err, response) => {
  console.log("Document uploaded:", response.getKnowledgedocumentsList());
});

// Index the document for search
IndexKnowledgeDocument(config, knowledgeId, documentIds, indexType, authHeader, (err, response) => {
  console.log("Indexing started");
});
```

### List Documents

```ts
GetAllKnowledgeDocument(config, knowledgeId, page, pageSize, criteria, authHeader, (err, response) => {
  const docs = response.getKnowledgedocumentsList();
  docs.forEach((d) => console.log(d.getName(), d.getStatus()));
});
```

### Document Segments

```ts
// List segments
GetAllKnowledgeDocumentSegment(config, documentId, page, pageSize, criteria, authHeader, (err, response) => {
  console.log("Segments:", response.getKnowledgedocumentsegmentsList());
});

// Update a segment
UpdateKnowledgeDocumentSegment(config, request, authHeader, (err, response) => { /* ... */ });

// Delete a segment
DeleteKnowledgeDocumentSegment(config, request, authHeader, (err, response) => { /* ... */ });
```

### Knowledge Logs

```ts
GetAllKnowledgeLog(config, page, pageSize, criteria, (err, response) => {
  console.log("Knowledge logs:", response.getLogsList());
}, authHeader);
```

---

## Endpoints

Create and manage LLM endpoints with provider models, retry/cache configurations, and invocation.

```ts
import {
  GetAllEndpoint,
  GetEndpoint,
  CreateEndpoint,
  UpdateEndpointVersion,
  UpdateEndpointDetail,
  CreateEndpointTag,
  GetAllEndpointProviderModel,
  CreateEndpointProviderModel,
  CreateEndpointRetryConfiguration,
  CreateEndpointCacheConfiguration,
  GetAllEndpointLog,
  GetEndpointLog,
  Invoke,
} from "@rapidaai/react";
```

### List Endpoints

```ts
GetAllEndpoint(config, page, pageSize, criteria, (err, response) => {
  const endpoints = response.getEndpointsList();
  endpoints.forEach((e) => console.log(e.getName(), e.getId()));
}, authHeader);
```

### Create an Endpoint

```ts
const response = await CreateEndpoint(config, request, authHeader);
console.log("Endpoint created:", response.getEndpoint()?.getId());
```

### Configure Retry and Cache

```ts
// Set retry configuration
const retryResponse = await CreateEndpointRetryConfiguration(config, request, authHeader);

// Set cache configuration
const cacheResponse = await CreateEndpointCacheConfiguration(config, request, authHeader);
```

### Invoke an Endpoint

```ts
import { InvokeRequest } from "@rapidaai/react";

const request = new InvokeRequest();
// ... set endpoint ID, parameters, etc.

const response = await Invoke(config, request, authHeader);
console.log("Result:", response.getResult());
```

### Endpoint Logs

```ts
GetAllEndpointLog(config, page, pageSize, criteria, (err, response) => {
  console.log("Endpoint logs:", response.getLogsList());
}, authHeader);
```

---

## Projects & Organizations

### Organizations

```ts
import {
  CreateOrganization,
  UpdateOrganization,
  GetOrganization,
} from "@rapidaai/react";

// Create organization
CreateOrganization(config, "Acme Corp", "50-200", "Technology", authHeader, (err, response) => {
  console.log("Org created:", response.getOrganization()?.getId());
});

// Update organization
UpdateOrganization(config, orgId, authHeader, (err, response) => { /* ... */ },
  "New Name", "Finance", "contact@acme.com"
);

// Get organization
GetOrganization(config, orgId, authHeader, (err, response) => {
  console.log("Org:", response.getOrganization()?.getOrganizationname());
});
```

### Projects

```ts
import {
  CreateProject,
  UpdateProject,
  GetProject,
  GetAllProject,
  DeleteProject,
  AddUsersToProject,
  GetAllProjectCredential,
  CreateProjectCredential,
} from "@rapidaai/react";

// Create project
const response = await CreateProject(config, request, authHeader);

// List projects
GetAllProject(config, page, pageSize, criteria, (err, response) => {
  response.getProjectsList().forEach((p) => console.log(p.getName()));
}, authHeader);

// Add users to project
AddUsersToProject(config, "user@example.com", "admin", ["project-id-1"], (err, response) => {
  console.log("User added");
}, authHeader);

// Manage project credentials (API keys)
GetAllProjectCredential(config, projectId, page, pageSize, authHeader, (err, response) => {
  console.log("Credentials:", response.getCredentialsList());
});

const credential = await CreateProjectCredential(config, request, authHeader);
```

---

## Vault (Provider Credentials)

Securely manage API keys for external providers (OpenAI, Anthropic, etc.).

```ts
import {
  CreateProviderKey,
  DeleteProviderKey,
  GetAllOrganizationCredential,
} from "@rapidaai/react";

// Store a provider API key
const response = await CreateProviderKey(config, request, authHeader);

// List all credentials
GetAllOrganizationCredential(config, page, pageSize, criteria, (err, response) => {
  console.log("Credentials:", response.getCredentialsList());
}, authHeader);

// Delete a credential
DeleteProviderKey(config, providerKeyId, (err, response) => {
  console.log("Deleted");
}, authHeader);
```

---

## Connectors

Connect to external platforms (Google, GitHub, Slack, etc.) via OAuth.

```ts
import { GeneralConnect, GetConnectorFiles } from "@rapidaai/react";

// Establish an OAuth connection
GeneralConnect(config, "google", code, state, scope, authHeader, (err, response) => {
  console.log("Connected:", response);
});

// Retrieve files from a connector
GetConnectorFiles(config, "google", criterias, authHeader, (err, response) => {
  console.log("Files:", response.getFilesList());
});
```

---

## Activity Logs

Access audit logs for tracking platform operations.

```ts
import { GetActivities, GetActivity } from "@rapidaai/react";

// List audit logs with pagination and filtering
GetActivities(config, projectId, page, pageSize, criteria, (err, response) => {
  console.log("Activities:", response.getAuditlogsList());
}, authHeader);

// Get a single audit log entry
GetActivity(config, logId, (err, response) => {
  console.log("Activity:", response.getAuditlog());
}, authHeader);
```

---

## Telemetry

Retrieve assistant telemetry data (latency, usage, performance metrics).

```ts
import { GetAllAssistantTelemetry } from "@rapidaai/react";

const response = await GetAllAssistantTelemetry(config, request, authHeader);
console.log("Telemetry:", response.getTelemetryList());
```

---

## Notifications

Manage notification preferences.

```ts
import {
  GetNotificationSetting,
  UpdateNotificationSetting,
} from "@rapidaai/react";

// Get current settings
const settings = await GetNotificationSetting(config, request, authHeader);

// Update settings
const updated = await UpdateNotificationSetting(config, request, authHeader);
```

---

## Voice Agent Hooks Reference

| Hook | Returns |
| --- | --- |
| `useConnectAgent(agent)` | `{ handleConnectAgent, handleDisconnectAgent, isConnected, isConnecting }` |
| `useAgentMessages(agent)` | `{ messages }` — reactive list of `Message` objects. |
| `useInputModeToggleAgent(agent)` | `{ handleTextToggle, handleVoiceToggle, channel }` — switch between text and audio. |
| `useMuteAgent(agent)` | `{ handleMute, handleUnmute, handleToggleMute, isMuted }` |
| `useSelectInputDeviceAgent(opts)` | `{ devices, activeDeviceId, setActiveMediaDevice }` — microphone selection. |
| `useMessageFeedback(agent)` | `{ handleMessageFeedback, handleHelpfulnessFeedback }` — per-message feedback. |
| `useConversationFeedback(agent)` | `{ handleConversationFeedback, handleHelpfulnessFeedback }` — conversation-level feedback. |
| `useMultibandMicrophoneTrackVolume(agent, bands, lo, hi)` | `Float32Array[]` — mic frequency data for visualization. |
| `useMultiband3DSpeakerTrackVolume(agent, bands, lo, hi)` | `Float32Array[]` — speaker frequency data. |

---

## Voice Agent Components

| Component | Description |
| --- | --- |
| `MultibandAudioVisualizerComponent` | Animated multiband frequency bar visualizer for mic or speaker audio. |
| `DeviceSelectorComponent` | Dropdown UI for selecting the active microphone device. |

---

## Types & Configurations

| Type | Description |
| --- | --- |
| `ConnectionConfig` | Connection settings. Use `DefaultConnectionConfig()` with `WithSDK()`, `WithDebugger()`, `WithPersonalToken()`, or `WithWebpluginClient()`. |
| `AgentConfig` | Agent configuration: assistant ID, input/output options, keywords, arguments, metadata, user identifier. |
| `InputOptions` | Input channel config: `channels`, `channel`, `device`, `iceServers`. |
| `OutputOptions` | Output channel config: `channels`, `channel`, `device`. |
| `UserIdentifier` | User identity: `id` and optional `name`. |
| `AgentCallback` | Callback interface: `onAssistantMessage`, `onUserMessage`, `onConfiguration`, `onInterrupt`, `onDirective`, `onInitialization`, `onConnectionStateChange`, `onConnected`, `onDisconnected`, `onError`. |
| `Channel` | Enum: `Channel.Audio`, `Channel.Text` |
| `ConnectionState` | Enum: `ConnectionState.Disconnected`, `ConnectionState.Connecting`, `ConnectionState.Connected` |
| `Message` | Message object: `id`, `role`, `messages[]`, `feedback?`, `time`, `status` |
| `MessageRole` | Enum: `MessageRole.System`, `MessageRole.User` |
| `MessageStatus` | Enum: `MessageStatus.Pending`, `MessageStatus.Complete` |
| `Feedback` | Enum: `Feedback.Helpful`, `Feedback.NotHelpful`, `Feedback.Other` |
| `MediaDeviceFailure` | Media device error type. |

### Utilities

| Export | Description |
| --- | --- |
| `StringToAny(value)` | Wraps a string into a protobuf `Any` for use with `addMetadata()` / `addArgument()`. |
| `StringArrayToAny(values)` | Wraps a string array into a protobuf `Any`. |
| `WithPlatform()` | Sets platform metadata on requests. |
| `WithAuthContext(auth)` | Creates gRPC metadata from auth info. Automatically used by all client functions. |
| `WithClientContext(auth)` | Creates client context metadata. |
| `getClientInfo()` | Returns client information (browser, OS, etc.). |
| `DEBUGGER_SOURCE`, `SDK_SOURCE`, `WEB_PLUGIN_SOURCE` | Source identifiers for connection context. |
| `HEADER_*` constants | Header keys for environment, source, region, API key, auth, etc. |
| `agentEventSelector(event)` | Selector for filtering agent events from the event stream. |
| `AgentEvent` | Enum of all agent event types. |

---

## Connection Modes

| Mode | Factory Method | Use Case |
| --- | --- | --- |
| **SDK** | `ConnectionConfig.WithSDK({ ApiKey, UserId })` | Public-facing apps, embedded agents |
| **Debugger** | `ConnectionConfig.WithDebugger({ authorization, userId, projectId })` | Internal testing with user auth |
| **Personal Token** | `ConnectionConfig.WithPersonalToken({ Authorization, AuthId, ProjectId })` | Server-side or admin operations |
| **Web Plugin** | `ConnectionConfig.WithWebpluginClient({ ApiKey, UserId })` | Embedded web plugin deployments |

---

## License

This project is licensed under the [MIT License](./LICENSE).