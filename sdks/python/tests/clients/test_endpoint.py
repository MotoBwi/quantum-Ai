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
Tests for endpoint client functions.
These tests use mocking to verify the function behavior without
requiring actual gRPC connections or protobuf dependencies.
"""

import pytest
import sys
import os
import importlib.util
from unittest.mock import Mock, MagicMock


# Mock all the protobuf modules before importing
sys.modules['rapida.clients.protos.endpoint_api_pb2'] = MagicMock()
sys.modules['rapida.connections'] = MagicMock()

# Load the endpoint module directly
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'clients', 'endpoint.py')
spec = importlib.util.spec_from_file_location('endpoint', module_path)
endpoint_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(endpoint_module)


@pytest.fixture
def mock_connection_config():
    """Create a mock ConnectionConfig."""
    config = Mock()
    config.auth = [("x-api-key", "test-key")]
    config.endpoint_client = Mock()
    return config


@pytest.fixture
def mock_auth():
    """Create mock auth metadata."""
    return [("authorization", "Bearer test-token")]


class TestGetEndpoint:
    """Test cases for get_endpoint function."""

    def test_get_endpoint_with_default_auth(self, mock_connection_config):
        """Test get_endpoint uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetEndpoint.return_value = expected_response

        result = endpoint_module.get_endpoint(mock_connection_config, request)

        mock_connection_config.endpoint_client.GetEndpoint.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_get_endpoint_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test get_endpoint uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetEndpoint.return_value = expected_response

        result = endpoint_module.get_endpoint(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.endpoint_client.GetEndpoint.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response

    def test_get_endpoint_with_none_auth(self, mock_connection_config):
        """Test get_endpoint with explicitly None auth uses config auth."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetEndpoint.return_value = expected_response

        result = endpoint_module.get_endpoint(mock_connection_config, request, auth=None)

        mock_connection_config.endpoint_client.GetEndpoint.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )


class TestGetAllEndpoint:
    """Test cases for get_all_endpoint function."""

    def test_get_all_endpoint_with_default_auth(self, mock_connection_config):
        """Test get_all_endpoint uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetAllEndpoint.return_value = expected_response

        result = endpoint_module.get_all_endpoint(mock_connection_config, request)

        mock_connection_config.endpoint_client.GetAllEndpoint.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_get_all_endpoint_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test get_all_endpoint uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetAllEndpoint.return_value = expected_response

        result = endpoint_module.get_all_endpoint(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.endpoint_client.GetAllEndpoint.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response


class TestGetEndpointLog:
    """Test cases for get_endpoint_log function."""

    def test_get_endpoint_log_with_default_auth(self, mock_connection_config):
        """Test get_endpoint_log uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetEndpointLog.return_value = expected_response

        result = endpoint_module.get_endpoint_log(mock_connection_config, request)

        mock_connection_config.endpoint_client.GetEndpointLog.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_get_endpoint_log_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test get_endpoint_log uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetEndpointLog.return_value = expected_response

        result = endpoint_module.get_endpoint_log(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.endpoint_client.GetEndpointLog.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response


class TestGetAllEndpointLog:
    """Test cases for get_all_endpoint_log function."""

    def test_get_all_endpoint_log_with_default_auth(self, mock_connection_config):
        """Test get_all_endpoint_log uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetAllEndpointLog.return_value = expected_response

        result = endpoint_module.get_all_endpoint_log(mock_connection_config, request)

        mock_connection_config.endpoint_client.GetAllEndpointLog.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_get_all_endpoint_log_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test get_all_endpoint_log uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.endpoint_client.GetAllEndpointLog.return_value = expected_response

        result = endpoint_module.get_all_endpoint_log(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.endpoint_client.GetAllEndpointLog.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response
