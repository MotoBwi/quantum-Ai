// package: 
// file: common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class FieldSelector extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldSelector.AsObject;
  static toObject(includeInstance: boolean, msg: FieldSelector): FieldSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldSelector;
  static deserializeBinaryFromReader(message: FieldSelector, reader: jspb.BinaryReader): FieldSelector;
}

export namespace FieldSelector {
  export type AsObject = {
    field: string,
  }
}

export class AssistantDefinition extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantDefinition): AssistantDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantDefinition;
  static deserializeBinaryFromReader(message: AssistantDefinition, reader: jspb.BinaryReader): AssistantDefinition;
}

export namespace AssistantDefinition {
  export type AsObject = {
    assistantid: string,
    version: string,
  }
}

export class Criteria extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getLogic(): string;
  setLogic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Criteria.AsObject;
  static toObject(includeInstance: boolean, msg: Criteria): Criteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Criteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Criteria;
  static deserializeBinaryFromReader(message: Criteria, reader: jspb.BinaryReader): Criteria;
}

export namespace Criteria {
  export type AsObject = {
    key: string,
    value: string,
    logic: string,
  }
}

export class Error extends jspb.Message {
  getErrorcode(): string;
  setErrorcode(value: string): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getHumanmessage(): string;
  setHumanmessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    errorcode: string,
    errormessage: string,
    humanmessage: string,
  }
}

export class Paginate extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paginate.AsObject;
  static toObject(includeInstance: boolean, msg: Paginate): Paginate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Paginate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paginate;
  static deserializeBinaryFromReader(message: Paginate, reader: jspb.BinaryReader): Paginate;
}

export namespace Paginate {
  export type AsObject = {
    page: number,
    pagesize: number,
  }
}

export class Paginated extends jspb.Message {
  getCurrentpage(): number;
  setCurrentpage(value: number): void;

  getTotalitem(): number;
  setTotalitem(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paginated.AsObject;
  static toObject(includeInstance: boolean, msg: Paginated): Paginated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Paginated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paginated;
  static deserializeBinaryFromReader(message: Paginated, reader: jspb.BinaryReader): Paginated;
}

export namespace Paginated {
  export type AsObject = {
    currentpage: number,
    totalitem: number,
  }
}

export class Ordering extends jspb.Message {
  getColumn(): string;
  setColumn(value: string): void;

  getOrder(): string;
  setOrder(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ordering.AsObject;
  static toObject(includeInstance: boolean, msg: Ordering): Ordering.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ordering, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ordering;
  static deserializeBinaryFromReader(message: Ordering, reader: jspb.BinaryReader): Ordering;
}

export namespace Ordering {
  export type AsObject = {
    column: string,
    order: string,
  }
}

export class User extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    role: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: string,
  }
}

export class BaseResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BaseResponse): BaseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseResponse;
  static deserializeBinaryFromReader(message: BaseResponse, reader: jspb.BinaryReader): BaseResponse;
}

export namespace BaseResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataMap: Array<[string, string]>,
    error?: Error.AsObject,
  }
}

export class Metadata extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    id: string,
    key: string,
    value: string,
  }
}

export class Argument extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Argument.AsObject;
  static toObject(includeInstance: boolean, msg: Argument): Argument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Argument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Argument;
  static deserializeBinaryFromReader(message: Argument, reader: jspb.BinaryReader): Argument;
}

export namespace Argument {
  export type AsObject = {
    id: string,
    name: string,
    value: string,
  }
}

export class Variable extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasDefaultvalue(): boolean;
  clearDefaultvalue(): void;
  getDefaultvalue(): string;
  setDefaultvalue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    id: string,
    name: string,
    type: string,
    defaultvalue: string,
  }
}

export class Tag extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearTagList(): void;
  getTagList(): Array<string>;
  setTagList(value: Array<string>): void;
  addTag(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    id: string,
    tagList: Array<string>,
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIndustry(): string;
  setIndustry(value: string): void;

  getContact(): string;
  setContact(value: string): void;

  getSize(): string;
  setSize(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    industry: string,
    contact: string,
    size: string,
  }
}

export class Metric extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metric.AsObject;
  static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metric;
  static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
}

export namespace Metric {
  export type AsObject = {
    name: string,
    value: string,
    description: string,
  }
}

export class AssistantMessage extends jspb.Message {
  clearContentsList(): void;
  getContentsList(): Array<string>;
  setContentsList(value: Array<string>): void;
  addContents(value: string, index?: number): string;

  clearToolcallsList(): void;
  getToolcallsList(): Array<ToolCall>;
  setToolcallsList(value: Array<ToolCall>): void;
  addToolcalls(value?: ToolCall, index?: number): ToolCall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantMessage): AssistantMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantMessage;
  static deserializeBinaryFromReader(message: AssistantMessage, reader: jspb.BinaryReader): AssistantMessage;
}

export namespace AssistantMessage {
  export type AsObject = {
    contentsList: Array<string>,
    toolcallsList: Array<ToolCall.AsObject>,
  }
}

export class SystemMessage extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemMessage.AsObject;
  static toObject(includeInstance: boolean, msg: SystemMessage): SystemMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemMessage;
  static deserializeBinaryFromReader(message: SystemMessage, reader: jspb.BinaryReader): SystemMessage;
}

export namespace SystemMessage {
  export type AsObject = {
    content: string,
  }
}

export class UserMessage extends jspb.Message {
  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UserMessage): UserMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMessage;
  static deserializeBinaryFromReader(message: UserMessage, reader: jspb.BinaryReader): UserMessage;
}

export namespace UserMessage {
  export type AsObject = {
    content: string,
  }
}

export class ToolMessage extends jspb.Message {
  clearToolsList(): void;
  getToolsList(): Array<ToolMessage.Tool>;
  setToolsList(value: Array<ToolMessage.Tool>): void;
  addTools(value?: ToolMessage.Tool, index?: number): ToolMessage.Tool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ToolMessage): ToolMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolMessage;
  static deserializeBinaryFromReader(message: ToolMessage, reader: jspb.BinaryReader): ToolMessage;
}

export namespace ToolMessage {
  export type AsObject = {
    toolsList: Array<ToolMessage.Tool.AsObject>,
  }

  export class Tool extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getId(): string;
    setId(value: string): void;

    getContent(): string;
    setContent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tool.AsObject;
    static toObject(includeInstance: boolean, msg: Tool): Tool.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tool, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tool;
    static deserializeBinaryFromReader(message: Tool, reader: jspb.BinaryReader): Tool;
  }

  export namespace Tool {
    export type AsObject = {
      name: string,
      id: string,
      content: string,
    }
  }
}

export class Message extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  hasAssistant(): boolean;
  clearAssistant(): void;
  getAssistant(): AssistantMessage | undefined;
  setAssistant(value?: AssistantMessage): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): UserMessage | undefined;
  setUser(value?: UserMessage): void;

  hasTool(): boolean;
  clearTool(): void;
  getTool(): ToolMessage | undefined;
  setTool(value?: ToolMessage): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): SystemMessage | undefined;
  setSystem(value?: SystemMessage): void;

  getMessageCase(): Message.MessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    role: string,
    assistant?: AssistantMessage.AsObject,
    user?: UserMessage.AsObject,
    tool?: ToolMessage.AsObject,
    system?: SystemMessage.AsObject,
  }

  export enum MessageCase {
    MESSAGE_NOT_SET = 0,
    ASSISTANT = 10,
    USER = 11,
    TOOL = 12,
    SYSTEM = 13,
  }
}

export class ToolCall extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  hasFunction(): boolean;
  clearFunction(): void;
  getFunction(): FunctionCall | undefined;
  setFunction(value?: FunctionCall): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolCall.AsObject;
  static toObject(includeInstance: boolean, msg: ToolCall): ToolCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolCall;
  static deserializeBinaryFromReader(message: ToolCall, reader: jspb.BinaryReader): ToolCall;
}

export namespace ToolCall {
  export type AsObject = {
    id: string,
    type: string,
    pb_function?: FunctionCall.AsObject,
  }
}

export class FunctionCall extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getArguments(): string;
  setArguments(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionCall.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionCall): FunctionCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionCall;
  static deserializeBinaryFromReader(message: FunctionCall, reader: jspb.BinaryReader): FunctionCall;
}

export namespace FunctionCall {
  export type AsObject = {
    name: string,
    arguments: string,
  }
}

export class Knowledge extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getVisibility(): string;
  setVisibility(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getEmbeddingmodelproviderid(): string;
  setEmbeddingmodelproviderid(value: string): void;

  getEmbeddingmodelprovidername(): string;
  setEmbeddingmodelprovidername(value: string): void;

  clearKnowledgeembeddingmodeloptionsList(): void;
  getKnowledgeembeddingmodeloptionsList(): Array<Metadata>;
  setKnowledgeembeddingmodeloptionsList(value: Array<Metadata>): void;
  addKnowledgeembeddingmodeloptions(value?: Metadata, index?: number): Metadata;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  hasCreateduser(): boolean;
  clearCreateduser(): void;
  getCreateduser(): User | undefined;
  setCreateduser(value?: User): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUpdateduser(): boolean;
  clearUpdateduser(): void;
  getUpdateduser(): User | undefined;
  setUpdateduser(value?: User): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  hasKnowledgetag(): boolean;
  clearKnowledgetag(): void;
  getKnowledgetag(): Tag | undefined;
  setKnowledgetag(value?: Tag): void;

  getDocumentcount(): number;
  setDocumentcount(value: number): void;

  getTokencount(): number;
  setTokencount(value: number): void;

  getWordcount(): number;
  setWordcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Knowledge.AsObject;
  static toObject(includeInstance: boolean, msg: Knowledge): Knowledge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Knowledge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Knowledge;
  static deserializeBinaryFromReader(message: Knowledge, reader: jspb.BinaryReader): Knowledge;
}

export namespace Knowledge {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    visibility: string,
    language: string,
    embeddingmodelproviderid: string,
    embeddingmodelprovidername: string,
    knowledgeembeddingmodeloptionsList: Array<Metadata.AsObject>,
    status: string,
    createdby: string,
    createduser?: User.AsObject,
    updatedby: string,
    updateduser?: User.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationid: string,
    projectid: string,
    organization?: Organization.AsObject,
    knowledgetag?: Tag.AsObject,
    documentcount: number,
    tokencount: number,
    wordcount: number,
  }
}

export class TextPrompt extends jspb.Message {
  getRole(): string;
  setRole(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextPrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextPrompt): TextPrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextPrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextPrompt;
  static deserializeBinaryFromReader(message: TextPrompt, reader: jspb.BinaryReader): TextPrompt;
}

export namespace TextPrompt {
  export type AsObject = {
    role: string,
    content: string,
  }
}

export class TextChatCompletePrompt extends jspb.Message {
  clearPromptList(): void;
  getPromptList(): Array<TextPrompt>;
  setPromptList(value: Array<TextPrompt>): void;
  addPrompt(value?: TextPrompt, index?: number): TextPrompt;

  clearPromptvariablesList(): void;
  getPromptvariablesList(): Array<Variable>;
  setPromptvariablesList(value: Array<Variable>): void;
  addPromptvariables(value?: Variable, index?: number): Variable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextChatCompletePrompt.AsObject;
  static toObject(includeInstance: boolean, msg: TextChatCompletePrompt): TextChatCompletePrompt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextChatCompletePrompt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextChatCompletePrompt;
  static deserializeBinaryFromReader(message: TextChatCompletePrompt, reader: jspb.BinaryReader): TextChatCompletePrompt;
}

export namespace TextChatCompletePrompt {
  export type AsObject = {
    promptList: Array<TextPrompt.AsObject>,
    promptvariablesList: Array<Variable.AsObject>,
  }
}

export class AssistantConversationMessage extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getRole(): string;
  setRole(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  getStatus(): string;
  setStatus(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationMessage): AssistantConversationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationMessage;
  static deserializeBinaryFromReader(message: AssistantConversationMessage, reader: jspb.BinaryReader): AssistantConversationMessage;
}

export namespace AssistantConversationMessage {
  export type AsObject = {
    id: string,
    messageid: string,
    assistantconversationid: string,
    role: string,
    body: string,
    source: string,
    metricsList: Array<Metric.AsObject>,
    status: string,
    createdby: string,
    updatedby: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    assistantid: string,
    assistantprovidermodelid: string,
    metadataList: Array<Metadata.AsObject>,
  }
}

export class AssistantConversationContext extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): google_protobuf_struct_pb.Struct | undefined;
  setResult(value?: google_protobuf_struct_pb.Struct): void;

  hasQuery(): boolean;
  clearQuery(): void;
  getQuery(): google_protobuf_struct_pb.Struct | undefined;
  setQuery(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationContext.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationContext): AssistantConversationContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationContext;
  static deserializeBinaryFromReader(message: AssistantConversationContext, reader: jspb.BinaryReader): AssistantConversationContext;
}

export namespace AssistantConversationContext {
  export type AsObject = {
    id: string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    result?: google_protobuf_struct_pb.Struct.AsObject,
    query?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AssistantConversationRecording extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantrecordingurl(): string;
  setAssistantrecordingurl(value: string): void;

  getUserrecordingurl(): string;
  setUserrecordingurl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationRecording.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationRecording): AssistantConversationRecording.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationRecording, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationRecording;
  static deserializeBinaryFromReader(message: AssistantConversationRecording, reader: jspb.BinaryReader): AssistantConversationRecording;
}

export namespace AssistantConversationRecording {
  export type AsObject = {
    id: string,
    assistantrecordingurl: string,
    userrecordingurl: string,
  }
}

export class AssistantConversationTelephonyEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  getProvider(): string;
  setProvider(value: string): void;

  getEventtype(): string;
  setEventtype(value: string): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversationTelephonyEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversationTelephonyEvent): AssistantConversationTelephonyEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversationTelephonyEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversationTelephonyEvent;
  static deserializeBinaryFromReader(message: AssistantConversationTelephonyEvent, reader: jspb.BinaryReader): AssistantConversationTelephonyEvent;
}

export namespace AssistantConversationTelephonyEvent {
  export type AsObject = {
    id: string,
    assistantconversationid: string,
    provider: string,
    eventtype: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AssistantConversation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getAssistantid(): string;
  setAssistantid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getProjectid(): string;
  setProjectid(value: string): void;

  getOrganizationid(): string;
  setOrganizationid(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getCreatedby(): string;
  setCreatedby(value: string): void;

  getUpdatedby(): string;
  setUpdatedby(value: string): void;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): User | undefined;
  setUser(value?: User): void;

  getAssistantprovidermodelid(): string;
  setAssistantprovidermodelid(value: string): void;

  clearAssistantconversationmessageList(): void;
  getAssistantconversationmessageList(): Array<AssistantConversationMessage>;
  setAssistantconversationmessageList(value: Array<AssistantConversationMessage>): void;
  addAssistantconversationmessage(value?: AssistantConversationMessage, index?: number): AssistantConversationMessage;

  getIdentifier(): string;
  setIdentifier(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasCreateddate(): boolean;
  clearCreateddate(): void;
  getCreateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateddate(): boolean;
  clearUpdateddate(): void;
  getUpdateddate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateddate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearContextsList(): void;
  getContextsList(): Array<AssistantConversationContext>;
  setContextsList(value: Array<AssistantConversationContext>): void;
  addContexts(value?: AssistantConversationContext, index?: number): AssistantConversationContext;

  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  clearMetadataList(): void;
  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): void;
  addMetadata(value?: Metadata, index?: number): Metadata;

  clearArgumentsList(): void;
  getArgumentsList(): Array<Argument>;
  setArgumentsList(value: Array<Argument>): void;
  addArguments(value?: Argument, index?: number): Argument;

  clearOptionsList(): void;
  getOptionsList(): Array<Metadata>;
  setOptionsList(value: Array<Metadata>): void;
  addOptions(value?: Metadata, index?: number): Metadata;

  getDirection(): string;
  setDirection(value: string): void;

  clearRecordingsList(): void;
  getRecordingsList(): Array<AssistantConversationRecording>;
  setRecordingsList(value: Array<AssistantConversationRecording>): void;
  addRecordings(value?: AssistantConversationRecording, index?: number): AssistantConversationRecording;

  clearTelephonyeventsList(): void;
  getTelephonyeventsList(): Array<AssistantConversationTelephonyEvent>;
  setTelephonyeventsList(value: Array<AssistantConversationTelephonyEvent>): void;
  addTelephonyevents(value?: AssistantConversationTelephonyEvent, index?: number): AssistantConversationTelephonyEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssistantConversation.AsObject;
  static toObject(includeInstance: boolean, msg: AssistantConversation): AssistantConversation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssistantConversation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssistantConversation;
  static deserializeBinaryFromReader(message: AssistantConversation, reader: jspb.BinaryReader): AssistantConversation;
}

export namespace AssistantConversation {
  export type AsObject = {
    id: string,
    userid: string,
    assistantid: string,
    name: string,
    projectid: string,
    organizationid: string,
    source: string,
    createdby: string,
    updatedby: string,
    user?: User.AsObject,
    assistantprovidermodelid: string,
    assistantconversationmessageList: Array<AssistantConversationMessage.AsObject>,
    identifier: string,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contextsList: Array<AssistantConversationContext.AsObject>,
    metricsList: Array<Metric.AsObject>,
    metadataList: Array<Metadata.AsObject>,
    argumentsList: Array<Argument.AsObject>,
    optionsList: Array<Metadata.AsObject>,
    direction: string,
    recordingsList: Array<AssistantConversationRecording.AsObject>,
    telephonyeventsList: Array<AssistantConversationTelephonyEvent.AsObject>,
  }
}

export class GetAllAssistantConversationRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  getSource(): SourceMap[keyof SourceMap];
  setSource(value: SourceMap[keyof SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantConversationRequest): GetAllAssistantConversationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantConversationRequest;
  static deserializeBinaryFromReader(message: GetAllAssistantConversationRequest, reader: jspb.BinaryReader): GetAllAssistantConversationRequest;
}

export namespace GetAllAssistantConversationRequest {
  export type AsObject = {
    assistantid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    source: SourceMap[keyof SourceMap],
  }
}

export class GetAllAssistantConversationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversation>;
  setDataList(value: Array<AssistantConversation>): void;
  addData(value?: AssistantConversation, index?: number): AssistantConversation;

  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllAssistantConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllAssistantConversationResponse): GetAllAssistantConversationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllAssistantConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllAssistantConversationResponse;
  static deserializeBinaryFromReader(message: GetAllAssistantConversationResponse, reader: jspb.BinaryReader): GetAllAssistantConversationResponse;
}

export namespace GetAllAssistantConversationResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversation.AsObject>,
    error?: Error.AsObject,
    paginated?: Paginated.AsObject,
  }
}

export class GetAllConversationMessageRequest extends jspb.Message {
  getAssistantid(): string;
  setAssistantid(value: string): void;

  getAssistantconversationid(): string;
  setAssistantconversationid(value: string): void;

  hasPaginate(): boolean;
  clearPaginate(): void;
  getPaginate(): Paginate | undefined;
  setPaginate(value?: Paginate): void;

  clearCriteriasList(): void;
  getCriteriasList(): Array<Criteria>;
  setCriteriasList(value: Array<Criteria>): void;
  addCriterias(value?: Criteria, index?: number): Criteria;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Ordering | undefined;
  setOrder(value?: Ordering): void;

  getSource(): SourceMap[keyof SourceMap];
  setSource(value: SourceMap[keyof SourceMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllConversationMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllConversationMessageRequest): GetAllConversationMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllConversationMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllConversationMessageRequest;
  static deserializeBinaryFromReader(message: GetAllConversationMessageRequest, reader: jspb.BinaryReader): GetAllConversationMessageRequest;
}

export namespace GetAllConversationMessageRequest {
  export type AsObject = {
    assistantid: string,
    assistantconversationid: string,
    paginate?: Paginate.AsObject,
    criteriasList: Array<Criteria.AsObject>,
    order?: Ordering.AsObject,
    source: SourceMap[keyof SourceMap],
  }
}

export class GetAllConversationMessageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<AssistantConversationMessage>;
  setDataList(value: Array<AssistantConversationMessage>): void;
  addData(value?: AssistantConversationMessage, index?: number): AssistantConversationMessage;

  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  hasPaginated(): boolean;
  clearPaginated(): void;
  getPaginated(): Paginated | undefined;
  setPaginated(value?: Paginated): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllConversationMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllConversationMessageResponse): GetAllConversationMessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllConversationMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllConversationMessageResponse;
  static deserializeBinaryFromReader(message: GetAllConversationMessageResponse, reader: jspb.BinaryReader): GetAllConversationMessageResponse;
}

export namespace GetAllConversationMessageResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<AssistantConversationMessage.AsObject>,
    error?: Error.AsObject,
    paginated?: Paginated.AsObject,
  }
}

export interface SourceMap {
  WEB_PLUGIN: 0;
  DEBUGGER: 1;
  SDK: 2;
  PHONE_CALL: 3;
  WHATSAPP: 4;
}

export const Source: SourceMap;

