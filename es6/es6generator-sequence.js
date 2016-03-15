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
    let value = yield 1;
    while (true) {
        console.log("even=", value);
        value = yield value + 1;
    }
}

let dynamicSequence = generatorDynamicSequence();
let output = undefined;
let input = undefined;
do {
    output = dynamicSequence.next(input);
    console.log("odd =", output.value);
    input = output.value + 1;
} while(input < 10 && !output.done);
