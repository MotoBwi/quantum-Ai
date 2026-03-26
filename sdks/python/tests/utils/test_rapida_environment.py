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
import warnings
import sys
import os
import importlib.util

# Import directly from the file to bypass rapida/__init__.py
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'utils', 'rapida_environment.py')
spec = importlib.util.spec_from_file_location('rapida_environment', module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

RapidaEnvironment = module.RapidaEnvironment


class TestRapidaEnvironment:
    """Test cases for RapidaEnvironment enum."""

    def test_production_value(self):
        """Test PRODUCTION enum value."""
        assert RapidaEnvironment.PRODUCTION.value == "production"

    def test_development_value(self):
        """Test DEVELOPMENT enum value."""
        assert RapidaEnvironment.DEVELOPMENT.value == "development"

    def test_get_production(self):
        """Test get() method for PRODUCTION."""
        assert RapidaEnvironment.PRODUCTION.get() == "production"

    def test_get_development(self):
        """Test get() method for DEVELOPMENT."""
        assert RapidaEnvironment.DEVELOPMENT.get() == "development"

    def test_from_str_production(self):
        """Test from_str() for production string."""
        result = RapidaEnvironment.from_str("production")
        assert result == RapidaEnvironment.PRODUCTION

    def test_from_str_development(self):
        """Test from_str() for development string."""
        result = RapidaEnvironment.from_str("development")
        assert result == RapidaEnvironment.DEVELOPMENT

    def test_from_str_invalid_returns_development_with_warning(self):
        """Test from_str() with invalid string returns DEVELOPMENT with warning."""
        with warnings.catch_warnings(record=True) as w:
            warnings.simplefilter("always")
            result = RapidaEnvironment.from_str("invalid")
            assert result == RapidaEnvironment.DEVELOPMENT
            assert len(w) == 1
            assert "not supported" in str(w[0].message)

    def test_from_str_empty_returns_development_with_warning(self):
        """Test from_str() with empty string returns DEVELOPMENT with warning."""
        with warnings.catch_warnings(record=True) as w:
            warnings.simplefilter("always")
            result = RapidaEnvironment.from_str("")
            assert result == RapidaEnvironment.DEVELOPMENT
            assert len(w) == 1

    def test_enum_members_count(self):
        """Test that there are exactly 2 environment types."""
        assert len(RapidaEnvironment) == 2

    def test_enum_is_iterable(self):
        """Test that RapidaEnvironment is iterable."""
        environments = list(RapidaEnvironment)
        assert RapidaEnvironment.PRODUCTION in environments
        assert RapidaEnvironment.DEVELOPMENT in environments
