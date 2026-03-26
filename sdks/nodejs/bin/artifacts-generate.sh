#!/bin/bash

# === CONFIG ===
PROTO_DIR="./src/clients/protos/artifacts"
OUT_DIR="./src/clients/protos"

# === CLEAN PREVIOUS GENERATED FILES ===
rm -f "$OUT_DIR"/*.js
rm -f "$OUT_DIR"/*.ts
rm -f "$OUT_DIR"/*.d.ts

# === PATHS TO PROTOC PLUGINS ===

PROTOC_GEN_TS_PATH="./node_modules/.bin/ts-protoc-gen"
PROTOC_GEN_WEB_PATH="./node_modules/.bin/protoc-gen-grpc-web"
# === GENERATE JS + TS + grpc-js CODE ===
npx grpc_tools_node_protoc \
  --plugin="ts-protoc-gen=${PROTOC_GEN_TS_PATH}" \
  --js_out=import_style=commonjs,binary:"$OUT_DIR" \
  --ts_out="service=grpc-node:$OUT_DIR" \
  --grpc_out=grpc_js:"$OUT_DIR" \
  -I "$PROTO_DIR" "$PROTO_DIR"/*.proto

echo "Protobuf and gRPC code generated successfully in $OUT_DIR"
