# Copyright (c) 2024. Rapida
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

"""
Comprehensive test suite for rapida/agentkit/__init__.py

Covers:
  - AgentKitAgent: all response builders and request helpers
  - Talk() conversation flow (initialization -> configuration -> message)
  - SSLConfig: field storage and load_credentials()
  - AuthConfig: defaults and custom values
  - AuthorizationInterceptor: allow / deny / custom validator / custom header
  - AgentKitServer: lifecycle, SSL, auth integration
"""

from unittest.mock import MagicMock, Mock, patch, mock_open

import pytest
import rapida.agentkit  # ensure the subpackage is registered as a rapida attribute

from rapida.agentkit import (
    AgentKitAgent,
    AgentKitServer,
    AuthConfig,
    AuthorizationInterceptor,
    SSLConfig,
)
from rapida.clients.protos.agentkit_pb2 import TalkInput, TalkOutput
from rapida.clients.protos.common_pb2 import AssistantDefinition
from rapida.clients.protos.talk_api_pb2 import (
    ConversationConfiguration,
    ConversationDirective,
    ConversationInitialization,
    ConversationUserMessage,
    StreamMode,
)
from rapida.utils.rapida_value import any_to_string


# ============================================================================
# TEST FIXTURES & HELPERS
# ============================================================================


class _EchoAgent(AgentKitAgent):
    """Concrete AgentKitAgent subclass for Talk() integration tests.

    On initialization: sends initialization_response.
    On configuration: sends configuration_response.
    On text message: echoes the text back as a streaming delta + final chunk.
    """

    def Talk(self, request_iterator, context):
        for request in request_iterator:
            if self.is_initialization_request(request):
                yield self.initialization_response(request.initialization)
            elif self.is_configuration_request(request):
                yield self.configuration_response(request.configuration)
            elif self.is_text_message(request):
                msg_id = self.get_message_id(request)
                text = self.get_user_text(request)
                yield self.assistant_response(msg_id, text, completed=False)
                yield self.assistant_response(msg_id, text + "!", completed=True)


def make_initialization(conv_id: int = 42, assistant_id: int = 7) -> ConversationInitialization:
    """Build a ConversationInitialization with the given IDs."""
    return ConversationInitialization(
        assistantConversationId=conv_id,
        assistant=AssistantDefinition(assistantId=assistant_id, version="v1"),
    )


def make_configuration() -> ConversationConfiguration:
    """Build a minimal ConversationConfiguration."""
    return ConversationConfiguration(streamMode=StreamMode.STREAM_MODE_TEXT)


def talkinput_init(conv_id: int = 42, assistant_id: int = 7) -> TalkInput:
    """Build a TalkInput carrying a ConversationInitialization."""
    return TalkInput(initialization=make_initialization(conv_id, assistant_id))


def talkinput_config() -> TalkInput:
    """Build a TalkInput carrying a ConversationConfiguration."""
    return TalkInput(configuration=make_configuration())


def talkinput_text(msg_id: str = "msg-1", text: str = "hello") -> TalkInput:
    """Build a TalkInput carrying a text ConversationUserMessage."""
    return TalkInput(
        message=ConversationUserMessage(id=msg_id, text=text, completed=True)
    )


def talkinput_audio(msg_id: str = "msg-a") -> TalkInput:
    """Build a TalkInput carrying an audio ConversationUserMessage."""
    return TalkInput(
        message=ConversationUserMessage(id=msg_id, audio=b"\x00\x01\x02", completed=False)
    )


# ============================================================================
# AgentKitAgent — Response Builders
# ============================================================================


class TestAgentKitAgentResponseBuilders:
    """Tests for the TalkOutput response builder methods on AgentKitAgent."""

    def setup_method(self):
        self.agent = AgentKitAgent()

    # --- response() ---

    def test_response_default_code_is_200(self):
        out = self.agent.response()
        assert out.code == 200

    def test_response_default_success_is_true(self):
        out = self.agent.response()
        assert out.success is True

    def test_response_default_has_no_data_field(self):
        out = self.agent.response()
        assert out.WhichOneof("data") is None

    def test_response_custom_code_failure(self):
        out = self.agent.response(code=503, success=False)
        assert out.code == 503
        assert out.success is False

    def test_response_returns_talk_output_type(self):
        out = self.agent.response()
        assert isinstance(out, TalkOutput)

    # --- initialization_response() ---

    def test_initialization_response_sets_initialization_data_field(self):
        out = self.agent.initialization_response(make_initialization())
        assert out.WhichOneof("data") == "initialization"

    def test_initialization_response_preserves_conversation_id(self):
        out = self.agent.initialization_response(make_initialization(conv_id=1234))
        assert out.initialization.assistantConversationId == 1234

    def test_initialization_response_preserves_assistant_id(self):
        out = self.agent.initialization_response(make_initialization(assistant_id=99))
        assert out.initialization.assistant.assistantId == 99

    def test_initialization_response_default_code_200(self):
        out = self.agent.initialization_response(make_initialization())
        assert out.code == 200
        assert out.success is True

    # --- configuration_response() ---

    def test_configuration_response_returns_200(self):
        out = self.agent.configuration_response()
        assert out.code == 200
        assert out.success is True

    def test_configuration_response_has_no_data_field(self):
        """TalkOutput has no configuration field; ack carries no data payload."""
        out = self.agent.configuration_response(make_configuration())
        assert out.WhichOneof("data") is None

    def test_configuration_response_no_arg_also_has_no_data(self):
        out = self.agent.configuration_response()
        assert out.WhichOneof("data") is None

    # --- assistant_response() ---

    def test_assistant_response_sets_assistant_data_field(self):
        out = self.agent.assistant_response("m-1", "Hello")
        assert out.WhichOneof("data") == "assistant"

    def test_assistant_response_streaming_chunk_not_completed(self):
        out = self.agent.assistant_response("m-1", "Hello ", completed=False)
        assert out.assistant.id == "m-1"
        assert out.assistant.text == "Hello "
        assert out.assistant.completed is False

    def test_assistant_response_final_chunk_completed(self):
        out = self.agent.assistant_response("m-2", "world!", completed=True)
        assert out.assistant.text == "world!"
        assert out.assistant.completed is True

    def test_assistant_response_default_completed_is_false(self):
        out = self.agent.assistant_response("m-3", "partial text")
        assert out.assistant.completed is False

    def test_assistant_response_empty_content(self):
        out = self.agent.assistant_response("m-4", "")
        assert out.assistant.text == ""
        assert out.WhichOneof("data") == "assistant"

    # --- error_response() ---

    def test_error_response_sets_error_data_field(self):
        out = self.agent.error_response(500, "Internal error")
        assert out.WhichOneof("data") == "error"

    def test_error_response_code_and_message(self):
        out = self.agent.error_response(500, "Internal error")
        assert out.code == 500
        assert out.error.errorCode == 500
        assert out.error.errorMessage == "Internal error"

    def test_error_response_marks_success_false(self):
        out = self.agent.error_response(404, "Not found")
        assert out.success is False

    def test_error_response_custom_code(self):
        out = self.agent.error_response(422, "Unprocessable entity")
        assert out.error.errorCode == 422

    # --- tool_call() ---

    def test_tool_call_sets_tool_data_field(self):
        out = self.agent.tool_call("m", "t-1", "search", {"q": "rapida"})
        assert out.WhichOneof("data") == "tool"

    def test_tool_call_stores_ids_and_name(self):
        out = self.agent.tool_call("msg-5", "t-1", "web_search", {"query": "rapida"})
        tc = out.tool
        assert tc.id == "msg-5"
        assert tc.toolId == "t-1"
        assert tc.name == "web_search"

    def test_tool_call_args_packed_as_any(self):
        out = self.agent.tool_call("m", "t", "fn", {"query": "hello world"})
        assert "query" in out.tool.args
        assert any_to_string(out.tool.args["query"]) == "hello world"

    def test_tool_call_multiple_args(self):
        out = self.agent.tool_call("m", "t", "fn", {"a": "1", "b": "two"})
        assert any_to_string(out.tool.args["a"]) == "1"
        assert any_to_string(out.tool.args["b"]) == "two"

    def test_tool_call_empty_args(self):
        out = self.agent.tool_call("m", "t", "fn", {})
        assert len(out.tool.args) == 0

    def test_tool_call_none_args(self):
        out = self.agent.tool_call("m", "t", "fn", None)
        assert len(out.tool.args) == 0

    # --- tool_call_result() ---

    def test_tool_call_result_sets_tool_result_data_field(self):
        out = self.agent.tool_call_result("m", "t", "fn", {"status": "ok"})
        assert out.WhichOneof("data") == "toolResult"

    def test_tool_call_result_dict_result_stored(self):
        out = self.agent.tool_call_result("m", "t", "fn", {"key": "value"}, success=True)
        tr = out.toolResult
        assert tr.success is True
        assert any_to_string(tr.args["key"]) == "value"

    def test_tool_call_result_string_stored_under_result_key(self):
        out = self.agent.tool_call_result("m", "t", "fn", "done")
        assert any_to_string(out.toolResult.args["result"]) == "done"

    def test_tool_call_result_none_produces_empty_args(self):
        out = self.agent.tool_call_result("m", "t", "fn", None)
        assert len(out.toolResult.args) == 0

    def test_tool_call_result_failure_flag(self):
        out = self.agent.tool_call_result("m", "t", "fn", "err", success=False)
        assert out.toolResult.success is False

    def test_tool_call_result_stores_ids_and_name(self):
        out = self.agent.tool_call_result("msg-x", "tid-y", "lookup", {"r": "v"})
        tr = out.toolResult
        assert tr.id == "msg-x"
        assert tr.toolId == "tid-y"
        assert tr.name == "lookup"

    # --- transfer_call() ---

    def test_transfer_call_sets_directive_data_field(self):
        out = self.agent.transfer_call("m", {"to": "+1"})
        assert out.WhichOneof("data") == "directive"

    def test_transfer_call_directive_type_is_transfer(self):
        out = self.agent.transfer_call("m", {"to": "+1234567890"})
        assert out.directive.type == ConversationDirective.TRANSFER_CONVERSATION

    def test_transfer_call_args_packed_as_any(self):
        out = self.agent.transfer_call("m", {"to": "+1999000"})
        assert any_to_string(out.directive.args["to"]) == "+1999000"

    def test_transfer_call_empty_args(self):
        out = self.agent.transfer_call("m", {})
        assert out.directive.type == ConversationDirective.TRANSFER_CONVERSATION
        assert len(out.directive.args) == 0

    # --- terminate_call() ---

    def test_terminate_call_sets_directive_data_field(self):
        out = self.agent.terminate_call("m", {})
        assert out.WhichOneof("data") == "directive"

    def test_terminate_call_directive_type_is_end_conversation(self):
        out = self.agent.terminate_call("m", {"reason": "done"})
        assert out.directive.type == ConversationDirective.END_CONVERSATION

    def test_terminate_call_args_packed_as_any(self):
        out = self.agent.terminate_call("m", {"reason": "user request"})
        assert any_to_string(out.directive.args["reason"]) == "user request"

    def test_terminate_call_empty_args(self):
        out = self.agent.terminate_call("m", {})
        assert len(out.directive.args) == 0

    def test_transfer_and_terminate_use_different_directive_types(self):
        transfer = self.agent.transfer_call("m", {})
        terminate = self.agent.terminate_call("m", {})
        assert transfer.directive.type != terminate.directive.type


# ============================================================================
# AgentKitAgent — Request Helpers
# ============================================================================


class TestAgentKitAgentRequestHelpers:
    """Tests for the request inspection helper methods on AgentKitAgent."""

    def setup_method(self):
        self.agent = AgentKitAgent()

    # --- is_initialization_request() ---

    def test_is_initialization_request_true_for_init(self):
        assert self.agent.is_initialization_request(talkinput_init()) is True

    def test_is_initialization_request_false_for_message(self):
        assert self.agent.is_initialization_request(talkinput_text()) is False

    def test_is_initialization_request_false_for_config(self):
        assert self.agent.is_initialization_request(talkinput_config()) is False

    # --- is_configuration_request() ---

    def test_is_configuration_request_true_for_config(self):
        assert self.agent.is_configuration_request(talkinput_config()) is True

    def test_is_configuration_request_false_for_init(self):
        assert self.agent.is_configuration_request(talkinput_init()) is False

    def test_is_configuration_request_false_for_message(self):
        assert self.agent.is_configuration_request(talkinput_text()) is False

    # --- is_message_request() ---

    def test_is_message_request_true_for_text(self):
        assert self.agent.is_message_request(talkinput_text()) is True

    def test_is_message_request_true_for_audio(self):
        assert self.agent.is_message_request(talkinput_audio()) is True

    def test_is_message_request_false_for_init(self):
        assert self.agent.is_message_request(talkinput_init()) is False

    # --- is_text_message() ---

    def test_is_text_message_true_for_text(self):
        assert self.agent.is_text_message(talkinput_text()) is True

    def test_is_text_message_false_for_audio(self):
        assert self.agent.is_text_message(talkinput_audio()) is False

    def test_is_text_message_false_for_init(self):
        assert self.agent.is_text_message(talkinput_init()) is False

    def test_is_text_message_false_for_config(self):
        assert self.agent.is_text_message(talkinput_config()) is False

    # --- is_audio_message() ---

    def test_is_audio_message_true_for_audio(self):
        assert self.agent.is_audio_message(talkinput_audio()) is True

    def test_is_audio_message_false_for_text(self):
        assert self.agent.is_audio_message(talkinput_text()) is False

    def test_is_audio_message_false_for_init(self):
        assert self.agent.is_audio_message(talkinput_init()) is False

    # --- get_user_text() ---

    def test_get_user_text_returns_text_content(self):
        assert self.agent.get_user_text(talkinput_text(text="hello world")) == "hello world"

    def test_get_user_text_none_for_audio_message(self):
        assert self.agent.get_user_text(talkinput_audio()) is None

    def test_get_user_text_none_for_init(self):
        assert self.agent.get_user_text(talkinput_init()) is None

    def test_get_user_text_none_for_config(self):
        assert self.agent.get_user_text(talkinput_config()) is None

    def test_get_user_text_empty_string(self):
        req = talkinput_text(text="")
        # Empty string is still a valid text field being set
        result = self.agent.get_user_text(req)
        # Empty string in proto3 is the default — HasField won't be True for scalar fields
        # but ConversationUserMessage.text is part of a oneof "message", so HasField works
        assert result == "" or result is None  # proto3 empty string edge case

    # --- get_message_id() ---

    def test_get_message_id_returns_id_for_text(self):
        assert self.agent.get_message_id(talkinput_text(msg_id="test-123")) == "test-123"

    def test_get_message_id_returns_id_for_audio(self):
        assert self.agent.get_message_id(talkinput_audio(msg_id="aud-1")) == "aud-1"

    def test_get_message_id_none_for_init(self):
        assert self.agent.get_message_id(talkinput_init()) is None

    def test_get_message_id_none_for_config(self):
        assert self.agent.get_message_id(talkinput_config()) is None

    # --- get_conversation_id() ---

    def test_get_conversation_id_returns_id(self):
        assert self.agent.get_conversation_id(talkinput_init(conv_id=9999)) == 9999

    def test_get_conversation_id_zero_id(self):
        req = talkinput_init(conv_id=0)
        # 0 is valid for uint64 — returns 0, not None
        result = self.agent.get_conversation_id(req)
        assert result == 0

    def test_get_conversation_id_none_for_message(self):
        assert self.agent.get_conversation_id(talkinput_text()) is None

    def test_get_conversation_id_none_for_config(self):
        assert self.agent.get_conversation_id(talkinput_config()) is None

    # --- get_assistant_id() ---

    def test_get_assistant_id_returns_id(self):
        assert self.agent.get_assistant_id(talkinput_init(assistant_id=777)) == 777

    def test_get_assistant_id_none_for_message(self):
        assert self.agent.get_assistant_id(talkinput_text()) is None

    def test_get_assistant_id_none_for_config(self):
        assert self.agent.get_assistant_id(talkinput_config()) is None

    def test_get_assistant_id_none_when_no_assistant_sub_message(self):
        # Initialization without an assistant sub-message set
        req = TalkInput(
            initialization=ConversationInitialization(assistantConversationId=1)
        )
        assert self.agent.get_assistant_id(req) is None


# ============================================================================
# Talk() Conversation Flow Integration
# ============================================================================


class TestAgentKitAgentTalkFlow:
    """End-to-end iteration tests for a full Talk() streaming conversation."""

    def setup_method(self):
        self.agent = _EchoAgent()
        self.context = Mock()

    def _run(self, requests: list) -> list:
        return list(self.agent.Talk(iter(requests), self.context))

    def test_initialization_produces_one_ack(self):
        responses = self._run([talkinput_init(conv_id=10)])
        assert len(responses) == 1

    def test_initialization_ack_has_initialization_data_field(self):
        responses = self._run([talkinput_init(conv_id=10)])
        assert responses[0].WhichOneof("data") == "initialization"

    def test_initialization_ack_preserves_conversation_id(self):
        responses = self._run([talkinput_init(conv_id=10)])
        assert responses[0].initialization.assistantConversationId == 10

    def test_initialization_must_come_before_messages(self):
        # Full canonical flow: init -> config -> message -> responses
        responses = self._run([
            talkinput_init(conv_id=5),
            talkinput_config(),
            talkinput_text(msg_id="u-1", text="hi"),
        ])
        assert responses[0].WhichOneof("data") == "initialization"

    def test_configuration_ack_has_no_data_field(self):
        responses = self._run([talkinput_init(), talkinput_config()])
        config_ack = responses[1]
        assert config_ack.WhichOneof("data") is None
        assert config_ack.code == 200

    def test_text_message_produces_delta_and_final(self):
        responses = self._run([
            talkinput_init(),
            talkinput_text(msg_id="m-1", text="ping"),
        ])
        # [0] init ack, [1] delta, [2] final
        assert len(responses) == 3
        delta = responses[1]
        final = responses[2]
        assert delta.WhichOneof("data") == "assistant"
        assert delta.assistant.text == "ping"
        assert delta.assistant.completed is False
        assert final.assistant.text == "ping!"
        assert final.assistant.completed is True

    def test_full_flow_response_count(self):
        responses = self._run([
            talkinput_init(),
            talkinput_config(),
            talkinput_text(msg_id="u-1", text="hello"),
        ])
        # init ack + config ack + delta + final = 4
        assert len(responses) == 4

    def test_full_flow_correct_order(self):
        responses = self._run([
            talkinput_init(conv_id=5),
            talkinput_config(),
            talkinput_text(msg_id="u-1", text="hi"),
        ])
        assert responses[0].WhichOneof("data") == "initialization"
        assert responses[1].WhichOneof("data") is None     # config ack
        assert responses[2].assistant.completed is False    # streaming delta
        assert responses[3].assistant.completed is True     # final

    def test_multiple_messages_in_one_session(self):
        responses = self._run([
            talkinput_init(),
            talkinput_text(msg_id="u-1", text="first"),
            talkinput_text(msg_id="u-2", text="second"),
        ])
        # init ack + (delta + final) * 2 = 5
        assert len(responses) == 5
        assert responses[1].assistant.text == "first"
        assert responses[3].assistant.text == "second"

    def test_terminate_call_yields_end_conversation_directive(self):
        class _TermAgent(AgentKitAgent):
            def Talk(self, req_iter, ctx):
                for req in req_iter:
                    if self.is_initialization_request(req):
                        yield self.initialization_response(req.initialization)
                    elif self.is_text_message(req):
                        yield self.terminate_call(
                            self.get_message_id(req), {"reason": "bye"}
                        )

        agent = _TermAgent()
        responses = list(
            agent.Talk(iter([talkinput_init(), talkinput_text(msg_id="end")]), Mock())
        )
        term = responses[1]
        assert term.directive.type == ConversationDirective.END_CONVERSATION
        assert any_to_string(term.directive.args["reason"]) == "bye"

    def test_transfer_call_yields_transfer_conversation_directive(self):
        class _TransferAgent(AgentKitAgent):
            def Talk(self, req_iter, ctx):
                for req in req_iter:
                    if self.is_initialization_request(req):
                        yield self.initialization_response(req.initialization)
                    elif self.is_text_message(req):
                        yield self.transfer_call(
                            self.get_message_id(req), {"to": "+15550001234"}
                        )

        agent = _TransferAgent()
        responses = list(
            agent.Talk(iter([talkinput_init(), talkinput_text(msg_id="t")]), Mock())
        )
        assert responses[1].directive.type == ConversationDirective.TRANSFER_CONVERSATION
        assert any_to_string(responses[1].directive.args["to"]) == "+15550001234"

    def test_tool_call_and_result_in_same_conversation(self):
        class _ToolAgent(AgentKitAgent):
            def Talk(self, req_iter, ctx):
                for req in req_iter:
                    if self.is_initialization_request(req):
                        yield self.initialization_response(req.initialization)
                    elif self.is_text_message(req):
                        mid = self.get_message_id(req)
                        yield self.tool_call(mid, "t-1", "search", {"q": "test"})
                        yield self.tool_call_result(mid, "t-1", "search", {"hits": "5"})
                        yield self.assistant_response(mid, "Found 5 results", completed=True)

        agent = _ToolAgent()
        responses = list(
            agent.Talk(iter([talkinput_init(), talkinput_text(msg_id="q-1")]), Mock())
        )
        assert responses[0].WhichOneof("data") == "initialization"
        assert responses[1].WhichOneof("data") == "tool"
        assert responses[2].WhichOneof("data") == "toolResult"
        assert responses[3].WhichOneof("data") == "assistant"
        assert responses[3].assistant.completed is True

    def test_error_response_in_talk(self):
        class _ErrorAgent(AgentKitAgent):
            def Talk(self, req_iter, ctx):
                for req in req_iter:
                    if self.is_initialization_request(req):
                        yield self.initialization_response(req.initialization)
                    elif self.is_text_message(req):
                        yield self.error_response(500, "Something went wrong")

        agent = _ErrorAgent()
        responses = list(
            agent.Talk(iter([talkinput_init(), talkinput_text()]), Mock())
        )
        err = responses[1]
        assert err.WhichOneof("data") == "error"
        assert err.success is False
        assert err.error.errorCode == 500


# ============================================================================
# SSLConfig
# ============================================================================


class TestSSLConfig:
    """Tests for SSLConfig dataclass field storage and credential loading."""

    def test_fields_stored_correctly(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key", ca_cert_path="ca.crt")
        assert cfg.cert_path == "c.crt"
        assert cfg.key_path == "k.key"
        assert cfg.ca_cert_path == "ca.crt"

    def test_ca_cert_path_defaults_to_none(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key")
        assert cfg.ca_cert_path is None

    def test_load_credentials_no_ca_calls_ssl_server_credentials(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key")
        with patch("builtins.open", mock_open(read_data=b"DATA")):
            with patch("os.path.exists", return_value=False):
                with patch("grpc.ssl_server_credentials") as mock_creds:
                    cfg.load_credentials()
        mock_creds.assert_called_once()

    def test_load_credentials_no_ca_require_client_auth_false(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key")
        with patch("builtins.open", mock_open(read_data=b"DATA")):
            with patch("os.path.exists", return_value=False):
                with patch("grpc.ssl_server_credentials") as mock_creds:
                    cfg.load_credentials()
        _, kwargs = mock_creds.call_args
        assert kwargs["require_client_auth"] is False

    def test_load_credentials_no_ca_root_certificates_is_none(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key")
        with patch("builtins.open", mock_open(read_data=b"DATA")):
            with patch("os.path.exists", return_value=False):
                with patch("grpc.ssl_server_credentials") as mock_creds:
                    cfg.load_credentials()
        _, kwargs = mock_creds.call_args
        assert kwargs["root_certificates"] is None

    def test_load_credentials_with_ca_passes_ca_data(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key", ca_cert_path="ca.crt")

        file_data = {
            "k.key": b"PRIVATE_KEY",
            "c.crt": b"CERTIFICATE",
            "ca.crt": b"CA_CERT",
        }

        def fake_open(path, mode="r"):
            m = MagicMock()
            m.__enter__ = lambda s: s
            m.__exit__ = MagicMock(return_value=False)
            m.read = MagicMock(return_value=file_data[path])
            return m

        with patch("builtins.open", side_effect=fake_open):
            with patch("os.path.exists", return_value=True):
                with patch("grpc.ssl_server_credentials") as mock_creds:
                    cfg.load_credentials()

        _, kwargs = mock_creds.call_args
        assert kwargs["root_certificates"] == b"CA_CERT"
        assert kwargs["require_client_auth"] is True

    def test_load_credentials_with_ca_passes_key_and_cert(self):
        cfg = SSLConfig(cert_path="c.crt", key_path="k.key", ca_cert_path="ca.crt")

        file_data = {
            "k.key": b"PRIVATE_KEY",
            "c.crt": b"CERTIFICATE",
            "ca.crt": b"CA_CERT",
        }

        def fake_open(path, mode="r"):
            m = MagicMock()
            m.__enter__ = lambda s: s
            m.__exit__ = MagicMock(return_value=False)
            m.read = MagicMock(return_value=file_data[path])
            return m

        with patch("builtins.open", side_effect=fake_open):
            with patch("os.path.exists", return_value=True):
                with patch("grpc.ssl_server_credentials") as mock_creds:
                    cfg.load_credentials()

        args, _ = mock_creds.call_args
        key_cert_pairs = args[0]
        assert key_cert_pairs == [(b"PRIVATE_KEY", b"CERTIFICATE")]


# ============================================================================
# AuthConfig
# ============================================================================


class TestAuthConfig:
    """Tests for AuthConfig dataclass defaults and custom values."""

    def test_default_enabled_is_false(self):
        cfg = AuthConfig()
        assert cfg.enabled is False

    def test_default_token_is_none(self):
        cfg = AuthConfig()
        assert cfg.token is None

    def test_default_header_key_is_authorization(self):
        cfg = AuthConfig()
        assert cfg.header_key == "authorization"

    def test_default_validator_is_none(self):
        cfg = AuthConfig()
        assert cfg.validator is None

    def test_custom_fields_stored(self):
        validator = lambda t, m: True
        cfg = AuthConfig(
            enabled=True,
            token="secret",
            header_key="x-api-key",
            validator=validator,
        )
        assert cfg.enabled is True
        assert cfg.token == "secret"
        assert cfg.header_key == "x-api-key"
        assert cfg.validator is validator


# ============================================================================
# AuthorizationInterceptor
# ============================================================================


class TestAuthorizationInterceptor:
    """Tests for the gRPC server interceptor that enforces token auth."""

    def _make_call_details(self, metadata: dict) -> Mock:
        details = Mock()
        details.invocation_metadata = metadata
        return details

    def test_disabled_auth_always_passes_through(self):
        interceptor = AuthorizationInterceptor(AuthConfig(enabled=False))
        continuation = Mock(return_value="handler")
        details = self._make_call_details({})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_called_once_with(details)
        assert result == "handler"

    def test_disabled_auth_ignores_token_value(self):
        interceptor = AuthorizationInterceptor(AuthConfig(enabled=False, token="tok"))
        continuation = Mock(return_value="handler")
        details = self._make_call_details({"authorization": "wrong"})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_called_once_with(details)
        assert result == "handler"

    def test_valid_token_passes_through(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, token="my-token")
        )
        continuation = Mock(return_value="handler")
        details = self._make_call_details({"authorization": "my-token"})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_called_once_with(details)
        assert result == "handler"

    def test_invalid_token_blocks_request(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, token="my-token")
        )
        continuation = Mock()
        details = self._make_call_details({"authorization": "wrong-token"})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_not_called()
        assert result is not None

    def test_missing_token_header_blocks_request(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, token="my-token")
        )
        continuation = Mock()
        details = self._make_call_details({})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_not_called()
        assert result is not None

    def test_custom_validator_allow(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, validator=lambda t, m: t == "allowed")
        )
        continuation = Mock(return_value="handler")
        details = self._make_call_details({"authorization": "allowed"})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_called_once_with(details)
        assert result == "handler"

    def test_custom_validator_deny(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, validator=lambda t, m: False)
        )
        continuation = Mock()
        details = self._make_call_details({"authorization": "anything"})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_not_called()
        assert result is not None

    def test_custom_validator_receives_full_metadata(self):
        received = {}

        def validator(token, metadata):
            received["token"] = token
            received["metadata"] = metadata
            return True

        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, validator=validator)
        )
        details = self._make_call_details({"authorization": "tok", "x-extra": "data"})
        interceptor.intercept_service(Mock(), details)
        assert received["token"] == "tok"
        assert received["metadata"]["x-extra"] == "data"

    def test_custom_header_key_used_for_lookup(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, token="tok", header_key="x-api-key")
        )
        continuation = Mock(return_value="handler")
        details = self._make_call_details({"x-api-key": "tok"})
        result = interceptor.intercept_service(continuation, details)
        continuation.assert_called_once_with(details)
        assert result == "handler"

    def test_custom_header_key_wrong_value_blocks(self):
        interceptor = AuthorizationInterceptor(
            AuthConfig(enabled=True, token="tok", header_key="x-api-key")
        )
        continuation = Mock()
        details = self._make_call_details({"x-api-key": "bad"})
        interceptor.intercept_service(continuation, details)
        continuation.assert_not_called()

    def test_abort_handler_is_not_none(self):
        interceptor = AuthorizationInterceptor(AuthConfig(enabled=True, token="t"))
        handler = interceptor._abort_handler()
        assert handler is not None


# ============================================================================
# AgentKitServer
# ============================================================================


class TestAgentKitServer:
    """Tests for AgentKitServer initialization, lifecycle, SSL, and auth."""

    def _make_server(self, **kwargs) -> AgentKitServer:
        return AgentKitServer(agent=AgentKitAgent(), **kwargs)

    # --- __init__ defaults ---

    def test_default_host(self):
        assert self._make_server().host == "0.0.0.0"

    def test_default_port(self):
        assert self._make_server().port == 50051

    def test_default_max_workers(self):
        assert self._make_server().max_workers == 10

    def test_custom_host_and_port(self):
        server = self._make_server(host="127.0.0.1", port=9090)
        assert server.host == "127.0.0.1"
        assert server.port == 9090

    def test_address_property(self):
        server = self._make_server(host="0.0.0.0", port=8080)
        assert server.address == "0.0.0.0:8080"

    def test_is_running_false_before_start(self):
        assert self._make_server().is_running is False

    # --- SSL config parsing ---

    def test_ssl_config_parsed_from_dict(self):
        server = self._make_server(
            ssl_config={
                "cert_path": "c.crt",
                "key_path": "k.key",
                "ca_cert_path": "ca.crt",
            }
        )
        assert server._ssl_config is not None
        assert server._ssl_config.cert_path == "c.crt"
        assert server._ssl_config.key_path == "k.key"
        assert server._ssl_config.ca_cert_path == "ca.crt"

    def test_ssl_config_none_when_not_provided(self):
        assert self._make_server()._ssl_config is None

    def test_ssl_config_no_ca_cert_optional(self):
        server = self._make_server(ssl_config={"cert_path": "c.crt", "key_path": "k.key"})
        assert server._ssl_config.ca_cert_path is None

    # --- Auth config parsing ---

    def test_auth_config_parsed_from_dict(self):
        server = self._make_server(
            auth_config={
                "enabled": True,
                "token": "secret",
                "header_key": "x-auth",
            }
        )
        assert server._auth_config is not None
        assert server._auth_config.enabled is True
        assert server._auth_config.token == "secret"
        assert server._auth_config.header_key == "x-auth"

    def test_auth_config_none_when_not_provided(self):
        assert self._make_server()._auth_config is None

    def test_auth_config_default_enabled_false(self):
        server = self._make_server(auth_config={"enabled": False})
        assert server._auth_config.enabled is False

    # --- start() insecure ---

    def test_start_insecure_calls_add_insecure_port(self):
        server = self._make_server(port=59997)
        mock_grpc_server = MagicMock()
        with patch("grpc.server", return_value=mock_grpc_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                server.start()
        mock_grpc_server.add_insecure_port.assert_called_once_with("0.0.0.0:59997")

    def test_start_calls_server_start(self):
        mock_grpc_server = MagicMock()
        with patch("grpc.server", return_value=mock_grpc_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                self._make_server().start()
        mock_grpc_server.start.assert_called_once()

    def test_start_sets_is_running_true(self):
        server = self._make_server()
        with patch("grpc.server", return_value=MagicMock()):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                server.start()
        assert server.is_running is True

    def test_start_registers_agent_with_server(self):
        server = self._make_server()
        mock_grpc_server = MagicMock()
        with patch("grpc.server", return_value=mock_grpc_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server") as mock_add:
                server.start()
        mock_add.assert_called_once_with(server.agent, mock_grpc_server)

    # --- start() with SSL ---

    def test_start_ssl_calls_add_secure_port(self):
        server = self._make_server(
            port=59996,
            ssl_config={"cert_path": "c.crt", "key_path": "k.key"},
        )
        mock_grpc_server = MagicMock()
        mock_credentials = MagicMock()
        with patch("grpc.server", return_value=mock_grpc_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                with patch("os.path.exists", return_value=True):
                    with patch.object(
                        SSLConfig, "load_credentials", return_value=mock_credentials
                    ):
                        server.start()
        mock_grpc_server.add_secure_port.assert_called_once_with(
            "0.0.0.0:59996", mock_credentials
        )

    def test_start_ssl_does_not_call_insecure_port(self):
        server = self._make_server(
            ssl_config={"cert_path": "c.crt", "key_path": "k.key"}
        )
        mock_grpc_server = MagicMock()
        with patch("grpc.server", return_value=mock_grpc_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                with patch("os.path.exists", return_value=True):
                    with patch.object(SSLConfig, "load_credentials", return_value=MagicMock()):
                        server.start()
        mock_grpc_server.add_insecure_port.assert_not_called()

    def test_start_ssl_cert_not_found_raises_file_not_found(self):
        server = self._make_server(
            ssl_config={"cert_path": "missing.crt", "key_path": "k.key"}
        )
        with patch("grpc.server", return_value=MagicMock()):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                with patch("os.path.exists", return_value=False):
                    with pytest.raises(FileNotFoundError, match="missing.crt"):
                        server.start()

    def test_start_ssl_key_not_found_raises_file_not_found(self):
        server = self._make_server(
            ssl_config={"cert_path": "c.crt", "key_path": "missing.key"}
        )

        def mock_exists(path):
            return path == "c.crt"

        with patch("grpc.server", return_value=MagicMock()):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                with patch("os.path.exists", side_effect=mock_exists):
                    with pytest.raises(FileNotFoundError, match="missing.key"):
                        server.start()

    # --- start() with auth ---

    def test_start_with_auth_adds_authorization_interceptor(self):
        server = self._make_server(auth_config={"enabled": True, "token": "tok"})
        captured_interceptors = []

        def capture_server(executor, interceptors=None):
            captured_interceptors.extend(interceptors or [])
            return MagicMock()

        with patch("grpc.server", side_effect=capture_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                server.start()

        assert len(captured_interceptors) == 1
        assert isinstance(captured_interceptors[0], AuthorizationInterceptor)

    def test_start_without_auth_adds_no_interceptors(self):
        server = self._make_server()
        captured_interceptors = []

        def capture_server(executor, interceptors=None):
            captured_interceptors.extend(interceptors or [])
            return MagicMock()

        with patch("grpc.server", side_effect=capture_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                server.start()

        assert len(captured_interceptors) == 0

    def test_start_with_auth_disabled_adds_no_interceptors(self):
        server = self._make_server(auth_config={"enabled": False, "token": "tok"})
        captured_interceptors = []

        def capture_server(executor, interceptors=None):
            captured_interceptors.extend(interceptors or [])
            return MagicMock()

        with patch("grpc.server", side_effect=capture_server):
            with patch("rapida.agentkit.add_AgentKitServicer_to_server"):
                server.start()

        assert len(captured_interceptors) == 0

    # --- stop() ---

    def test_stop_calls_grpc_server_stop(self):
        server = self._make_server()
        mock_grpc_server = MagicMock()
        server._server = mock_grpc_server
        server.stop(grace=10)
        mock_grpc_server.stop.assert_called_once_with(10)

    def test_stop_with_default_grace(self):
        server = self._make_server()
        mock_grpc_server = MagicMock()
        server._server = mock_grpc_server
        server.stop()
        mock_grpc_server.stop.assert_called_once_with(5)

    def test_stop_noop_when_server_never_started(self):
        server = self._make_server()
        # Must not raise
        server.stop()

    # --- wait_for_termination() ---

    def test_wait_for_termination_returns_true_when_not_started(self):
        assert self._make_server().wait_for_termination(timeout=0.1) is True

    def test_wait_for_termination_delegates_to_grpc_server(self):
        server = self._make_server()
        mock_grpc_server = MagicMock()
        mock_grpc_server.wait_for_termination.return_value = True
        server._server = mock_grpc_server
        result = server.wait_for_termination(timeout=3.0)
        mock_grpc_server.wait_for_termination.assert_called_once_with(3.0)
        assert result is True

    def test_wait_for_termination_no_timeout(self):
        server = self._make_server()
        mock_grpc_server = MagicMock()
        mock_grpc_server.wait_for_termination.return_value = True
        server._server = mock_grpc_server
        server.wait_for_termination()
        mock_grpc_server.wait_for_termination.assert_called_once_with(None)
