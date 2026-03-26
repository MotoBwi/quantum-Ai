import {
  ClientAuthInfo,
  UserAuthInfo,
  WithAuthContext,
} from "@/rapida/clients";
import {
  CreateBulkPhoneCallRequest,
  CreateBulkPhoneCallResponse,
  CreatePhoneCallRequest,
  CreatePhoneCallResponse,
} from "@/rapida/clients/protos/talk-api_pb";
import { ServiceError } from "@/rapida/clients/types";
import { ConnectionConfig } from "@/rapida/types/connection-config";

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersion
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreatePhoneCall(
  clientCfg: ConnectionConfig,
  request: CreatePhoneCallRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<CreatePhoneCallResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.conversationClient.createPhoneCall(
      request,
      WithAuthContext(authHeader || clientCfg.auth),
      (err: ServiceError | null, response: CreatePhoneCallResponse | null) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}

/**
 *
 * @param clientCfg
 * @param assistantId
 * @param assistantVersionx
 * @param params
 * @param args
 * @param options
 * @param metadata
 * @returns
 */
export function CreateBulkPhoneCall(
  clientCfg: ConnectionConfig,
  request: CreateBulkPhoneCallRequest,
  authHeader?: ClientAuthInfo | UserAuthInfo
): Promise<CreateBulkPhoneCallResponse> {
  return new Promise((resolve, reject) => {
    clientCfg.conversationClient.createBulkPhoneCall(
      request,
      WithAuthContext(authHeader || clientCfg.auth),
      (
        err: ServiceError | null,
        response: CreateBulkPhoneCallResponse | null
      ) => {
        if (err) reject(err);
        else resolve(response!);
      }
    );
  });
}
