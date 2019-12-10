"use strict"

const arch = require("arch")

module.exports = (bits = arch() === "x64" ? 64 : 32, { bigint = false } = {}) => bigint ? BigInt(2 ** bits / 2) : 2 ** bits / 2
