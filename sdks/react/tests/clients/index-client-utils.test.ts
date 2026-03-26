import { grpc } from "@improbable-eng/grpc-web";
import {
  HEADER_REGION_KEY,
  HEADER_AUTH_ID,
  HEADER_API_KEY,
  HEADER_USER_AGENT,
} from "@/rapida/utils/rapida_header";
import {
  WithPlatform,
  WithAuthContext,
  WithClientContext,
  getClientInfo,
} from "@/rapida/clients/index";

describe("clients/index utils", () => {
  it("WithPlatform sets default region header", () => {
    const md = new grpc.Metadata();
    const out = WithPlatform(md);
    expect(out.get(HEADER_REGION_KEY)).toBeDefined();
  });

  it("WithAuthContext sets auth fields and nested client fields", () => {
    const md = WithAuthContext({
      [HEADER_API_KEY]: "k1",
      [HEADER_AUTH_ID]: "a1",
      Client: {
        [HEADER_USER_AGENT]: "ua-test",
      },
    });

    expect(md.get(HEADER_API_KEY)).toEqual(["k1"]);
    expect(md.get(HEADER_AUTH_ID)).toEqual(["a1"]);
    expect(md.get(HEADER_USER_AGENT)).toEqual(["ua-test"]);
  });

  it("getClientInfo merges additional info", () => {
    const info = getClientInfo({ [HEADER_USER_AGENT]: "custom-agent" } as any);
    expect(info[HEADER_USER_AGENT]).toBe("custom-agent");
  });

  it("WithClientContext writes non-undefined values to metadata", () => {
    const md = WithClientContext(new grpc.Metadata());
    expect(md.get(HEADER_USER_AGENT).length).toBeGreaterThan(0);
  });
});

