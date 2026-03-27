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
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'utils', 'rapida_region.py')
spec = importlib.util.spec_from_file_location('rapida_region', module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

RapidaRegion = module.RapidaRegion


class TestRapidaRegion:
    """Test cases for RapidaRegion enum."""

    def test_ap_value(self):
        """Test AP region value."""
        assert RapidaRegion.AP.value == "ap"

    def test_us_value(self):
        """Test US region value."""
        assert RapidaRegion.US.value == "us"

    def test_eu_value(self):
        """Test EU region value."""
        assert RapidaRegion.EU.value == "eu"

    def test_all_value(self):
        """Test ALL region value."""
        assert RapidaRegion.ALL.value == "all"

    def test_get_ap(self):
        """Test get() method for AP."""
        assert RapidaRegion.AP.get() == "ap"

    def test_get_us(self):
        """Test get() method for US."""
        assert RapidaRegion.US.get() == "us"

    def test_get_eu(self):
        """Test get() method for EU."""
        assert RapidaRegion.EU.get() == "eu"

    def test_get_all(self):
        """Test get() method for ALL."""
        assert RapidaRegion.ALL.get() == "all"

    def test_from_str_ap(self):
        """Test from_str() for ap string."""
        result = RapidaRegion.from_str("ap")
        assert result == RapidaRegion.AP

    def test_from_str_us(self):
        """Test from_str() for us string."""
        result = RapidaRegion.from_str("us")
        assert result == RapidaRegion.US

    def test_from_str_eu(self):
        """Test from_str() for eu string."""
        result = RapidaRegion.from_str("eu")
        assert result == RapidaRegion.EU

    def test_from_str_invalid_returns_all_with_warning(self):
        """Test from_str() with invalid string returns ALL with warning."""
        with warnings.catch_warnings(record=True) as w:
            warnings.simplefilter("always")
            result = RapidaRegion.from_str("invalid")
            assert result == RapidaRegion.ALL
            assert len(w) == 1
            assert "not support" in str(w[0].message)

    def test_from_str_empty_returns_all_with_warning(self):
        """Test from_str() with empty string returns ALL with warning."""
        with warnings.catch_warnings(record=True) as w:
            warnings.simplefilter("always")
            result = RapidaRegion.from_str("")
            assert result == RapidaRegion.ALL
            assert len(w) == 1

    def test_enum_members_count(self):
        """Test that there are exactly 4 region types."""
        assert len(RapidaRegion) == 4

    def test_enum_is_iterable(self):
        """Test that RapidaRegion is iterable."""
        regions = list(RapidaRegion)
        assert RapidaRegion.AP in regions
        assert RapidaRegion.US in regions
        assert RapidaRegion.EU in regions
        assert RapidaRegion.ALL in regions
