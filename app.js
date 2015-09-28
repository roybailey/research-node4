'use strict';

const STATUS = 'Node v4.0 is so good';

let fakeCollection = ['fake1', 'fake2', 'fake3', 'fake4'];

let printPromisefiedFakeStuff = new Promise((resolve, reject)=> {

    let fakePromiseCollection = fakeCollection.map((item)=> {
        return `Promisefied ${item}`;
    });

    console.log('Created Promisefied Fake Collection');

    setTimeout(()=> {
        resolve(fakePromiseCollection);
    }, 1000);
});

fakeCollection.forEach((item, i)=> {
    console.log(`Item ${i + 1}: ${item}`);
});

console.log('Using Promisefied Fake Collection');

printPromisefiedFakeStuff.then((result)=> {
    console.log("Promise Fulfilled");
    result.forEach((item, i)=> {
        console.log(`Item ${i + 1}: ${item}`);
    });
    console.log(`With native es2015 features like let, const, arrow functions, template strings, promises, and more... ${STATUS}`);
}, (error) => {
    console.log("Promise Rejected");
});
