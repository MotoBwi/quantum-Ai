# Quantum AI Node.js SDK

The official Node.js SDK for the Quantum AI Voice AI platform. This SDK provides comprehensive API clients for building voice-enabled applications with Quantum AI's microservices.

## Installation

```bash
npm install @Quantum AIai/nodejs
# or
yarn add @Quantum AIai/nodejs
# or
pnpm add @Quantum AIai/nodejs
```

## Quick Start

```typescript
import { 
  ConnectionConfig, 
  GetAssistant, 
  GetAssistantRequest 
} from '@Quantum AIai/nodejs';

// Create a connection to Quantum AI services
const config = new ConnectionConfig({
  assistantHost: 'localhost:9007',
  integrationHost: 'localhost:9004',
  endpointHost: 'localhost:9005',
  documentHost: 'localhost:9010',
});

// Use the assistant service
const request = new GetAssistantRequest();
request.setId('your-assistant-id');

const response = await GetAssistant(config, request);
console.log(response);
```

## Available Clients

The SDK provides clients for the following Quantum AI services:

### Core Services

- **Assistant API** - Manage assistants, conversations, and voice deployments
- **Integration API** - LLM provider integrations (OpenAI, Anthropic, Gemini, etc.)
- **Endpoint API** - Endpoint management and invocation
- **Knowledge API** - Knowledge base and document management
- **Deployment API** - Assistant deployment configuration
- **Document API** - Document processing and indexing

### Auth & Account Services

- **Web API** - Authentication, users, organizations, projects, vaults
- **Auth Client** - User authentication flows (OAuth, email/password)
- **Connect Client** - OAuth provider connections

### Utility Services

- **Talk Client** - Telephony and real-time communication
- **WebRTC Client** - WebRTC signaling and media
- **Notification Client** - Notification management
- **Invocation Client** - Custom endpoint invocation

## API Reference

### Connection Configuration

```typescript
const config = new ConnectionConfig({
  // Service endpoints
  assistantHost: 'localhost:9007',
  integrationHost: 'localhost:9004',
  endpointHost: 'localhost:9005',
  documentHost: 'localhost:9010',
  webHost: 'localhost:9001',
  
  // Authentication
  auth: {
    principal: 'user-or-service',
    apiKey: 'your-api-key', // optional
    token: 'jwt-token', // optional
  }
});
```

### Example: Create an Assistant

```typescript
import {
  CreateAssistantRequest,
  CreateAssistant,
  ConnectionConfig,
} from '@Quantum AIai/nodejs';

const config = new ConnectionConfig({
  assistantHost: 'localhost:9007',
});

const request = new CreateAssistantRequest();
request.setName('My Voice Assistant');
request.setDescription('A great voice assistant');
request.setLanguage('en');

const response = await CreateAssistant(config, request);
console.log('Assistant created:', response.getId());
```

### Example: Retrieve Knowledge Base

```typescript
import {
  GetAllKnowledgeRequest,
  GetAllKnowledge,
  ConnectionConfig,
} from '@Quantum AIai/nodejs';

const config = new ConnectionConfig({
  documentHost: 'localhost:9010',
});

const request = new GetAllKnowledgeRequest();
const response = await GetAllKnowledge(config, request);
console.log('Knowledge bases:', response.getKnowledgesList());
```

## Build Output

The SDK is built in three formats:

- **ESM** - `dist/index.mjs` - For use with `import` statements
- **CJS** - `dist/index.cjs` - For use with `require()` statements  
- **DTS** - `dist/index.d.ts` / `dist/index.d.mts` - TypeScript type definitions

All formats are automatically selected based on your module resolution in `package.json`.

## Known Limitations

The following features are not yet available in the proto definitions and will return "not implemented" errors:

- `GetAllDeployment()` - Marketplace API proto definitions not available
- `GetAllProvider()`, `GetAllToolProvider()` - Provider API proto definitions not available
- `CreateToolCredential()` - Tool credential management not yet implemented
- Content type utilities - Core Content proto type not available in common_pb

These will be implemented once the corresponding proto definitions are generated and available.

## Development

### Building from Source

```bash
npm install
npm run build
```

### Running Tests

```bash
npm test
npm run test:watch
npm run test:coverage
```

### Cleaning Build Output

```bash
npm run clean
```

## Architecture

The SDK is structured around gRPC services with the following key components:

- **Connection Config** - Manages service client connections
- **Proto Clients** - Auto-generated gRPC service clients
- **Client Functions** - High-level async functions wrapping gRPC calls
- **Types** - TypeScript interfaces and proto message types

All inter-service communication uses gRPC with multiplexed HTTP/2, gRPC-Web, and HTTP support on single ports per service.

## Contributing

Contributions are welcome! Please ensure all changes pass the build and tests:

```bash
npm run build
npm test
npm run test:coverage
```

## License

MIT

## Support

For issues, feature requests, or questions:
- GitHub Issues: [Quantum AI-nodejs](https://github.com/Quantum AIai/Quantum AI-nodejs/issues)
- Quantum AI Docs: https://docs.Quantum AI.ai/
