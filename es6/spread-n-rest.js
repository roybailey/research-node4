'use strict';

// spread will spray an array into arguments

let oneToFive = [1,2,3,4,5];
let sixToTen = [6,7,8,9,10];
let oneToTen = [...oneToFive,...sixToTen];

// [1,2,3,4,5,6,7,8,9,10]
console.log(oneToTen);

// rest parameters collect arguments into array...

let add = function(...numbers) {
    return numbers.reduce((a,b)=>a+b);
};

// 15
console.log(add(1,2,3,4,5));

let multiplier = function(multiplier,...numbers) {
    return numbers.map(n=>n*multiplier);
};

// [10,20,30,40,50]
console.log(multiplier(10,1,2,3,4,5));
