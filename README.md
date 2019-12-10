# Integer limit [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/integer-limit/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/integer-limit)

Calculate the integer limit given the amount of bits used. (example: 32-bit limit).

[![NPM Badge](https://nodei.co/npm/integer-limit.png)](https://npmjs.com/package/integer-limit)

## Install

```sh
npm install integer-limit
```

## Usage

```js
const integerLimit = require("integer-limit");

integerLimit(); // Get current integer limit
9223372036854776000

integerLimit(32); // Get integer limit for 32 bits
//=> 2147483648

integerLimit(64); // Get integer limit for 64 bits
//=> 9223372036854776000

integerLimit(64, {bigint: true}); // Get integer limit 64 bits as a bigint
//=> 9223372036854775808n
```

## API

### integerLimit(bits?, options?)

#### bits

Type: `number`

The amount of bits allowed to be used in order to represent numbers.

#### options

Type: `object`

##### bigint

Type: `boolean`\
Default: `false`

Convert the amount of bits to a BigInt.
