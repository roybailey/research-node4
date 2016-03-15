"use strict";

let reportError = function (prefix, error) {
    console.error(prefix + ": " + error);
};

let printAndReturnIncrement = function (prefix, value) {
    return new Promise((resolve, reject)=> {
        console.log(prefix + ": " + value);
        // simulated async call...
        setTimeout(()=> resolve(value + 1), 100);
    });
};

let printAndReturnIncrementThrowThree = function (prefix, value) {
    if (value === 3) {
        throw new Error("Unlucky number 3");
    }
    return printAndReturnIncrement(prefix, value);
};

Promise.resolve("Simple")
    .then((testname)=> {
        // must return a Promise here for the then to wait...
        return new Promise((resolve, reject)=> {
            console.log(testname + " Sequence Started");
            Promise.resolve(1)
                .then((value) => printAndReturnIncrement("Simple", value))
                .then((value) => printAndReturnIncrement("Simple", value))
                .then((value) => printAndReturnIncrement("Simple", value))
                .then((value) => printAndReturnIncrement("Simple", value))
                .then((value) => printAndReturnIncrement("Simple", value))
                .then(()=> {
                    console.log(testname + " Sequence Finished");
                    resolve("Swallow");
                });
        })
    })
    .then((testname)=> {
        // must return a Promise here for the then to wait...
        return new Promise((resolve, reject)=> {
            console.log(testname + " Sequence Started");
            resolve(1);
        })
            .then((value) => printAndReturnIncrementThrowThree("Swallow", value))
            .then((value) => printAndReturnIncrementThrowThree("Swallow", value))
            .then((value) => printAndReturnIncrementThrowThree("Swallow", value))
            .then((value) => printAndReturnIncrementThrowThree("Swallow", value))
            .then((value) => printAndReturnIncrementThrowThree("Swallow", value))
            .then(()=> {
                console.error(testname+" Not expected to reach here!!");
            })
            .catch((error) => {
                reportError(testname, error);
                console.log(testname + " Sequence Finished");
                // error has been dealt with, proceed with next value in Promise chain...
                return "CatchAll";
            });
    })
    .then((testname)=> {
        // must return a Promise here for the then to wait...
        console.log(testname + " Sequence Started");
        Promise.resolve(1)
            .then((value) => printAndReturnIncrementThrowThree("CatchAll", value))
            .then((value) => printAndReturnIncrementThrowThree("CatchAll", value))
            .then((value) => printAndReturnIncrementThrowThree("CatchAll", value))
            .then((value) => printAndReturnIncrementThrowThree("CatchAll", value))
            .then((value) => printAndReturnIncrementThrowThree("CatchAll", value))
            .catch((error) => {
                reportError(testname, error);
                console.log(testname + " Sequence Finished");
                // error has been dealt with, proceed with next value in Promise chain...
                return "Done";
            });
    })
    .catch((error) => reportError("TestCaseError", error));



