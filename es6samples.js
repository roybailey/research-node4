'use strict';

console.log("\n\n1. Template Strings");
// ES6 brings us template strings:

var multiLineMessage = `
    The quick brown fox
        jumps over
        the lazy dog
`;
console.log(multiLineMessage);

// inline string variables...
var inlineName = 'Roy';
var inlineMessage = `Hello ${inlineName}, how is your dog?`;
console.log(inlineMessage);


console.log("\n\n2. Classes");
// An extends keyword, constructors, calls to the super class and properties.

class Pet {
    constructor(name) {
        this._name = name;
    }

    sayHello() {
        console.log('*scratch*');
    }

    get name() {
        return this._name;
    }
}

class Dog extends Pet {
    constructor(name) {
        super(name);
    }

    sayHello() {
        super.sayHello();
        console.log('whoof!');
    }
}

new Pet().sayHello();
console.log("^that was pet");
new Dog().sayHello();
console.log("^that was dog");


console.log("\n\n3. Arrow Functions");
// 'this' is now bound correctly in an arrow function to the calling 'this' object
Dog.prototype.notifyListeners = () => {
    this._listeners.forEach((listener) => {
        this.notifyListener(listener);
    });
};
console.log("Pet.notifyListeners = "+ Pet.prototype['notifyListeners']);
console.log("Dog.notifyListeners = "+ Dog.prototype['notifyListeners']);


console.log("\n\n4. Object Literals");
// When using object literals, you can now use a nice little shortcut:
// where the result is object built as { variablename : variable-value, ... }
var age = 10, name = 'Spot', size = 32;
var dog = {
    age,
    name,
    size
};

console.log(dog);


console.log("\n\n5. String Methods");
// We got a couple of new string utility functions too:
// replace `indexOf()` in a number of cases
var something = "Javascript";
console.log(`Javascript.startsWith('a') = ${something.startsWith('a')}`);
console.log(`Javascript.startsWith('J') = ${something.startsWith('J')}`);
console.log(`Javascript.endsWith('a') = ${something.endsWith('a')}`);
console.log(`Javascript.endsWith('t') = ${something.endsWith('t')}`);
console.log(`Javascript.includes('b') = ${something.includes('b')}`);
console.log(`Javascript.includes('v') = ${something.includes('v')}`);

// repeat the string three times
console.log(`Javascript.repeat(3) = ${something.repeat(3)}`);


console.log("\n\n6. let and const");
// Guess the return value of the following function call:

var x1 = 20;
var x1result = () => {
    if (x1 === 20) {
        var x1 = 30;
    }
    return x1;
}; // -> undefined
console.log("x1=" + x1result());

// Yep, undefined.Replace var with let and you get the expected behaviour:

let x2 = 20;
var x2result = () => {
    if (x2 === 20) {
        let x2 = 30;
    }
    return x2;
}; // -> 20
console.log("x2=" + x2result());

// The reason: var is function -scoped, while let is block - scoped(which is what most people expect ).
// Because of that, it is save to say that let is the new var.
// Node now supports the const keyword, which prevents you from reassigning a different value
// to the same reference:
// var MY_CONST = 42; // no, no
// const MY_CONST = 42; // yes, yes
// MY_CONST = 10 // with const, this is no longer possible

console.log("\n\n7. Promises");

var p1 = new Promise(function (resolve, reject) {
    resolve(55);
});
var p2 = Promise.resolve(20);
var p3 = Promise.reject(new Error());
var p4 = Promise.all([p1, p2]);
var p5 = Promise.race([p1, p2]);

p1.then((data) => {
    console.log("p1 resolved: " + data);
}).catch((error) => {
    console.log("p1 error: " + error);
});
p2.then((data) => {
    console.log("p2 resolved: " + data);
}).catch((error) => {
    console.log("p2 error: " + error);
});
p3.then((data) => {
    console.log("p3 resolved: " + data);
}).catch((error) => {
    console.log("p3 error: " + error);
});
p4.then((data) => {
    console.log("p4 resolved: " + data);
}).catch((error) => {
    console.log("p4 error: " + error);
});
