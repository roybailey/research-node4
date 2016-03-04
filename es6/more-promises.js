// http://www.datchley.name/es6-promises/

// an immediately resolved promise
var p2 = Promise.resolve("foo");

// can get it after the fact, unlike events
p2.then((res) => console.log(res));

var p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {
    res += 2;
    console.log(res);
});

// still gets 4
p.then((res) => console.log(res));


p = new Promise((resolve, reject) => resolve(5));
p.then((val) => console.log(val)); // 5


// A Promise that throws, rather than explicitly reject
var p1 = new Promise((resolve, reject) => {
    if (true)
        throw new Error("rejected!"); // same as rejection
    else
        resolve(4);
});

// trailing .catch() handles rejection
p1.then((val) => val + 2)
    .then((val) => console.log("got", val))
    .catch((err) => console.log("error: ", err.message));
// => error: rejected!

// A fulfilled promise
var p2 = new Promise((resolve, reject) => {
    resolve(4);
});

// Second .then throws error, .catch() still handles it
// as rejection anywhere in the processing chain of promise
p2.then((val) => val + 2)
    .then((val) => { throw new Error("step 2 failed!") })
    .then((val) => console.log("got", val))
    .catch((err) => console.log("p2 error: ", err.message));
// => error: step 2 failed!
