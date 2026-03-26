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
Tests for call client functions.
These tests use mocking to verify the function behavior without
requiring actual gRPC connections or protobuf dependencies.
"""

import pytest
import sys
import os
import importlib.util
from unittest.mock import Mock, MagicMock


# Mock all the protobuf modules before importing
sys.modules['rapida.clients.protos.talk_api_pb2'] = MagicMock()
sys.modules['rapida.connections'] = MagicMock()

# Load the call module directly
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'clients', 'call.py')
spec = importlib.util.spec_from_file_location('call', module_path)
call_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(call_module)


@pytest.fixture
def mock_connection_config():
    """Create a mock ConnectionConfig."""
    config = Mock()
    config.auth = [("x-api-key", "test-key")]
    config.conversation_client = Mock()
    return config


@pytest.fixture
def mock_auth():
    """Create mock auth metadata."""
    return [("authorization", "Bearer test-token")]


class TestCreatePhoneCall:
    """Test cases for create_phone_call function."""

    def test_create_phone_call_with_default_auth(self, mock_connection_config):
        """Test create_phone_call uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.conversation_client.CreatePhoneCall.return_value = expected_response

        result = call_module.create_phone_call(mock_connection_config, request)

        mock_connection_config.conversation_client.CreatePhoneCall.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_create_phone_call_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test create_phone_call uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.conversation_client.CreatePhoneCall.return_value = expected_response

        result = call_module.create_phone_call(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.conversation_client.CreatePhoneCall.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response

    def test_create_phone_call_with_none_auth(self, mock_connection_config):
        """Test create_phone_call with explicitly None auth uses config auth."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.conversation_client.CreatePhoneCall.return_value = expected_response

        result = call_module.create_phone_call(mock_connection_config, request, auth=None)

        mock_connection_config.conversation_client.CreatePhoneCall.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )


class TestCreateBulkPhoneCall:
    """Test cases for create_bulk_phone_call function."""

    def test_create_bulk_phone_call_with_default_auth(self, mock_connection_config):
        """Test create_bulk_phone_call uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.conversation_client.CreateBulkPhoneCall.return_value = expected_response

        result = call_module.create_bulk_phone_call(mock_connection_config, request)

        mock_connection_config.conversation_client.CreateBulkPhoneCall.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_create_bulk_phone_call_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test create_bulk_phone_call uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.conversation_client.CreateBulkPhoneCall.return_value = expected_response

        result = call_module.create_bulk_phone_call(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.conversation_client.CreateBulkPhoneCall.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response

    def test_create_bulk_phone_call_with_none_auth(self, mock_connection_config):
        """Test create_bulk_phone_call with explicitly None auth uses config auth."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.conversation_client.CreateBulkPhoneCall.return_value = expected_response

        result = call_module.create_bulk_phone_call(mock_connection_config, request, auth=None)

        mock_connection_config.conversation_client.CreateBulkPhoneCall.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
