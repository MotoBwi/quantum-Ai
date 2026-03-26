#  Copyright (c) 2024. Rapida
#
#  Permission is hereby granted, free of charge, to any person obtaining a copy
#  of this software and associated documentation files (the "Software"), to deal
#  in the Software without restriction, including without limitation the rights
#  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
#  copies of the Software, and to permit persons to whom the Software is
#  furnished to do so, subject to the following conditions:
#
#  The above copyright notice and this permission notice shall be included in
#  all copies or substantial portions of the Software.
#
#  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
#  THE SOFTWARE.

"""
Pytest configuration and shared fixtures for Rapida tests.
"""

import sys
import os
from unittest.mock import Mock, MagicMock
from types import ModuleType

import pytest

# Add the rapida module path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

# Import the actual protos package first to ensure it's registered as a package
import rapida.clients.protos

# Explicitly register rapida.agentkit as a subpackage attribute so that
# patch("rapida.agentkit.X") works reliably across Python 3.9–3.11,
# even if rapida/__init__.py fails partway through (e.g. due to a missing
# proto module) before it reaches its own 'from rapida.agentkit import ...'
import rapida.agentkit  # noqa: E402

# Mock missing protobuf modules before any rapida imports
# These mocks need to be set up before the modules are imported
# Use ModuleType-based mocks to avoid breaking the package structure
_mock_marketplace_grpc = MagicMock(spec=ModuleType)
_mock_marketplace_pb2 = MagicMock(spec=ModuleType)
_mock_provider_grpc = MagicMock(spec=ModuleType)
_mock_provider_pb2 = MagicMock(spec=ModuleType)

sys.modules["rapida.clients.protos.marketplace_api_pb2_grpc"] = _mock_marketplace_grpc
sys.modules["rapida.clients.protos.marketplace_api_pb2"] = _mock_marketplace_pb2
sys.modules["rapida.clients.protos.provider_api_pb2_grpc"] = _mock_provider_grpc
sys.modules["rapida.clients.protos.provider_api_pb2"] = _mock_provider_pb2


@pytest.fixture
def sample_api_key():
    """Provide a sample API key for testing."""
    return "test-api-key-12345"


@pytest.fixture
def sample_user_id():
    """Provide a sample user ID for testing."""
    return "user-id-67890"


@pytest.fixture
def sample_project_id():
    """Provide a sample project ID for testing."""
    return "project-id-abcde"


@pytest.fixture
def sample_authorization_token():
    """Provide a sample authorization token for testing."""
    return "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.test"


@pytest.fixture
def mock_grpc_channel():
    """Create a mock gRPC channel."""
    return Mock()


@pytest.fixture
def mock_grpc_stub():
    """Create a mock gRPC stub."""
    stub = Mock()
    return stub
