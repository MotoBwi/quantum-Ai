# Quantum AI Voice AI Platform - AI Coding Guidelines

## Architecture Overview

Quantum AI is a Go-based microservices platform for voice AI orchestration (module: `github.com/Quantum AIai`, Go 1.25). It consists of 4 Go backend services, 1 Python backend service, a React/TypeScript UI, 4 client SDKs, and shared infrastructure.

### Services

| Service             | Language | Port             | Role                                                                        |
| ------------------- | -------- | ---------------- | --------------------------------------------------------------------------- |
| **web-api**         | Go       | 9001             | Auth, OAuth, organizations, projects, vaults, proxy to other services       |
| **assistant-api**   | Go       | 9007, 4573 (SIP) | Voice assistant orchestration, conversations, knowledge, STT/TTS, telephony |
| **integration-api** | Go       | 9004             | LLM provider integrations (OpenAI, Anthropic, Gemini, Azure, Cohere, etc.)  |
| **endpoint-api**    | Go       | 9005             | Endpoint management, invocation, caching, retry configuration               |
| **document-api**    | Python   | 9010             | Document processing, chunking, embedding, RAG indexing (FastAPI + Celery)   |

### Infrastructure

- **PostgreSQL 15** (port 5432) — relational data with GORM ORM
- **Redis 7** (port 6379) — caching, second-level GORM cache, pub/sub
- **OpenSearch 2.11** (port 9200) — knowledge search with tenant-scoped indices
- **Nginx** (port 8080) — reverse proxy to all services + UI
- **Docker Compose** — full orchestration with health checks, shared go-mod-cache volume

### Communication

- **REST** via Gin (external-facing, `/v1` prefix)
- **gRPC** via protobuf (inter-service, 10MB max message size)
- **cmux** multiplexes HTTP/2 (native gRPC), grpc-web, and HTTP on a single TCP port per service
- **WebRTC** + **SIP** for real-time voice in assistant-api

---

## Directory Structure

```
voice-ai/
├── cmd/                          # Service entry points (one main per service)
│   ├── assistant/assistant.go
│   ├── endpoint/endpoint.go
│   ├── integration/integration.go
│   └── web/web.go
│
├── api/                          # Service-specific code
│   ├── web-api/
│   │   ├── api/                  # Handlers (web.go, auth.go, connect.go, vault.go, etc.)
│   │   │   ├── health/           # Health + readiness probes
│   │   │   └── proxy/            # Reverse proxy handlers (assistant, endpoint, document, etc.)
│   │   ├── authenticator/        # Auth resolver implementation
│   │   ├── config/               # Service config (extends AppConfig)
│   │   ├── internal/
│   │   │   ├── connect/          # OAuth providers (google, github, gitlab, slack, etc.)
│   │   │   ├── entity/           # GORM entities (user, organization, notification, provider)
│   │   │   └── service/          # Service interfaces + implementations
│   │   │       ├── user.service.go          # Interface definition
│   │   │       └── user/service.go          # Implementation
│   │   ├── migrations/           # SQL migrations (golang-migrate)
│   │   └── router/               # Route + gRPC registration
│   │
│   ├── assistant-api/
│   │   ├── api/
│   │   │   ├── assistant/        # CRUD handlers for assistants, providers, tools, webhooks
│   │   │   ├── assistant-deployment/ # Deployment handlers (API, debugger, phone, webplugin, WhatsApp)
│   │   │   ├── health/
│   │   │   ├── knowledge/        # Knowledge base CRUD, document indexing
│   │   │   └── talk/             # Telephony handlers (inbound/outbound calls, WhatsApp)
│   │   ├── config/
│   │   ├── internal/
│   │   │   ├── adapters/         # Request adapters + customizers (messaging)
│   │   │   │   └── internal/     # Generic behaviors, callbacks, hooks, I/O, sessions
│   │   │   ├── agent/
│   │   │   │   ├── embedding/    # Query embedding for RAG
│   │   │   │   ├── executor/     # LLM execution + tool execution
│   │   │   │   └── reranker/     # Result reranking
│   │   │   ├── aggregator/text/  # Text stream aggregation
│   │   │   ├── audio/            # Audio config, recorder, resampler
│   │   │   ├── callcontext/      # Call context store + types
│   │   │   ├── capturers/        # S3 audio/text capture for recording
│   │   │   ├── channel/          # Communication channels
│   │   │   │   ├── base/         # Base streamer interface
│   │   │   │   ├── grpc/         # gRPC streaming
│   │   │   │   ├── telephony/    # SIP/telephony inbound/outbound
│   │   │   │   └── webrtc/       # WebRTC streaming
│   │   │   ├── denoiser/         # Audio noise reduction
│   │   │   ├── end_of_speech/    # End-of-speech detection
│   │   │   ├── entity/           # Domain entities
│   │   │   │   ├── assistants/   # Assistant, deployment, provider, tool, webhook entities
│   │   │   │   ├── conversations/ # Conversation, event, metadata, metrics
│   │   │   │   ├── knowledges/   # Knowledge, document, catalog entities
│   │   │   │   └── messages/     # Message, metadata, metrics
│   │   │   ├── normalizers/      # Text normalization (currency, date, URL, numbers, etc.)
│   │   │   ├── services/         # Service interfaces + implementations
│   │   │   │   ├── assistant/    # Assistant, conversation, deployment, knowledge impls
│   │   │   │   └── knowledge/    # Document, knowledge impls
│   │   │   ├── telemetry/        # OpenTelemetry-style tracing for voice agents
│   │   │   ├── transformer/      # STT/TTS provider adapters
│   │   │   │   ├── assembly-ai/  # AssemblyAI STT
│   │   │   │   ├── aws/          # AWS Polly TTS + Transcribe STT
│   │   │   │   ├── azure/        # Azure Cognitive Services STT/TTS
│   │   │   │   ├── cartesia/     # Cartesia STT/TTS
│   │   │   │   ├── deepgram/     # Deepgram STT/TTS
│   │   │   │   ├── elevenlabs/   # ElevenLabs TTS
│   │   │   │   ├── google/       # Google Cloud Speech STT/TTS
│   │   │   │   ├── openai/       # OpenAI Whisper STT + TTS
│   │   │   │   ├── resemble/     # Resemble.AI TTS
│   │   │   │   ├── revai/        # Rev.ai STT
│   │   │   │   ├── sarvam/       # Sarvam AI STT/TTS
│   │   │   │   └── speechmatics/ # Speechmatics STT
│   │   │   ├── type/             # Core interfaces (Communication, Transformer, VAD, etc.)
│   │   │   └── vad/              # Voice Activity Detection
│   │   ├── migrations/
│   │   ├── router/
│   │   ├── sip/                  # SIP server + infrastructure (auth, RTP, SDP, sessions)
│   │   └── socket/               # AudioSocket server
│   │
│   ├── integration-api/
│   │   ├── api/                  # Per-provider handlers (anthropic, openai, gemini, azure, etc.)
│   │   │   │                     # + chat, embedding, reranking handlers
│   │   │   └── health/
│   │   ├── config/
│   │   ├── internal/
│   │   │   ├── caller/           # LLM caller implementations per provider
│   │   │   │   ├── anthropic/, azure/, cohere/, gemini/, huggingface/
│   │   │   │   ├── mistral/, openai/, replicate/, vertexai/, voyageai/
│   │   │   │   └── metrics/      # Metrics builder
│   │   │   ├── entity/           # Audit entities
│   │   │   └── service/audit/    # Audit logging service
│   │   ├── migrations/
│   │   └── router/
│   │
│   ├── endpoint-api/
│   │   ├── api/                  # Endpoint CRUD, invocation, log handlers
│   │   │   └── health/
│   │   ├── config/
│   │   ├── internal/
│   │   │   ├── entity/           # Endpoint, cache, retry, log entities
│   │   │   └── service/          # Endpoint + log services
│   │   ├── migrations/
│   │   └── router/
│   │
│   └── document-api/             # Python (FastAPI)
│       ├── app/
│       │   ├── main.py           # FastAPI entry point with lifespan
│       │   ├── config.py, nlp.py, celery_worker.py
│       │   ├── bridges/          # Bridge factory + artifact bridges
│       │   ├── commons/          # Constants, JSON response, pagination
│       │   ├── configs/          # Auth, Celery, ElasticSearch, Postgres, Redis, storage configs
│       │   ├── connectors/       # Postgres, Redis, ElasticSearch, AWS connectors
│       │   ├── core/             # Core processing pipeline
│       │   │   ├── callers/      # LLM callers
│       │   │   ├── chunkers/     # Document chunking (consecutive, cumulative, statistical)
│       │   │   ├── embedding/    # Embedding generation
│       │   │   ├── rag/          # RAG pipeline (datasource, extractor, index_processor)
│       │   │   └── splitter/     # Sentence splitting
│       │   ├── exceptions/       # Custom exceptions
│       │   ├── middlewares/      # Auth, CORS, logging, JWT middlewares
│       │   ├── models/           # Pydantic models
│       │   ├── routers/          # FastAPI routers (v1.py)
│       │   ├── services/         # Knowledge service
│       │   ├── storage/          # File storage abstraction
│       │   ├── tasks/            # Celery async tasks (document indexing)
│       │   └── utils/            # Utilities
│       └── tests/
│
├── pkg/                          # Shared Go packages
│   ├── authenticators/           # Org, project, service, user authenticators
│   ├── batches/                  # Batch processing (AWS, local)
│   ├── ciphers/                  # Bcrypt hashing
│   ├── clients/                  # Internal service clients
│   │   ├── rest/                 # Generic REST client (APIClient interface)
│   │   ├── document/             # Document-api client
│   │   ├── endpoint/             # Endpoint-api client + input builders
│   │   ├── external/             # Email clients (SendGrid, SES, local)
│   │   ├── integration/          # Integration-api client + chat/embedding/reranking builders
│   │   ├── web/                  # Web-api client (auth, project, vault)
│   │   └── workflow/             # Assistant/knowledge workflow clients
│   ├── commons/                  # Logger, Response, Constants, Content helpers
│   ├── configs/                  # Shared config structs (Postgres, Redis, AWS, OpenSearch, etc.)
│   ├── connectors/               # Database connectors (Postgres, Redis, OpenSearch, DynamoDB)
│   ├── exceptions/               # Error types
│   ├── keyrotators/              # API key rotation (round-robin)
│   ├── middlewares/              # Auth middleware (Gin + gRPC interceptors)
│   ├── models/gorm/              # Base GORM models (Audited, Mutable, Organizational)
│   │   ├── generators/           # Snowflake ID generator
│   │   └── types/                # Custom GORM types (StringArray, InterfaceMap, DocumentMap, etc.)
│   ├── parsers/                  # Template parsing (Pongo2)
│   ├── storages/                 # File storage (S3, CDN, local)
│   ├── tokens/                   # Token cost calculators (tiktoken)
│   ├── types/                    # Shared types (JWT, Principle, Content, Event, Metadata, etc.)
│   │   └── enums/                # Enums (AssistantProvider, RecordState, Visibility, etc.)
│   └── utils/                    # Collection, file, validator, environment, region utilities
│
├── protos/                       # Generated gRPC code
│   ├── *.pb.go, *_grpc.pb.go    # 36 generated files from 21 proto sources
│   └── artifacts/                # Proto source files (git submodule)
│
├── ui/                           # React/TypeScript frontend
│   └── src/
│       ├── app/
│       │   ├── components/       # 40+ reusable components (data-table, form, navigation, etc.)
│       │   ├── pages/            # Page modules
│       │   │   ├── activities/           # Activity logs (conversation, knowledge, LLM, tool, webhook)
│       │   │   ├── assistant/            # Assistant CRUD + view
│       │   │   ├── authentication/       # Sign-in, sign-up, password flows
│       │   │   ├── connect/              # OAuth connector management
│       │   │   ├── endpoint/             # Endpoint CRUD + view
│       │   │   ├── external-integration/ # Provider models + credentials
│       │   │   ├── knowledge-base/       # Knowledge base CRUD + view
│       │   │   ├── main/                 # Dashboard
│       │   │   ├── preview-agent/        # Voice agent preview
│       │   │   ├── user/                 # Account settings
│       │   │   ├── user-onboarding/      # Organization + project setup
│       │   │   └── workspace/            # Workspace management (security, projects, users)
│       │   └── routes/           # Route definitions (13+ route modules)
│       ├── configs/              # Environment configs (development, production)
│       ├── context/              # React contexts (auth, dark-mode, provider, sidebar)
│       ├── hooks/                # 25+ custom hooks (store-based state management)
│       ├── models/               # TypeScript models
│       ├── providers/            # AI provider metadata (voices, languages, models per provider)
│       ├── styles/               # Tailwind CSS + custom styles
│       ├── types/                # TypeScript type definitions (30+ type files)
│       └── utils/                # Utility functions
│
├── sdks/                         # Client SDKs (git submodules)
│   ├── go/                       # Go SDK (Quantum AI/clients: assistant, call, deployment, endpoint, etc.)
│   ├── nodejs/                   # Node.js SDK (TypeScript, tsup build)
│   ├── python/                   # Python SDK (Quantum AI/clients: assistant, call, endpoint, invoke)
│   └── react/                    # React SDK (voice-agent component, WebRTC, hooks)
│
├── config/config.go              # Global AppConfig struct
├── docker/                       # Per-service Dockerfiles + env files
├── docker-compose.yml            # Full-stack orchestration
├── Makefile                      # Build, deploy, and dev commands
├── go.mod                        # Go module (github.com/Quantum AIai)
├── docs/                         # Mintlify documentation site
├── nginx/nginx.conf              # Nginx config
├── env/config.yaml               # Default environment config
└── bin/                          # Shell scripts (setup, formatting, git hooks)
```

---

## Development Workflow

- **Setup**: Run `make up-all` to start all services via Docker Compose
- **Build**: Use `make build-all` for container builds; individual services with `make build-web`, `make build-assistant`, etc.
- **Rebuild**: Use `make rebuild-all` to rebuild and restart
- **Logs**: Monitor with `make logs-web`, `make logs-assistant`, or `make logs-all`
- **Shell**: Access service container with `make shell-web`, `make shell-integration`, etc.
- **Status**: Check running services with `make status` or `make ps-all`
- **Clean**: Tear down with `make down-all` or `make clean`
- **Testing**: Go: `go test ./...` | Python: `pytest` in document-api | UI: `yarn test`
- **Dependencies**: Go modules (`go mod`), Python (`requirements.txt`), UI (`yarn`)
- **Local setup**: `make setup-local` for initial environment configuration

---

## Key Patterns & Conventions

### Service Bootstrap Pattern (Go)

All Go services follow an identical `AppRunner` struct pattern in `cmd/*/`:

```go
type AppRunner struct {
    E         *gin.Engine                    // Gin HTTP engine
    S         *grpc.Server                   // gRPC server
    Cfg       *config.XxxConfig              // Service-specific config
    Logger    commons.Logger                 // Zap-based logger
    Postgres  connectors.PostgresConnector   // GORM-based
    Redis     connectors.RedisConnector
    Closeable []func(context.Context) error  // Graceful shutdown hooks
}
```

**Bootstrap sequence** (identical for all services):

1. `ResolveConfig()` — Viper config loading → validates with `validator/v10` → sets Gin mode
2. `Logging()` — `commons.NewApplicationLogger(Level(...), Name(...))`
3. `AllConnectors()` — Instantiates Postgres/Redis/OpenSearch connectors
4. `Migrate()` — `golang-migrate/v4` with `file://` source against Postgres
5. `grpc.NewServer(...)` — With chained interceptors (logging, recovery, auth, project auth, service auth)
6. `Init(ctx)` — Connects all connectors, registers `Closeable` disconnect functions
7. `AllMiddlewares()` — Recovery → CORS → Request Logger → Authentication
8. `AllRouters()` — Registers REST routes + gRPC service implementations
9. **cmux** multiplexing — HTTP/2 (gRPC), grpc-web (via `improbable-eng/grpc-web`), HTTP (Gin) on single port
10. `errgroup.WithContext` — Runs all listeners concurrently
11. Graceful shutdown — `os.Signal` + `Closeable` cleanup

**assistant-api uniquely** also starts `AudioSocketEngine` (port 4573) and `SIPEngine` for telephony.

### Global Configuration

```go
// config/config.go
type AppConfig struct {
    Name     string `mapstructure:"service_name" validate:"required"`
    Version  string `mapstructure:"version"`
    Host     string `mapstructure:"host" validate:"required"`
    Env      string `mapstructure:"env" validate:"required"`
    Port     int    `mapstructure:"port" validate:"required"`
    LogLevel string `mapstructure:"log_level" validate:"required"`
    Secret   string `mapstructure:"secret" validate:"required"`
    // Inter-service communication hosts
    IntegrationHost string `mapstructure:"integration_host"`
    EndpointHost    string `mapstructure:"endpoint_host"`
    AssistantHost   string `mapstructure:"assistant_host"`
    WebHost         string `mapstructure:"web_host"`
    DocumentHost    string `mapstructure:"document_host"`
    UiHost          string `mapstructure:"ui_host"`
}
```

Each service extends `AppConfig` with its own config (e.g., `AssistantConfig` embeds `AppConfig` + `PostgresConfig` + `RedisConfig` + `OpenSearchConfig`).

### Router Pattern

Routers are **package-level functions** taking all dependencies as parameters:

```go
// api/web-api/router/web.go
func WebApiRoute(Cfg *config.WebConfig, E *gin.Engine, S *grpc.Server,
    Logger commons.Logger, Postgres connectors.PostgresConnector, Redis connectors.RedisConnector) {
    apiv1 := E.Group("/v1")
    apiv1.POST("/auth/authenticate/", handler.Authenticate)
    // gRPC registration
    protos.RegisterAuthenticationServiceServer(S, webApi.NewAuthGRPC(...))
    protos.RegisterVaultServiceServer(S, webApi.NewVaultGRPC(...))
}
```

### Handler/API Pattern

Handlers use **struct embedding** with separate REST and gRPC variants:

```go
// Base struct holding all service dependencies
type assistantApi struct {
    cfg              *config.AssistantConfig
    logger           commons.Logger
    postgres         connectors.PostgresConnector
    assistantService internal_services.AssistantService  // service interface
    knowledgeService internal_services.KnowledgeDocumentService
}

// gRPC implementation embeds the base
type assistantGrpcApi struct {
    assistantApi
}

// Constructor returns the protobuf server interface
func NewAssistantGRPCApi(...) protos.AssistantServiceServer {
    return &assistantGrpcApi{
        assistantApi{
            cfg:              config,
            assistantService: internal_assistant_service.NewAssistantService(logger, postgres),
        },
    }
}
```

### Service Interface + Implementation Pattern

**Interface** defined in `api/*/internal/service/`:

```go
// api/web-api/internal/service/user.service.go
type UserService interface {
    Authenticate(ctx context.Context, email, password string) (types.Principle, error)
    Get(ctx context.Context, email string) (*entity.UserAuth, error)
    Create(ctx context.Context, name, email, password, status, source string) (types.Principle, error)
}
```

**Implementation** in `api/*/internal/service/<name>/service.go`:

```go
// api/web-api/internal/service/user/service.go
type userService struct {  // unexported struct
    logger   commons.Logger
    postgres connectors.PostgresConnector
}

func NewUserService(logger commons.Logger, postgres connectors.PostgresConnector) internal_services.UserService {
    return &userService{logger: logger, postgres: postgres}
}

func (s *userService) Authenticate(ctx context.Context, email, password string) (types.Principle, error) {
    db := s.postgres.DB(ctx)  // context-scoped DB handle
    var user internal_entity.UserAuth
    if tx := db.First(&user, "email = ? AND password = ?", email, password); tx.Error != nil {
        s.logger.Errorf("failed to authenticate user: %v", tx.Error)
        return nil, tx.Error
    }
    // Parallel queries with errgroup
    g, ctx := errgroup.WithContext(ctx)
    g.Go(func() error { /* query token */ return nil })
    g.Go(func() error { /* query org role */ return nil })
    if err := g.Wait(); err != nil {
        return nil, err
    }
    return &authPrinciple{...}, nil
}
```

### Entity/Model Pattern

Entities compose base GORM models from `pkg/models/gorm/`:

```go
// Base types (pkg/models/gorm/)
type Audited struct {
    Id          uint64      `gorm:"type:bigint;primaryKey;<-:create"`
    CreatedDate TimeWrapper `gorm:"type:timestamp;not null;default:NOW();<-:create"`
    UpdatedDate TimeWrapper `gorm:"type:timestamp;default:null;onUpdate:NOW()"`
}

type Mutable struct {
    Status    type_enums.RecordState `gorm:"type:string;size:50;not null;default:ACTIVE"`
    CreatedBy uint64
    UpdatedBy uint64
}

type Organizational struct {
    ProjectId      uint64
    OrganizationId uint64
}

// Domain entity example
type Assistant struct {
    gorm_model.Audited
    gorm_model.Mutable
    gorm_model.Organizational
    Name        string
    Description string
    Language    string
    AssistantProvider  type_enums.AssistantProvider
    AssistantProviderModel *AssistantProviderModel `gorm:"foreignKey:AssistantProviderId"`
    AssistantKnowledges    []*AssistantKnowledge   `gorm:"foreignKey:AssistantId"`
}
```

- IDs auto-generated via **Snowflake** (`gorm_generator.ID()`) in `BeforeCreate` hook
- Custom GORM types: `StringArray`, `InterfaceMap`, `DocumentMap`, `PromptMap`, `ModelEnum`, etc.

### Connector Pattern

```go
// pkg/connectors/connector.go — base interface
type Connector interface {
    Connect(ctx context.Context) error
    Name() string
    IsConnected(ctx context.Context) bool
    Disconnect(ctx context.Context) error
}

// PostgresConnector adds DB access
type PostgresConnector interface {
    Connector
    DB(ctx context.Context) *gorm.DB
    Query(ctx context.Context, query string, dest interface{}) error
}

// RedisConnector adds command execution
type RedisConnector interface {
    Connector
    Cmd(ctx context.Context, cmd string, args ...interface{}) (*RedisResponse, error)
    Cmds(ctx context.Context, cmd string, args ...[]interface{}) ([]*RedisResponse, error)
    GetConnection() *redis.Client
}
```

### REST Client

```go
// pkg/clients/rest/rest_client.go
client := rest.NewRestClient(logger, cfg, "https://api.example.com")
resp, err := client.Get(ctx, "/endpoint", params, headers)
if err != nil { return err }
data, err := resp.ToMap()   // or .ToJSON(), .ToString()
```

### Authentication Middleware

- **Gin middleware** (`pkg/middlewares/authentication_rpc_middleware.go`): Extracts `Authorization` token from header/param/query → calls `resolver.Authorize(ctx, token, id)` → attaches principal to Gin context via `c.Set(string(types.CTX_), auth)` → authentication is **non-blocking** (continues on failure)
- **gRPC interceptors** (`authentication_grpc_middleware.go`): Chained unary/stream interceptors for recovery, logging, auth, org-scope auth, project-scope auth, service auth

### Logging

```go
// pkg/commons/logger.go — functional options pattern
logger := commons.NewApplicationLogger(
    commons.Level("debug"),
    commons.Name("web-api"),
)
// Interface: Debug/Info/Warn/Error/Fatal + Benchmark(name, duration) + Tracef(ctx, ...)
// Implementation: zap SugaredLogger with console (colored) + file (lumberjack rotation) writers
```

### Error Handling

- Return errors with context: `fmt.Errorf("failed to create assistant: %w", err)`
- Use `errgroup` for parallel operations
- Log errors at service level with `logger.Errorf(...)`

### Voice AI Core Types (assistant-api)

```go
// api/assistant-api/internal/type/ — core voice pipeline interfaces

// Generic transformer for STT/TTS providers
type Transformers[IN any] interface {
    Initialize() error
    Transform(context.Context, IN) error
    Close(context.Context) error
}

// Core voice AI orchestration contract
type Communication interface {
    Callback                            // LLM response callbacks
    InternalCaller                      // Integration/Vault/Deployment clients
    Logger                              // Webhook & tool execution logging
    Auth() types.SimplePrinciple
    Source() utils.Quantum AISource         // phone/debugger/sdk/etc
    Tracer() VoiceAgentTracer           // OpenTelemetry tracing
    Assistant() *Assistant
    Conversation() *AssistantConversation
    GetBehavior() (*DeploymentBehavior, error)
    GetHistories() []MessagePacket
    GetMetadata() map[string]interface{}
    GetArgs() map[string]interface{}
    GetOptions() utils.Option
}
```

Additional pipeline interfaces: `VAD`, `EndOfSpeech`, `Denoiser`, `Resampler`, `Recorder`, `Streamer`, `Aggregator`, `Normalizer`.

### STT/TTS Transformer Pattern

Each provider under `api/assistant-api/internal/transformer/` follows this structure:

- `<provider>.go` — Constructor + config
- `stt.go` — Speech-to-text implementation (implements `Transformers[AudioPacket]`)
- `tts.go` — Text-to-speech implementation (implements `Transformers[TextPacket]`)
- `normalizer.go` — Provider-specific text normalization
- `internal/` — Provider SDK wrappers

Supported providers: AssemblyAI, AWS, Azure, Cartesia, Deepgram, ElevenLabs, Google, OpenAI, Resemble, Rev.ai, Sarvam, Speechmatics.

### Document API (Python) Pattern

```python
# api/document-api/app/main.py — FastAPI with lifespan
@asynccontextmanager
async def lifespan(app):
    for cntr in attach_connectors(get_settings()):
        await cntr.connect()
        APP_STORAGE[cntr.name] = cntr
    APP_STORAGE["storage"] = attach_storage(get_settings())
    yield  # cleanup on shutdown

app = FastAPI(lifespan=lifespan)

@app.middleware("http")
async def add_datasource(request, call_next):
    request.state.datasource = APP_STORAGE  # DI via request.state
    return await call_next(request)
```

- Celery for async document indexing tasks
- Chunkers: consecutive, cumulative, statistical
- RAG pipeline: datasource → extractor → index_processor

---

## Frontend Patterns (React/TypeScript)

- **Styling**: Tailwind CSS with custom build via `yarn build:css`
- **Scripts**: `yarn start:dev` for concurrent Tailwind watch + Craco dev server
- **Linting**: ESLint with `yarn lint:fix`; Prettier for formatting
- **State Management**: Custom hooks (`use-*-page-store.ts`) — 25+ store hooks
- **Contexts**: Auth, dark mode, provider, sidebar contexts
- **Routing**: 13+ route modules (account, auth, connect, dashboard, deployment, integration, etc.)
- **Provider Metadata**: JSON files under `ui/src/providers/` with voices, languages, models per AI provider
- **Page Structure**: Each page module has `index.tsx` + `actions/`, `listing/`, `view/` subdirectories

---

## Client SDKs

| SDK         | Location              | Key Clients                                                                                                                     |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Go**      | `sdks/go/Quantum AI/`     | assistant, call, deployment, endpoint, invoke, talk, vault                                                                      |
| **Node.js** | `sdks/nodejs/src/`    | assistant, auth, call, connect, deployment, document, endpoint, invoke, knowledge, organization, project, provider, talk, vault |
| **Python**  | `sdks/python/Quantum AI/` | assistant, call, endpoint, invoke + agentkit                                                                                    |
| **React**   | `sdks/react/src/`     | voice-agent component, WebRTC/gRPC transport, device selector, audio visualization hooks                                        |

---

## Integration Points

- **OAuth Providers**: Google, GitHub, GitLab, Atlassian, HubSpot, LinkedIn, Microsoft, Notion, Slack (in `web-api/internal/connect/`)
- **LLM Providers**: Anthropic, OpenAI, Azure, Gemini, Cohere, Mistral, HuggingFace, Replicate, Vertex AI, Voyage AI, DeepInfra (in `integration-api/internal/caller/`)
- **Voice Providers**: AssemblyAI, AWS, Azure, Cartesia, Deepgram, ElevenLabs, Google, OpenAI, Resemble, Rev.ai, Sarvam, Speechmatics (in `assistant-api/internal/transformer/`)
- **Storage**: PostgreSQL (GORM), Redis (caching + second-level GORM cache), OpenSearch (knowledge search with tenant-scoped indices), S3/CDN (file storage), DynamoDB
- **Email**: SendGrid, AWS SES, local (in `pkg/clients/external/emailer/`)
- **Telephony**: SIP server, AudioSocket, WebRTC

---

## Key Dependencies

- **Web Framework**: Gin (HTTP), gRPC + cmux (multiplexing), grpc-web
- **Database**: GORM (PostgreSQL driver), golang-migrate, go-redis
- **AI SDKs**: anthropic-sdk-go, cohere-go (used by integration-api callers)
- **Voice**: Google Cloud Speech/TTS, Azure Cognitive Services, Deepgram SDK, sipgo
- **Auth**: golang-jwt/v5
- **Search**: OpenSearch client
- **Config**: Viper + mapstructure + validator/v10
- **Logging**: Zap + lumberjack (log rotation)
- **ID Generation**: Snowflake
- **Template**: Pongo2

---

## Conventions

- **Microservice boundaries**: Each service owns its own database schema and migrations
- **Inter-service**: Use gRPC clients (in `pkg/clients/`) for service-to-service calls
- **External APIs**: REST with `/v1` prefix via Gin
- **Naming**: Entities use `<domain>.<qualifier>.<entity>.go` (e.g., `knowledge.assistant.service.go`)
- **Tests**: Co-located with source (`*_test.go` in Go, `tests/` in Python)
- **Migrations**: Sequential numbered SQL files (`000001_initial_schema.up.sql`)
- **Proto sources**: In `protos/artifacts/` git submodule; generated files in `protos/`
- **Config files**: Viper loads from `env/config.yaml` + environment variables
- **Docker env**: Service-specific `.env` files in `docker/<service>/`</content>
  <parameter name="filePath">.github/copilot-instructions.md
