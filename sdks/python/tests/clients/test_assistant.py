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
Tests for assistant client functions.
These tests use mocking to verify the function behavior without
requiring actual gRPC connections or protobuf dependencies.
"""

import pytest
import sys
import os
import importlib.util
from unittest.mock import Mock, MagicMock, patch


# Mock all the protobuf modules before importing
sys.modules['rapida.clients.protos.assistant_knowledge_pb2'] = MagicMock()
sys.modules['rapida.clients.protos.common_pb2'] = MagicMock()
sys.modules['rapida.clients.protos.assistant_webhook_pb2'] = MagicMock()
sys.modules['rapida.clients.protos.assistant_analysis_pb2'] = MagicMock()
sys.modules['rapida.clients.protos.assistant_tool_pb2'] = MagicMock()
sys.modules['rapida.clients.protos.assistant_api_pb2'] = MagicMock()
sys.modules['rapida.connections'] = MagicMock()

# Load the assistant module directly
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'clients', 'assistant.py')
spec = importlib.util.spec_from_file_location('assistant', module_path)
assistant_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(assistant_module)


@pytest.fixture
def mock_connection_config():
    """Create a mock ConnectionConfig."""
    config = Mock()
    config.auth = [("x-api-key", "test-key")]
    config.assistant_client = Mock()
    return config


@pytest.fixture
def mock_auth():
    """Create mock auth metadata."""
    return [("authorization", "Bearer test-token")]


class TestGetAssistant:
    """Test cases for get_assistant function."""

    def test_get_assistant_with_default_auth(self, mock_connection_config):
        """Test get_assistant uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistant.return_value = expected_response

        result = assistant_module.get_assistant(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAssistant.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_get_assistant_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test get_assistant uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistant.return_value = expected_response

        result = assistant_module.get_assistant(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.assistant_client.GetAssistant.assert_called_once_with(
            request, metadata=mock_auth
        )
        assert result == expected_response


class TestGetAllAssistant:
    """Test cases for get_all_assistant function."""

    def test_get_all_assistant_with_default_auth(self, mock_connection_config):
        """Test get_all_assistant uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistant.return_value = expected_response

        result = assistant_module.get_all_assistant(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAllAssistant.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response

    def test_get_all_assistant_with_custom_auth(self, mock_connection_config, mock_auth):
        """Test get_all_assistant uses custom auth when provided."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistant.return_value = expected_response

        result = assistant_module.get_all_assistant(mock_connection_config, request, auth=mock_auth)

        mock_connection_config.assistant_client.GetAllAssistant.assert_called_once_with(
            request, metadata=mock_auth
        )


class TestGetAssistantConversation:
    """Test cases for get_assistant_conversation function."""

    def test_get_assistant_conversation_with_default_auth(self, mock_connection_config):
        """Test get_assistant_conversation uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistantConversation.return_value = expected_response

        result = assistant_module.get_assistant_conversation(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAssistantConversation.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAllAssistantConversation:
    """Test cases for get_all_assistant_conversation function."""

    def test_get_all_assistant_conversation_with_default_auth(self, mock_connection_config):
        """Test get_all_assistant_conversation uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistantConversation.return_value = expected_response

        result = assistant_module.get_all_assistant_conversation(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAllAssistantConversation.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAssistantWebhook:
    """Test cases for get_assistant_webhook function."""

    def test_get_assistant_webhook_with_default_auth(self, mock_connection_config):
        """Test get_assistant_webhook uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistantWebhook.return_value = expected_response

        result = assistant_module.get_assistant_webhook(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAssistantWebhook.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAllAssistantWebhook:
    """Test cases for get_all_assistant_webhook function."""

    def test_get_all_assistant_webhook_with_default_auth(self, mock_connection_config):
        """Test get_all_assistant_webhook uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistantWebhook.return_value = expected_response

        result = assistant_module.get_all_assistant_webhook(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAllAssistantWebhook.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAssistantKnowledge:
    """Test cases for get_assistant_knowledge function."""

    def test_get_assistant_knowledge_with_default_auth(self, mock_connection_config):
        """Test get_assistant_knowledge uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistantKnowledge.return_value = expected_response

        result = assistant_module.get_assistant_knowledge(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAssistantKnowledge.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAllAssistantKnowledge:
    """Test cases for get_all_assistant_knowledge function."""

    def test_get_all_assistant_knowledge_with_default_auth(self, mock_connection_config):
        """Test get_all_assistant_knowledge uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistantKnowledge.return_value = expected_response

        result = assistant_module.get_all_assistant_knowledge(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAllAssistantKnowledge.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAssistantTool:
    """Test cases for get_assistant_tool function."""

    def test_get_assistant_tool_with_default_auth(self, mock_connection_config):
        """Test get_assistant_tool uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistantTool.return_value = expected_response

        result = assistant_module.get_assistant_tool(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAssistantTool.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAllAssistantTool:
    """Test cases for get_all_assistant_tool function."""

    def test_get_all_assistant_tool_with_default_auth(self, mock_connection_config):
        """Test get_all_assistant_tool uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistantTool.return_value = expected_response

        result = assistant_module.get_all_assistant_tool(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAllAssistantTool.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAssistantAnalysis:
    """Test cases for get_assistant_analysis function."""

    def test_get_assistant_analysis_with_default_auth(self, mock_connection_config):
        """Test get_assistant_analysis uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAssistantAnalysis.return_value = expected_response

        result = assistant_module.get_assistant_analysis(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAssistantAnalysis.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response


class TestGetAllAssistantAnalysis:
    """Test cases for get_all_assistant_analysis function."""

    def test_get_all_assistant_analysis_with_default_auth(self, mock_connection_config):
        """Test get_all_assistant_analysis uses default auth from config."""
        request = Mock()
        expected_response = Mock()
        mock_connection_config.assistant_client.GetAllAssistantAnalysis.return_value = expected_response

        result = assistant_module.get_all_assistant_analysis(mock_connection_config, request)

        mock_connection_config.assistant_client.GetAllAssistantAnalysis.assert_called_once_with(
            request, metadata=mock_connection_config.auth
        )
        assert result == expected_response
