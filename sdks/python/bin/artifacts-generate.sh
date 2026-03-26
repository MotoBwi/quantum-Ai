find ./rapida/clients/protos -name "*_pb2.py" -delete
find ./rapida/clients/protos -name "*_pb2_grpc.py" -delete
find ./rapida/clients/protos -name "*_pb2.pyi" -delete
python3 -m grpc.tools.protoc \
    -I ./rapida/clients/protos/artifacts \
    --pyi_out=./rapida/clients/protos \
    --python_out=./rapida/clients/protos \
    --grpc_python_out=./rapida/clients/protos \
    ./rapida/clients/protos/artifacts/*.proto


find "rapida/clients/protos/" \
  -type f \( -name "*.py" -o -name "*.pyi" \) \
  -exec sed -i.bak -E \
    '/^import [a-zA-Z0-9_]+_pb2/ s|import ([a-zA-Z0-9_]+_pb2)|import rapida.clients.protos.\1|' {} +

# Remove backup files
find "rapida/clients/protos/" -name "*.bak" -delete
