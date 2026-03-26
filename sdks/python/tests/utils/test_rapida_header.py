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
import sys
import os
import importlib.util

# Import directly from the file to bypass rapida/__init__.py
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'utils', 'rapida_header.py')
spec = importlib.util.spec_from_file_location('rapida_header', module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

# Extract all the constants
HEADER_AUTH_ID = module.HEADER_AUTH_ID
HEADER_PROJECT_ID = module.HEADER_PROJECT_ID
HEADER_API_KEY = module.HEADER_API_KEY
HEADER_SOURCE_KEY = module.HEADER_SOURCE_KEY
HEADER_ENVIRONMENT_KEY = module.HEADER_ENVIRONMENT_KEY
HEADER_REGION_KEY = module.HEADER_REGION_KEY
HEADER_USER_AGENT = module.HEADER_USER_AGENT
HEADER_LANGUAGE = module.HEADER_LANGUAGE
HEADER_PLATFORM = module.HEADER_PLATFORM
HEADER_SCREEN_WIDTH = module.HEADER_SCREEN_WIDTH
HEADER_SCREEN_HEIGHT = module.HEADER_SCREEN_HEIGHT
HEADER_WINDOW_WIDTH = module.HEADER_WINDOW_WIDTH
HEADER_WINDOW_HEIGHT = module.HEADER_WINDOW_HEIGHT
HEADER_TIMEZONE = module.HEADER_TIMEZONE
HEADER_COLOR_DEPTH = module.HEADER_COLOR_DEPTH
HEADER_DEVICE_MEMORY = module.HEADER_DEVICE_MEMORY
HEADER_HARDWARE_CONCURRENCY = module.HEADER_HARDWARE_CONCURRENCY
HEADER_CONNECTION_TYPE = module.HEADER_CONNECTION_TYPE
HEADER_CONNECTION_EFFECTIVE_TYPE = module.HEADER_CONNECTION_EFFECTIVE_TYPE
HEADER_COOKIES_ENABLED = module.HEADER_COOKIES_ENABLED
HEADER_DO_NOT_TRACK = module.HEADER_DO_NOT_TRACK
HEADER_REFERRER = module.HEADER_REFERRER
HEADER_REMOTE_URL = module.HEADER_REMOTE_URL
HEADER_LATITUDE = module.HEADER_LATITUDE
HEADER_LONGITUDE = module.HEADER_LONGITUDE


class TestRapidaHeader:
    """Test cases for rapida_header constants."""

    def test_header_auth_id(self):
        """Test HEADER_AUTH_ID constant."""
        assert HEADER_AUTH_ID == "x-auth-id"

    def test_header_project_id(self):
        """Test HEADER_PROJECT_ID constant."""
        assert HEADER_PROJECT_ID == "x-project-id"

    def test_header_api_key(self):
        """Test HEADER_API_KEY constant."""
        assert HEADER_API_KEY == "x-api-key"

    def test_header_source_key(self):
        """Test HEADER_SOURCE_KEY constant."""
        assert HEADER_SOURCE_KEY == "x-client-source"

    def test_header_environment_key(self):
        """Test HEADER_ENVIRONMENT_KEY constant."""
        assert HEADER_ENVIRONMENT_KEY == "x-rapida-environment"

    def test_header_region_key(self):
        """Test HEADER_REGION_KEY constant."""
        assert HEADER_REGION_KEY == "x-rapida-region"

    def test_header_user_agent(self):
        """Test HEADER_USER_AGENT constant."""
        assert HEADER_USER_AGENT == "x-user-agent"

    def test_header_language(self):
        """Test HEADER_LANGUAGE constant."""
        assert HEADER_LANGUAGE == "x-language"

    def test_header_platform(self):
        """Test HEADER_PLATFORM constant."""
        assert HEADER_PLATFORM == "x-platform"

    def test_header_screen_dimensions(self):
        """Test screen dimension headers."""
        assert HEADER_SCREEN_WIDTH == "x-screen-width"
        assert HEADER_SCREEN_HEIGHT == "x-screen-height"

    def test_header_window_dimensions(self):
        """Test window dimension headers."""
        assert HEADER_WINDOW_WIDTH == "x-window-width"
        assert HEADER_WINDOW_HEIGHT == "x-window-height"

    def test_header_timezone(self):
        """Test HEADER_TIMEZONE constant."""
        assert HEADER_TIMEZONE == "x-timezone"

    def test_header_color_depth(self):
        """Test HEADER_COLOR_DEPTH constant."""
        assert HEADER_COLOR_DEPTH == "x-color-depth"

    def test_header_device_memory(self):
        """Test HEADER_DEVICE_MEMORY constant."""
        assert HEADER_DEVICE_MEMORY == "x-device-memory"

    def test_header_hardware_concurrency(self):
        """Test HEADER_HARDWARE_CONCURRENCY constant."""
        assert HEADER_HARDWARE_CONCURRENCY == "x-hardware-concurrency"

    def test_header_connection_type(self):
        """Test HEADER_CONNECTION_TYPE constant."""
        assert HEADER_CONNECTION_TYPE == "x-connection-type"

    def test_header_connection_effective_type(self):
        """Test HEADER_CONNECTION_EFFECTIVE_TYPE constant."""
        assert HEADER_CONNECTION_EFFECTIVE_TYPE == "x-connection-effective-type"

    def test_header_cookies_enabled(self):
        """Test HEADER_COOKIES_ENABLED constant."""
        assert HEADER_COOKIES_ENABLED == "x-cookies-enabled"

    def test_header_do_not_track(self):
        """Test HEADER_DO_NOT_TRACK constant."""
        assert HEADER_DO_NOT_TRACK == "x-do-not-track"

    def test_header_referrer(self):
        """Test HEADER_REFERRER constant."""
        assert HEADER_REFERRER == "x-referrer"

    def test_header_remote_url(self):
        """Test HEADER_REMOTE_URL constant."""
        assert HEADER_REMOTE_URL == "x-remote-url"

    def test_header_latitude(self):
        """Test HEADER_LATITUDE constant."""
        assert HEADER_LATITUDE == "x-latitude"

    def test_header_longitude(self):
        """Test HEADER_LONGITUDE constant."""
        assert HEADER_LONGITUDE == "x-longitude"

    def test_all_headers_are_lowercase(self):
        """Test all headers are lowercase."""
        headers = [
            HEADER_AUTH_ID, HEADER_PROJECT_ID, HEADER_API_KEY, HEADER_SOURCE_KEY,
            HEADER_ENVIRONMENT_KEY, HEADER_REGION_KEY, HEADER_USER_AGENT,
            HEADER_LANGUAGE, HEADER_PLATFORM, HEADER_SCREEN_WIDTH, HEADER_SCREEN_HEIGHT,
            HEADER_WINDOW_WIDTH, HEADER_WINDOW_HEIGHT, HEADER_TIMEZONE,
            HEADER_COLOR_DEPTH, HEADER_DEVICE_MEMORY, HEADER_HARDWARE_CONCURRENCY,
            HEADER_CONNECTION_TYPE, HEADER_CONNECTION_EFFECTIVE_TYPE,
            HEADER_COOKIES_ENABLED, HEADER_DO_NOT_TRACK, HEADER_REFERRER,
            HEADER_REMOTE_URL, HEADER_LATITUDE, HEADER_LONGITUDE,
        ]
        for header in headers:
            assert header == header.lower(), f"Header {header} is not lowercase"

    def test_all_headers_start_with_x_prefix(self):
        """Test all headers start with 'x-' prefix."""
        headers = [
            HEADER_AUTH_ID, HEADER_PROJECT_ID, HEADER_API_KEY, HEADER_SOURCE_KEY,
            HEADER_ENVIRONMENT_KEY, HEADER_REGION_KEY, HEADER_USER_AGENT,
            HEADER_LANGUAGE, HEADER_PLATFORM, HEADER_SCREEN_WIDTH, HEADER_SCREEN_HEIGHT,
            HEADER_WINDOW_WIDTH, HEADER_WINDOW_HEIGHT, HEADER_TIMEZONE,
            HEADER_COLOR_DEPTH, HEADER_DEVICE_MEMORY, HEADER_HARDWARE_CONCURRENCY,
            HEADER_CONNECTION_TYPE, HEADER_CONNECTION_EFFECTIVE_TYPE,
            HEADER_COOKIES_ENABLED, HEADER_DO_NOT_TRACK, HEADER_REFERRER,
            HEADER_REMOTE_URL, HEADER_LATITUDE, HEADER_LONGITUDE,
        ]
        for header in headers:
            assert header.startswith("x-"), f"Header {header} does not start with 'x-'"
