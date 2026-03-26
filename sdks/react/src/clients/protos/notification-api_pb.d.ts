// package: notification_api
// file: notification-api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class NotificationSetting extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getAuthuserid(): number;
  setAuthuserid(value: number): void;

  getChannel(): string;
  setChannel(value: string): void;

  getEventtype(): string;
  setEventtype(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSetting.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSetting): NotificationSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSetting;
  static deserializeBinaryFromReader(message: NotificationSetting, reader: jspb.BinaryReader): NotificationSetting;
}

export namespace NotificationSetting {
  export type AsObject = {
    id: string,
    authuserid: number,
    channel: string,
    eventtype: string,
    enabled: boolean,
    status: string,
    createddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateddate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateNotificationSettingRequest extends jspb.Message {
  clearSettingsList(): void;
  getSettingsList(): Array<NotificationSetting>;
  setSettingsList(value: Array<NotificationSetting>): void;
  addSettings(value?: NotificationSetting, index?: number): NotificationSetting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotificationSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotificationSettingRequest): UpdateNotificationSettingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNotificationSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotificationSettingRequest;
  static deserializeBinaryFromReader(message: UpdateNotificationSettingRequest, reader: jspb.BinaryReader): UpdateNotificationSettingRequest;
}

export namespace UpdateNotificationSettingRequest {
  export type AsObject = {
    settingsList: Array<NotificationSetting.AsObject>,
  }
}

export class GetNotificationSettingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotificationSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotificationSettingRequest): GetNotificationSettingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNotificationSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotificationSettingRequest;
  static deserializeBinaryFromReader(message: GetNotificationSettingRequest, reader: jspb.BinaryReader): GetNotificationSettingRequest;
}

export namespace GetNotificationSettingRequest {
  export type AsObject = {
  }
}

export class NotificationSettingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  clearDataList(): void;
  getDataList(): Array<NotificationSetting>;
  setDataList(value: Array<NotificationSetting>): void;
  addData(value?: NotificationSetting, index?: number): NotificationSetting;

  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error | undefined;
  setError(value?: common_pb.Error): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationSettingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationSettingResponse): NotificationSettingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationSettingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationSettingResponse;
  static deserializeBinaryFromReader(message: NotificationSettingResponse, reader: jspb.BinaryReader): NotificationSettingResponse;
}

export namespace NotificationSettingResponse {
  export type AsObject = {
    code: number,
    success: boolean,
    dataList: Array<NotificationSetting.AsObject>,
    error?: common_pb.Error.AsObject,
  }
}

