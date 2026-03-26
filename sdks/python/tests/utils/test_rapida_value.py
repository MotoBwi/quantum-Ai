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

from google.protobuf.any_pb2 import Any
from google.protobuf.struct_pb2 import Struct, Value
from google.protobuf.wrappers_pb2 import (
    StringValue,
    Int32Value,
    DoubleValue,
    BoolValue,
    BytesValue,
)

# Import directly from the file to bypass rapida/__init__.py
module_path = os.path.join(os.path.dirname(__file__), '..', '..', 'rapida', 'utils', 'rapida_value.py')
spec = importlib.util.spec_from_file_location('rapida_value', module_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

# Import all functions
pack = module.pack
string_to_any = module.string_to_any
any_to_string = module.any_to_string
float_to_any = module.float_to_any
any_to_float = module.any_to_float
int32_to_any = module.int32_to_any
any_to_int32 = module.any_to_int32
bool_to_any = module.bool_to_any
any_to_bool = module.any_to_bool
bytes_to_any = module.bytes_to_any
json_to_any = module.json_to_any
any_to_json = module.any_to_json
map_to_object = module.map_to_object
safe_convert_value = module.safe_convert_value
convert_any_value = module.convert_any_value
convert_struct = module.convert_struct
convert_value = module.convert_value

# Old import removed - we now use direct file import above


class TestPack:
    """Test cases for pack function."""

    def test_pack_string_value(self):
        """Test packing StringValue into Any."""
        sv = StringValue(value="test")
        result = pack(sv)
        assert isinstance(result, Any)
        assert "StringValue" in result.type_url

    def test_pack_int_value(self):
        """Test packing Int32Value into Any."""
        iv = Int32Value(value=42)
        result = pack(iv)
        assert isinstance(result, Any)
        assert "Int32Value" in result.type_url

    def test_pack_with_custom_prefix(self):
        """Test packing with custom type URL prefix."""
        sv = StringValue(value="test")
        result = pack(sv, "custom.prefix")
        assert isinstance(result, Any)
        assert "custom.prefix" in result.type_url


class TestStringConversion:
    """Test cases for string conversion functions."""

    def test_string_to_any(self):
        """Test converting string to Any."""
        result = string_to_any("hello")
        assert isinstance(result, Any)
        assert "StringValue" in result.type_url

    def test_any_to_string(self):
        """Test converting Any to string."""
        any_value = string_to_any("hello")
        result = any_to_string(any_value)
        assert result == "hello"

    def test_string_roundtrip(self):
        """Test string conversion roundtrip."""
        original = "test string"
        any_value = string_to_any(original)
        result = any_to_string(any_value)
        assert result == original

    def test_empty_string(self):
        """Test empty string conversion."""
        any_value = string_to_any("")
        result = any_to_string(any_value)
        assert result == ""

    def test_unicode_string(self):
        """Test unicode string conversion."""
        original = "こんにちは 🌍"
        any_value = string_to_any(original)
        result = any_to_string(any_value)
        assert result == original


class TestFloatConversion:
    """Test cases for float conversion functions."""

    def test_float_to_any(self):
        """Test converting float to Any."""
        result = float_to_any(3.14)
        assert isinstance(result, Any)
        assert "DoubleValue" in result.type_url

    def test_any_to_float(self):
        """Test converting Any to float."""
        any_value = float_to_any(3.14)
        result = any_to_float(any_value)
        assert abs(result - 3.14) < 0.001

    def test_float_roundtrip(self):
        """Test float conversion roundtrip."""
        original = 2.71828
        any_value = float_to_any(original)
        result = any_to_float(any_value)
        assert abs(result - original) < 0.00001

    def test_negative_float(self):
        """Test negative float conversion."""
        original = -123.456
        any_value = float_to_any(original)
        result = any_to_float(any_value)
        assert abs(result - original) < 0.001

    def test_zero_float(self):
        """Test zero float conversion."""
        any_value = float_to_any(0.0)
        result = any_to_float(any_value)
        assert result == 0.0


class TestInt32Conversion:
    """Test cases for int32 conversion functions."""

    def test_int32_to_any(self):
        """Test converting int32 to Any."""
        result = int32_to_any(42)
        assert isinstance(result, Any)
        assert "Int32Value" in result.type_url

    def test_any_to_int32(self):
        """Test converting Any to int32."""
        any_value = int32_to_any(42)
        result = any_to_int32(any_value)
        assert result == 42

    def test_int32_roundtrip(self):
        """Test int32 conversion roundtrip."""
        original = 12345
        any_value = int32_to_any(original)
        result = any_to_int32(any_value)
        assert result == original

    def test_negative_int32(self):
        """Test negative int32 conversion."""
        original = -999
        any_value = int32_to_any(original)
        result = any_to_int32(any_value)
        assert result == original

    def test_zero_int32(self):
        """Test zero int32 conversion."""
        any_value = int32_to_any(0)
        result = any_to_int32(any_value)
        assert result == 0


class TestBoolConversion:
    """Test cases for bool conversion functions."""

    def test_bool_to_any_true(self):
        """Test converting True to Any."""
        result = bool_to_any(True)
        assert isinstance(result, Any)
        assert "BoolValue" in result.type_url

    def test_bool_to_any_false(self):
        """Test converting False to Any."""
        result = bool_to_any(False)
        assert isinstance(result, Any)

    def test_any_to_bool_true(self):
        """Test converting Any to True."""
        any_value = bool_to_any(True)
        result = any_to_bool(any_value)
        assert result is True

    def test_any_to_bool_false(self):
        """Test converting Any to False."""
        any_value = bool_to_any(False)
        result = any_to_bool(any_value)
        assert result is False


class TestBytesConversion:
    """Test cases for bytes conversion functions."""

    def test_bytes_to_any(self):
        """Test converting bytes to Any."""
        result = bytes_to_any(b"hello")
        assert isinstance(result, Any)
        assert "BytesValue" in result.type_url

    def test_bytes_roundtrip(self):
        """Test bytes conversion via unpack."""
        original = b"test bytes"
        any_value = bytes_to_any(original)
        bv = BytesValue()
        any_value.Unpack(bv)
        assert bv.value == original

    def test_empty_bytes(self):
        """Test empty bytes conversion."""
        any_value = bytes_to_any(b"")
        bv = BytesValue()
        any_value.Unpack(bv)
        assert bv.value == b""


class TestJsonConversion:
    """Test cases for JSON conversion functions."""

    def test_json_to_any(self):
        """Test converting dict to Any."""
        obj = {"key": "value"}
        result = json_to_any(obj)
        assert isinstance(result, Any)

    def test_any_to_json(self):
        """Test converting Any to dict."""
        obj = {"key": "value", "number": 42}
        any_value = json_to_any(obj)
        result = any_to_json(any_value)
        assert result == obj

    def test_json_roundtrip(self):
        """Test JSON conversion roundtrip."""
        original = {"name": "test", "count": 5, "active": True}
        any_value = json_to_any(original)
        result = any_to_json(any_value)
        assert result == original

    def test_nested_json(self):
        """Test nested JSON conversion."""
        original = {"outer": {"inner": {"deep": "value"}}}
        any_value = json_to_any(original)
        result = any_to_json(any_value)
        assert result == original

    def test_empty_json(self):
        """Test empty dict conversion."""
        any_value = json_to_any({})
        result = any_to_json(any_value)
        assert result == {}


class TestMapToObject:
    """Test cases for map_to_object function."""

    def test_empty_map(self):
        """Test empty map conversion."""
        result = map_to_object({})
        assert result == {}

    def test_none_map(self):
        """Test None map conversion."""
        result = map_to_object(None)
        assert result == {}

    def test_simple_map(self):
        """Test simple map conversion."""
        proto_map = {"key1": "value1", "key2": "value2"}
        result = map_to_object(proto_map)
        assert result == {"key1": "value1", "key2": "value2"}


class TestSafeConvertValue:
    """Test cases for safe_convert_value function."""

    def test_none_value(self):
        """Test None value conversion."""
        result = safe_convert_value(None)
        assert result is None

    def test_string_value(self):
        """Test string value conversion."""
        result = safe_convert_value("test")
        assert result == "test"

    def test_int_value(self):
        """Test int value conversion."""
        result = safe_convert_value(42)
        assert result == 42

    def test_float_value(self):
        """Test float value conversion."""
        result = safe_convert_value(3.14)
        assert result == 3.14

    def test_bool_value(self):
        """Test bool value conversion."""
        result = safe_convert_value(True)
        assert result is True

    def test_list_value(self):
        """Test list value conversion."""
        result = safe_convert_value([1, 2, 3])
        assert result == [1, 2, 3]

    def test_dict_value(self):
        """Test dict value conversion."""
        result = safe_convert_value({"key": "value"})
        assert result == {"key": "value"}


class TestConvertAnyValue:
    """Test cases for convert_any_value function."""

    def test_convert_string_value(self):
        """Test converting StringValue from Any."""
        any_value = string_to_any("hello")
        result = convert_any_value(any_value)
        assert result == "hello"

    def test_convert_int32_value(self):
        """Test converting Int32Value from Any."""
        any_value = int32_to_any(42)
        result = convert_any_value(any_value)
        assert result == 42

    def test_convert_double_value(self):
        """Test converting DoubleValue from Any."""
        any_value = float_to_any(3.14)
        result = convert_any_value(any_value)
        assert abs(result - 3.14) < 0.001

    def test_convert_bool_value(self):
        """Test converting BoolValue from Any."""
        any_value = bool_to_any(True)
        result = convert_any_value(any_value)
        assert result is True


class TestConvertStruct:
    """Test cases for convert_struct function."""

    def test_empty_struct(self):
        """Test empty struct conversion."""
        struct = Struct()
        result = convert_struct(struct)
        assert result == {}

    def test_struct_with_string(self):
        """Test struct with string value."""
        struct = Struct()
        struct.fields["key"].string_value = "value"
        result = convert_struct(struct)
        assert result == {"key": "value"}

    def test_struct_with_number(self):
        """Test struct with number value."""
        struct = Struct()
        struct.fields["num"].number_value = 42.0
        result = convert_struct(struct)
        assert result == {"num": 42.0}


class TestConvertValue:
    """Test cases for convert_value function."""

    def test_null_value(self):
        """Test null value conversion."""
        value = Value()
        value.null_value = 0
        result = convert_value(value)
        assert result is None

    def test_number_value(self):
        """Test number value conversion."""
        value = Value()
        value.number_value = 42.0
        result = convert_value(value)
        assert result == 42.0

    def test_string_value(self):
        """Test string value conversion."""
        value = Value()
        value.string_value = "test"
        result = convert_value(value)
        assert result == "test"

    def test_bool_value(self):
        """Test bool value conversion."""
        value = Value()
        value.bool_value = True
        result = convert_value(value)
        assert result is True

    def test_list_value(self):
        """Test list value conversion."""
        value = Value()
        value.list_value.values.add().number_value = 1.0
        value.list_value.values.add().number_value = 2.0
        result = convert_value(value)
        assert result == [1.0, 2.0]
