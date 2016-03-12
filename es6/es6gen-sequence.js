"use strict";

// create generator function with list of yielded values...
// here we yield odd numbers
console.log("----- Generator Static Sequence -----");

function *generatorStaticSequence() {
    let e1 = yield 1;
    console.log("even=", e1);
    let e2 = yield 3;
    console.log("even=", e2);
    let e3 = yield 5;
    console.log("even=", e3);
    let e4 = yield 7;
    console.log("even=", e4);
    let e5 = yield 9;
    console.log("even=", e5);
}

let staticSequence = generatorStaticSequence();
let o1 = staticSequence.next();
console.log("odd =", o1.value);
let o2 = staticSequence.next(2);
console.log("odd =", o2.value);
let o3 = staticSequence.next(4);
console.log("odd =", o3.value);
let o4 = staticSequence.next(6);
console.log("odd =", o4.value);
let o5 = staticSequence.next(8);
console.log("odd =", o5.value);

console.log("----- Generator Sequence Using a Loop -----");
function *generatorDynamicSequence() {
    let e1 = yield 1;
    console.log("even=", e1);
    let e2 = yield e1+1;
    console.log("even=", e2);
    let e3 = yield e2+1;
    console.log("even=", e3);
    let e4 = yield e3+1;
    console.log("even=", e4);
    let e5 = yield e4+1;
    console.log("even=", e5);
}

let dynamicSequence = generatorDynamicSequence();
let output = undefined;
let input = undefined;
while (!(output = dynamicSequence.next(input)).done) {
    console.log("odd =", output.value);
    input = output.value + 1;
}
