'use strict';

const STATUS = 'Node v4.0 is so good';

let fakeCollection = ['fake1', 'fake2', 'fake3', 'fake4'];

let printPromisefiedFakeStuff = new Promise((resolve, reject)=> {

    let fakePromiseCollection = fakeCollection.map((item)=> {
        return `Promisefied ${item}`;
    });

    setTimeout(()=> {
        resolve(fakePromiseCollection);
    }, 1000);
});

fakeCollection.forEach((item, i)=> {
    console.log(`Item ${i + 1}: ${item}`);
});

printPromisefiedFakeStuff.then((result)=> {
    result.forEach((item, i)=> {
        console.log(`Item ${i + 1}: ${item}`);
    });
    console.log(`With native es2015 features like let, const, arrow functions, template strings, promises, and more... ${STATUS}`);
});
