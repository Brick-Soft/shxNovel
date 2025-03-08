import { deepEqual } from '../src/lib/core/deepEqual';

function assert(res) {
    let result = res;
    if (typeof res === 'function') result = res();
    if (!result) throw Error();
}

assert(deepEqual(1, 1));
assert(deepEqual(Infinity, Infinity));
assert(deepEqual(1, 2) === false);

assert(deepEqual(null, null));
assert(deepEqual(undefined, undefined));
assert(deepEqual(undefined, null) === false);

assert(deepEqual([], []));
assert(deepEqual([1], [1]));
assert(deepEqual([1, 2, 3], [1, 2, 3]));
assert(deepEqual([1, 2, 3], [1, 2]) === false);
assert(deepEqual([1, 2, 3], [1, 2, 4]) === false);

assert(deepEqual({}, {}));
assert(deepEqual({ a: 1 }, { a: 1 }));
assert(deepEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] }));
assert(deepEqual({ a: [1, 2, { a: 1 }] }, { a: [1, 2, { a: 1 }] }));

let a = { x: [1, 2, 3], y: [] };
let b = { x: [1, 2, 3], y: [] };
a.y = b;
b.y = a;

assert(deepEqual(a, b));

assert(deepEqual({ a: [1, 2, { a: 1 }] }, { a: [1, 2, { a: 2 }] }) === false);
assert(deepEqual({ a: [1, 2, { a: 1 }] }, { a: [1, 2, { a: [1] }] }) === false);
assert(deepEqual({ a: [1, 2, { a: 1 }] }, { a: [1, 2, {}] }) === false);

console.log('OK! passed!');
