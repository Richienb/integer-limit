import test from "ava"
import integerLimit from "."

test("main", (t) => {
    t.is(integerLimit(32), 2147483648)
    t.is(integerLimit(64), 9223372036854776000)
    t.is(integerLimit(64, { bigint: true }), 9223372036854775808n)
})
