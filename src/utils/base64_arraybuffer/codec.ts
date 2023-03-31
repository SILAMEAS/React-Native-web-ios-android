import {Encoding, ParseOptions} from '.';

const base64Encoding: Encoding = {
  chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bits: 6,
};

// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < base64Encoding.chars.length; i++) {
  lookup[base64Encoding.chars.charCodeAt(i)] = i;
}

export const encode = (arraybuffer: ArrayBuffer): string => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = '';

  for (i = 0; i < len; i += 3) {
    base64 += base64Encoding.chars[bytes[i] >> 2];
    base64 += base64Encoding.chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
    base64 +=
      base64Encoding.chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
    base64 += base64Encoding.chars[bytes[i + 2] & 63];
  }

  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + '=';
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + '==';
  }

  return base64;
};
export const decode = (string: string, opts?: ParseOptions): Uint8Array => {
  return parse(string, base64Encoding, opts);
};

function parse(
  string: string,
  encoding: Encoding,
  opts: ParseOptions = {},
): Uint8Array {
  // Build the character lookup table:
  if (!encoding.codes) {
    encoding.codes = {};
    for (let i = 0; i < encoding.chars.length; ++i) {
      encoding.codes[encoding.chars[i]] = i;
    }
  }

  // The string must have a whole number of bytes:
  if (!opts.loose && (string.length * encoding.bits) & 7) {
    throw new SyntaxError('Invalid padding');
  }

  // Count the padding bytes:
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;

    // If we get a whole number of bytes, there is too much padding:
    if (!opts.loose && !(((string.length - end) * encoding.bits) & 7)) {
      throw new SyntaxError('Invalid padding');
    }
  }

  // Allocate the output:
  const out = new (opts.out ?? Uint8Array)(
    ((end * encoding.bits) / 8) | 0,
  ) as Uint8Array;

  // Parse the data:
  let bits = 0; // Number of bits currently in the buffer
  let buffer = 0; // Bits waiting to be written out, MSB first
  let written = 0; // Next byte to write
  for (let i = 0; i < end; ++i) {
    // Read one character from the string:
    const value = encoding.codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError('Invalid character ' + string[i]);
    }

    // Append the bits to the buffer:
    buffer = (buffer << encoding.bits) | value;
    bits += encoding.bits;

    // Write out some bits if the buffer has a byte's worth:
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 0xff & (buffer >> bits);
    }
  }

  // Verify that we have received just enough bits:
  if (bits >= encoding.bits || 0xff & (buffer << (8 - bits))) {
    throw new SyntaxError('Unexpected end of data');
  }

  return out;
}
