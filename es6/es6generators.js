// ----------------------------------------
// Generators
// ----------------------------------------
console.log("\n\nGenerators");

// * denotes a generator function
function *fooSingle() {
    "use strict";
    var name = "foo";
    var fullname = (yield name);
    // fullname = bar that was passed to generator.next call
    console.log("x=" + fullname);
    return fullname;
}

// instantiated but not executed yet
var itSingle = fooSingle();
// next() without parameter starts the execution of generators function, value = result of yield statement
var valueFromFirstYieldCallStatement = itSingle.next().value;
console.log("1=" + valueFromFirstYieldCallStatement);
// next(returnValue) parameter starts the execution of generator function again with result
var valueFromGeneratorReturnStatement = itSingle.next(valueFromFirstYieldCallStatement + " bar").value;
console.log("2=" + valueFromGeneratorReturnStatement);


// ------------------------------------------------------
// Generator Iterators
// ------------------------------------------------------
console.log("Generator Iterators...");

// create generator function with list of yielded values...
function *fooList() {
    "use strict";
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
// create iterator of generator function...
var itList = fooList();
var message;
// note the last generator object has no value
// done=false after the last value entry, not on the last value entry
// unless return is used, in which case the returned value+done=true is returned
while (!(message = itList.next()).done) {
    console.log(message);
}


// ------------------------------------------------------
// Generators with Input and Output
// ------------------------------------------------------
console.log("Generators with Input and Output...");
function *fooWithReturn(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = fooWithReturn(5);

// note: not sending anything into `next()` here
// result will be `yield x+1` and x=5 from instantiation call
console.log(it.next());     // { value:6, done:false }
// send in `12` as result of `yield x+1`, therefore (y=2*12)=24, `yield y/3` = 8
console.log(it.next(12));   // { value:8, done:false }
// send in `13` as result of `yield y/3`, therefore (x+y+z)=(5+24+13)=42
console.log(it.next(13));   // { value:42, done:true }


// ------------------------------------------------------
// Generator with async steps
// ------------------------------------------------------
function getFirstName() {
    // 4. now running thanks to yield, when finished called generator.next with result...
    setTimeout(() => gen.next('alex'), 1000);
}

function getSecondName() {
    // 6. now running thanks to yield, when finished called generator.next with result...
    setTimeout(() => gen.next('perry'), 1000);
}

function *sayHello() {
    // 3. runs getFirstName() statement async...
    var a = yield getFirstName();
    // 5. a now equals gen.next(param) value passed back, runs getSecondName() statement async...
    var b = yield getSecondName();
    // 7. b now equals gen.next(param) value passed back, output results from two async calls...
    console.log(a, b); // alex perry
}

// 1. creates the generators function...
var gen = sayHello();
// 2. runs the generator to the first yield statement...
gen.next();


// ------------------------------------------------------
// Generator with async steps
// ------------------------------------------------------
var xhr2 = require('xhr2');

function *getUrl(url) {
    // Do the usual XHR stuff
    var req = new xhr2.XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
        // return to generator the results of the async call...
        workflow.next({
            status: req.status,
            message: req.statusText,
            payload: req.response.substring(
                req.responseText.indexOf("<title>"),
                req.responseText.indexOf("</title>") + 8)
        });
    };

    // Handle network errors
    req.onerror = function () {
        // return to generator the results of the async call...
        workflow.next({
            status: 500,
            message: "Network Error"
        });
    };

    // Make the request
    var response = yield req.send();
    console.log(`inside = [${response.status}] ${response.message} payload=${response.payload}`);
    return response;
}

var workflow = getUrl("http://localhost/~roybailey");
console.log("workflow.next()=" + JSON.stringify(workflow.next()));
console.log(JSON.stringify(workflow));

