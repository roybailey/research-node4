'use strict';
import test from 'tape'


// spread will spray an array into arguments
test('ES6 Spread feature', (assert) => {

    let oneToFive = [1, 2, 3, 4, 5];
    let sixToTen = [6, 7, 8, 9, 10];
    let oneToTen = [...oneToFive, ...sixToTen];

    console.log(oneToTen);
    assert.deepEqual(oneToTen, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    assert.end();
});


test('ES6 Rest Parameters feature', (assert) => {

    // rest parameters collect arguments into array...
    let add = function (...numbers) {
        return numbers.reduce((a, b)=>a + b);
    };

    let actual = add(1, 2, 3, 4, 5);
    console.log(actual);
    assert.equal(actual, 15);

    assert.end();
});


test('ES6 Rest Parameters feature', (assert) => {

    let multiplier = function (multiplier, ...numbers) {
        return numbers.map(n=>n * multiplier);
    };

    let actual = multiplier(10, 1, 2, 3, 4, 5);
    console.log(actual);
    assert.deepEqual(actual, [10, 20, 30, 40, 50]);

    assert.end();
});
