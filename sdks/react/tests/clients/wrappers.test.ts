const mockWithAuthContext = jest.fn().mockReturnValue({ auth: "ctx" });

jest.mock("@/rapida/clients", () => ({
  WithAuthContext: (...args: any[]) => mockWithAuthContext(...args),
}));

const makeReq = (methods: string[]) =>
  class {
    [k: string]: any;
    constructor() {
      methods.forEach((m) => {
        this[m] = jest.fn((v: any) => {
          this[`_${m}`] = v;
        });
      });
    }
  };

jest.mock("@/rapida/clients/protos/common_pb", () => ({
  Criteria: makeReq(["setKey", "setValue", "setLogic"]),
  Paginate: makeReq(["setPage", "setPagesize"]),
  GetAllConversationMessageRequest: makeReq([
    "setAssistantid",
    "setAssistantconversationid",
    "addCriterias",
    "setPaginate",
  ]),
  GetAllAssistantConversationRequest: makeReq([
    "setAssistantid",
    "addCriterias",
    "setPaginate",
  ]),
}));

jest.mock("@/rapida/clients/protos/audit-logging-api_pb", () => ({
  GetAllAuditLogRequest: makeReq(["setProjectid", "addCriterias", "setPaginate"]),
  GetAuditLogRequest: makeReq(["setProjectid", "setId"]),
}));

jest.mock("@/rapida/clients/protos/connect-api_pb", () => ({
  GeneralConnectRequest: makeReq(["setConnect", "setCode", "setState", "setScope"]),
  GetConnectorFilesRequest: makeReq(["setProvider", "setCriteriasList"]),
}));

jest.mock("@/rapida/clients/protos/document-api_pb", () => ({
  IndexKnowledgeDocumentRequest: makeReq([
    "setKnowledgedocumentidList",
    "setKnowledgeid",
    "setIndextype",
  ]),
}));

jest.mock("@/rapida/clients/protos/web-api_pb", () => ({
  AuthenticateRequest: makeReq(["setEmail", "setPassword"]),
  RegisterUserRequest: makeReq(["setEmail", "setName", "setPassword"]),
  ForgotPasswordRequest: makeReq(["setEmail"]),
  VerifyTokenRequest: makeReq(["setToken", "setTokentype"]),
  AuthorizeRequest: makeReq([]),
  GetUserRequest: makeReq([]),
  UpdateUserRequest: makeReq(["setName"]),
  GetAllUserRequest: makeReq(["addCriterias", "setPaginate"]),
  SocialAuthenticationRequest: makeReq(["setState", "setCode"]),
  CreatePasswordRequest: makeReq(["setToken", "setPassword"]),
  ChangePasswordRequest: makeReq([]),
  CreateOrganizationRequest: makeReq([
    "setOrganizationname",
    "setOrganizationsize",
    "setOrganizationindustry",
  ]),
  UpdateOrganizationRequest: makeReq([
    "setOrganizationid",
    "setOrganizationname",
    "setOrganizationindustry",
    "setOrganizationcontact",
  ]),
  GetOrganizationRequest: makeReq([]),
  AddUsersToProjectRequest: makeReq(["setEmail", "setRole", "setProjectidsList"]),
  CreateProjectRequest: makeReq(["setProjectname", "setProjectdescription"]),
  UpdateProjectRequest: makeReq(["setProjectid", "setProjectname", "setProjectdescription"]),
  GetAllProjectRequest: makeReq(["addCriterias", "setPaginate"]),
  GetProjectRequest: makeReq(["setProjectid"]),
  ArchiveProjectRequest: makeReq(["setId"]),
  GetAllProjectCredentialRequest: makeReq(["setProjectid"]),
  CreateProjectCredentialRequest: makeReq(["setProjectid", "setName"]),
}));

jest.mock("@/rapida/clients/protos/vault-api_pb", () => ({
  CreateProviderCredentialRequest: makeReq([]),
  DeleteCredentialRequest: makeReq(["setVaultid"]),
  GetAllOrganizationCredentialRequest: makeReq(["addCriterias", "setPaginate"]),
}));

jest.mock("@/rapida/clients/protos/notification-api_pb", () => ({
  GetNotificationSettingRequest: makeReq([]),
  UpdateNotificationSettingRequest: makeReq([]),
}));

jest.mock("@/rapida/clients/protos/assistant-api_pb", () => ({
  GetAllAssistantTelemetryRequest: makeReq([]),
}));

jest.mock("@/rapida/clients/protos/talk-api_pb", () => ({
  CreatePhoneCallRequest: makeReq([]),
  CreateBulkPhoneCallRequest: makeReq([]),
  CreateMessageMetricRequest: makeReq([]),
  CreateConversationMetricRequest: makeReq([]),
}));

import { GetActivities, GetActivity } from "@/rapida/clients/activity";
import { GeneralConnect, GetConnectorFiles } from "@/rapida/clients/connect";
import { IndexKnowledgeDocument } from "@/rapida/clients/document";
import { CreatePhoneCall, CreateBulkPhoneCall } from "@/rapida/clients/call";
import {
  UpdateNotificationSetting,
  GetNotificationSetting,
} from "@/rapida/clients/notification";
import { GetAllAssistantTelemetry } from "@/rapida/clients/telemetry";
import { WebTalk } from "@/rapida/clients/webrtc";
import {
  CreateProviderKey,
  DeleteProviderKey,
  GetAllOrganizationCredential,
} from "@/rapida/clients/vault";
import {
  CreateOrganization,
  UpdateOrganization,
  GetOrganization,
} from "@/rapida/clients/organization";
import {
  AddUsersToProject,
  CreateProject,
  UpdateProject,
  GetAllProject,
  GetProject,
  DeleteProject,
  GetAllProjectCredential,
  CreateProjectCredential,
} from "@/rapida/clients/project";
import { Invoke } from "@/rapida/clients/invoke";
import {
  AssistantTalk,
  CreateMessageMetric,
  CreateConversationMetric,
} from "@/rapida/clients/talk";
import {
  AuthenticateUser,
  AuthorizeUser,
  RegisterUser,
  VerifyToken,
  ForgotPassword,
  CreatePassword,
  GetUser,
  UpdateUser,
  GetAllUser,
  Google,
  Linkedin,
  Github,
  ChangePassword,
} from "@/rapida/clients/auth";

describe("clients wrappers", () => {
  const cb = jest.fn();
  let config: any;

  beforeEach(() => {
    jest.clearAllMocks();
    config = {
      auth: { token: "cfg-auth" },
      auditLoggingClient: {
        getAllAuditLog: jest.fn().mockReturnValue("audit-all"),
        getAuditLog: jest.fn().mockReturnValue("audit-one"),
      },
      connectClient: {
        generalConnect: jest.fn().mockReturnValue("connect-general"),
        getConnectorFiles: jest.fn().mockReturnValue("connect-files"),
      },
      documentClient: {
        indexKnowledgeDocument: jest.fn().mockReturnValue("index-doc"),
      },
      conversationClient: {
        createPhoneCall: jest.fn(),
        createBulkPhoneCall: jest.fn(),
        createMessageMetric: jest.fn(),
        createConversationMetric: jest.fn(),
        getAllAssistantConversation: jest.fn(),
        getAllConversationMessage: jest.fn(),
      },
      notificationClient: {
        updateNotificationSetting: jest.fn(),
        getNotificationSettting: jest.fn(),
      },
      assistantClient: {
        getAllAssistantTelemetry: jest.fn(),
      },
      webrtcClient: {
        webTalk: jest.fn().mockReturnValue("webtalk-stream"),
      },
      vaultClient: {
        createProviderCredential: jest.fn(),
        deleteCredential: jest.fn(),
        getAllOrganizationCredential: jest.fn(),
      },
      organizationClient: {
        createOrganization: jest.fn().mockReturnValue("create-org"),
        updateOrganization: jest.fn().mockReturnValue("update-org"),
        getOrganization: jest.fn().mockReturnValue("get-org"),
      },
      projectClient: {
        addUsersToProject: jest.fn().mockReturnValue("add-users"),
        createProject: jest.fn().mockReturnValue("create-project"),
        updateProject: jest.fn().mockReturnValue("update-project"),
        getAllProject: jest.fn().mockReturnValue("get-all-project"),
        getProject: jest.fn().mockReturnValue("get-project"),
        archiveProject: jest.fn().mockReturnValue("archive-project"),
        getAllProjectCredential: jest.fn().mockReturnValue("get-all-project-creds"),
        createProjectCredential: jest.fn().mockReturnValue("create-project-creds"),
      },
      deploymentClient: {
        invoke: jest.fn(),
      },
      streamClient: {
        assistantTalk: jest.fn().mockReturnValue("assistant-stream"),
      },
      authenticationClient: {
        authenticate: jest.fn().mockReturnValue("auth-user"),
        authorize: jest.fn().mockReturnValue("authorize-user"),
        registerUser: jest.fn().mockReturnValue("register-user"),
        verifyToken: jest.fn().mockReturnValue("verify-token"),
        forgotPassword: jest.fn().mockReturnValue("forgot-password"),
        createPassword: jest.fn().mockReturnValue("create-password"),
        getUser: jest.fn().mockReturnValue("get-user"),
        updateUser: jest.fn().mockReturnValue("update-user"),
        getAllUser: jest.fn().mockReturnValue("get-all-user"),
        google: jest.fn().mockReturnValue("google-auth"),
        linkedin: jest.fn().mockReturnValue("linkedin-auth"),
        github: jest.fn().mockReturnValue("github-auth"),
        changePassword: jest.fn(),
      },
    };
  });

  it("activity/connect/document wrappers call clients with auth metadata", () => {
    expect(GetActivities(config, "p1", 1, 20, [{ key: "k", value: "v", logic: "eq" }], cb, { a: 1 } as any)).toBe(
      "audit-all",
    );
    expect(GetActivity(config, "p1", "a1", cb, { a: 1 } as any)).toBe("audit-one");
    expect(GeneralConnect(config, "slack", "code", "state", "scope", { a: 1 } as any, cb)).toBe(
      "connect-general",
    );
    expect(GetConnectorFiles(config, "google-drive", [] as any, { a: 1 } as any, cb)).toBe(
      "connect-files",
    );
    expect(IndexKnowledgeDocument(config, "k1", ["d1"], "full", { a: 1 } as any, cb)).toBe(
      "index-doc",
    );
    expect(mockWithAuthContext).toHaveBeenCalled();
  });

  it("organization/project/vault wrappers call expected methods", () => {
    expect(CreateOrganization(config, "Org", "10", "AI", { a: 1 } as any, cb)).toBe("create-org");
    expect(
      UpdateOrganization(config, "org-1", { a: 1 } as any, cb, "New Org", "SaaS", "contact"),
    ).toBe("update-org");
    expect(GetOrganization(config, { a: 1 } as any, cb)).toBe("get-org");

    expect(AddUsersToProject(config, "a@b.com", "owner", ["p1"], cb, { a: 1 } as any)).toBe(
      "add-users",
    );
    expect(CreateProject(config, "P", "Desc", { a: 1 } as any, cb)).toBe("create-project");
    expect(UpdateProject(config, "p1", cb, { a: 1 } as any, "P2", "D2")).toBe("update-project");
    expect(GetAllProject(config, 1, 10, [{ key: "x", value: "y" }], cb, { a: 1 } as any)).toBe(
      "get-all-project",
    );
    expect(GetProject(config, "p1", cb, { a: 1 } as any)).toBe("get-project");
    expect(DeleteProject(config, "p1", cb, { a: 1 } as any)).toBe("archive-project");
    expect(GetAllProjectCredential(config, "p1", cb, { a: 1 } as any)).toBe(
      "get-all-project-creds",
    );
    expect(CreateProjectCredential(config, "p1", "cred", cb, { a: 1 } as any)).toBe(
      "create-project-creds",
    );

    DeleteProviderKey(config, "vault-1", cb, { a: 1 } as any);
    GetAllOrganizationCredential(
      config,
      1,
      10,
      [{ key: "provider", value: "x", logic: "eq" }],
      cb,
      { a: 1 } as any,
    );
    expect(config.vaultClient.deleteCredential).toHaveBeenCalled();
    expect(config.vaultClient.getAllOrganizationCredential).toHaveBeenCalled();
  });

  it("promise wrappers resolve and reject correctly", async () => {
    config.conversationClient.createPhoneCall.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );
    config.conversationClient.createBulkPhoneCall.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );
    config.notificationClient.updateNotificationSetting.mockImplementation(
      (_r: any, _m: any, done: any) => done(null, { ok: true }),
    );
    config.notificationClient.getNotificationSettting.mockImplementation(
      (_r: any, _m: any, done: any) => done(null, { ok: true }),
    );
    config.assistantClient.getAllAssistantTelemetry.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );
    config.deploymentClient.invoke.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );
    config.conversationClient.createMessageMetric.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );
    config.conversationClient.createConversationMetric.mockImplementation(
      (_r: any, _m: any, done: any) => done(null, { ok: true }),
    );
    config.authenticationClient.changePassword.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );
    config.vaultClient.createProviderCredential.mockImplementation((_r: any, _m: any, done: any) =>
      done(null, { ok: true }),
    );

    await expect(CreatePhoneCall(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(CreateBulkPhoneCall(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(UpdateNotificationSetting(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(GetNotificationSetting(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(GetAllAssistantTelemetry(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(Invoke(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(CreateMessageMetric(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(CreateConversationMetric(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(ChangePassword(config, {} as any)).resolves.toEqual({ ok: true });
    await expect(CreateProviderKey(config, {} as any)).resolves.toEqual({ ok: true });

    config.conversationClient.createPhoneCall.mockImplementation((_r: any, _m: any, done: any) =>
      done(new Error("failed"), null),
    );
    await expect(CreatePhoneCall(config, {} as any)).rejects.toThrow("failed");
  });

  it("stream wrappers forward metadata", () => {
    expect(WebTalk(config)).toBe("webtalk-stream");
    expect(AssistantTalk(config)).toBe("assistant-stream");
  });

  it("auth wrappers call authentication client methods", () => {
    AuthenticateUser(config, "a@b.com", "pw", cb);
    AuthorizeUser(config, cb, { a: 1 } as any);
    RegisterUser(config, "a@b.com", "pw", "name", cb);
    VerifyToken(config, "t", "bearer", cb);
    ForgotPassword(config, "a@b.com", cb);
    CreatePassword(config, "tok", "newpw", cb);
    GetUser(config, cb, { a: 1 } as any);
    UpdateUser(config, cb, { a: 1 } as any, "new name");
    GetAllUser(config, 1, 20, [{ key: "email", value: "a@b.com" }], cb, { a: 1 } as any);
    Google(config, cb, "s", "c");
    Linkedin(config, cb, "s", "c");
    Github(config, cb, "s", "c");

    expect(config.authenticationClient.authenticate).toHaveBeenCalled();
    expect(config.authenticationClient.authorize).toHaveBeenCalled();
    expect(config.authenticationClient.registerUser).toHaveBeenCalled();
    expect(config.authenticationClient.verifyToken).toHaveBeenCalled();
    expect(config.authenticationClient.forgotPassword).toHaveBeenCalled();
    expect(config.authenticationClient.createPassword).toHaveBeenCalled();
    expect(config.authenticationClient.getUser).toHaveBeenCalled();
    expect(config.authenticationClient.updateUser).toHaveBeenCalled();
    expect(config.authenticationClient.getAllUser).toHaveBeenCalled();
    expect(config.authenticationClient.google).toHaveBeenCalled();
    expect(config.authenticationClient.linkedin).toHaveBeenCalled();
    expect(config.authenticationClient.github).toHaveBeenCalled();
  });
});

