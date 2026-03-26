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

import pytest
import logging
import sys
import os
import importlib.util
from unittest.mock import MagicMock
import types

# Create a mock common_pb2.Source enum before importing rapida_source
class MockSource:
    WEB_PLUGIN = 1
    DEBUGGER = 2
    SDK = 3
    PHONE_CALL = 4
    WHATSAPP = 5

mock_common_pb2 = MagicMock()
mock_common_pb2.Source = MockSource

# Create mock package structure to prevent imports from going through rapida/__init__.py
mock_rapida = types.ModuleType('rapida')
mock_rapida.clients = types.ModuleType('rapida.clients')
mock_rapida.clients.protos = types.ModuleType('rapida.clients.protos')
mock_rapida.clients.protos.common_pb2 = mock_common_pb2

# Install the mocks before loading rapida_source
sys.modules['rapida'] = mock_rapida
sys.modules['rapida.clients'] = mock_rapida.clients
sys.modules['rapida.clients.protos'] = mock_rapida.clients.protos
sys.modules['rapida.clients.protos.common_pb2'] = mock_common_pb2

# Now import rapida_source which depends on common_pb2
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'utils', 'rapida_source.py')
spec = importlib.util.spec_from_file_location('rapida_source', module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

RapidaSource = module.RapidaSource
common_pb2 = mock_common_pb2


class TestRapidaSource:
    """Test cases for RapidaSource enum."""

    def test_web_plugin_value(self):
        """Test WEB_PLUGIN enum value."""
        assert RapidaSource.WEB_PLUGIN.value == "web-plugin"

    def test_debugger_value(self):
        """Test DEBUGGER enum value."""
        assert RapidaSource.DEBUGGER.value == "debugger"

    def test_sdk_value(self):
        """Test SDK enum value."""
        assert RapidaSource.SDK.value == "sdk"

    def test_phone_call_value(self):
        """Test PHONE_CALL enum value."""
        assert RapidaSource.PHONE_CALL.value == "phone-call"

    def test_whatsapp_value(self):
        """Test WHATSAPP enum value."""
        assert RapidaSource.WHATSAPP.value == "whatsapp"

    def test_get_web_plugin(self):
        """Test get() method for WEB_PLUGIN."""
        assert RapidaSource.WEB_PLUGIN.get() == "web-plugin"

    def test_get_debugger(self):
        """Test get() method for DEBUGGER."""
        assert RapidaSource.DEBUGGER.get() == "debugger"

    def test_get_sdk(self):
        """Test get() method for SDK."""
        assert RapidaSource.SDK.get() == "sdk"

    def test_get_phone_call(self):
        """Test get() method for PHONE_CALL."""
        assert RapidaSource.PHONE_CALL.get() == "phone-call"

    def test_get_whatsapp(self):
        """Test get() method for WHATSAPP."""
        assert RapidaSource.WHATSAPP.get() == "whatsapp"

    def test_source_web_plugin(self):
        """Test source() method for WEB_PLUGIN."""
        assert RapidaSource.WEB_PLUGIN.source() == common_pb2.Source.WEB_PLUGIN

    def test_source_debugger(self):
        """Test source() method for DEBUGGER."""
        assert RapidaSource.DEBUGGER.source() == common_pb2.Source.DEBUGGER

    def test_source_sdk(self):
        """Test source() method for SDK."""
        assert RapidaSource.SDK.source() == common_pb2.Source.SDK

    def test_source_phone_call(self):
        """Test source() method for PHONE_CALL."""
        assert RapidaSource.PHONE_CALL.source() == common_pb2.Source.PHONE_CALL

    def test_source_whatsapp(self):
        """Test source() method for WHATSAPP."""
        assert RapidaSource.WHATSAPP.source() == common_pb2.Source.WHATSAPP

    def test_from_str_web_plugin(self):
        """Test from_str() for web-plugin string."""
        result = RapidaSource.from_str("web-plugin")
        assert result == RapidaSource.WEB_PLUGIN

    def test_from_str_debugger(self):
        """Test from_str() for debugger string."""
        result = RapidaSource.from_str("debugger")
        assert result == RapidaSource.DEBUGGER

    def test_from_str_sdk(self):
        """Test from_str() for sdk string."""
        result = RapidaSource.from_str("sdk")
        assert result == RapidaSource.SDK

    def test_from_str_phone_call(self):
        """Test from_str() for phone-call string."""
        result = RapidaSource.from_str("phone-call")
        assert result == RapidaSource.PHONE_CALL

    def test_from_str_whatsapp(self):
        """Test from_str() for whatsapp string."""
        result = RapidaSource.from_str("whatsapp")
        assert result == RapidaSource.WHATSAPP

    def test_from_str_case_insensitive(self):
        """Test from_str() is case insensitive."""
        assert RapidaSource.from_str("SDK") == RapidaSource.SDK
        assert RapidaSource.from_str("Web-Plugin") == RapidaSource.WEB_PLUGIN
        assert RapidaSource.from_str("DEBUGGER") == RapidaSource.DEBUGGER

    def test_from_str_invalid_returns_web_plugin_with_warning(self, caplog):
        """Test from_str() with invalid string returns WEB_PLUGIN with warning."""
        with caplog.at_level(logging.WARNING):
            result = RapidaSource.from_str("invalid")
            assert result == RapidaSource.WEB_PLUGIN
            assert "not supported" in caplog.text

    def test_enum_members_count(self):
        """Test that there are exactly 6 source types (including MAPPING)."""
        # Note: MAPPING is also an enum member in this implementation
        members = [m for m in RapidaSource if not m.name.startswith('MAPPING')]
        assert len(members) == 5

    def test_enum_is_iterable(self):
        """Test that RapidaSource is iterable."""
        sources = list(RapidaSource)
        assert RapidaSource.WEB_PLUGIN in sources
        assert RapidaSource.DEBUGGER in sources
        assert RapidaSource.SDK in sources
        assert RapidaSource.PHONE_CALL in sources
        assert RapidaSource.WHATSAPP in sources
