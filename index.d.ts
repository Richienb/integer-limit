/**
 * Calculate the integer limit given the amount of bits used. (example: 32-bit limit).
 * @param bits The amount of bits allowed to be used in order to represent numbers.
 * @example
 * ```
 * const integerLimit = require("integer-limit");
 *
 * integerLimit(); // Get current integer limit
 * 9223372036854776000
 *
 * integerLimit(32); // Get integer limit for 32 bits
 * //=> 2147483648
 *
 * integerLimit(64); // Get integer limit for 64 bits
 * //=> 9223372036854776000
 *
 * integerLimit(64, {bigint: true}); // Get integer limit 64 bits as a bigint
 * //=> 9223372036854775808n
 * ```
*/
declare function integerLimit(bits?: number, options?: { bigint?: boolean }): number;

export = integerLimit;
