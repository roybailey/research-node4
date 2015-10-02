'use strict';
var xhr2 = require('xhr2');

new Promise((resolve, reject) => {
    resolve(1);
}).then(function (val) {
        console.log(val); // 1
        // returns a promise
        return val + 2;
    }).then(function (val) {
        console.log(val); // 3
    });

new Promise((resolve, reject) => {
    reject("Bad");
}).then(function (val) {
        console.log(val);
    }, function (err) {
        console.log("Error " + err); // Bad
    });


function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new xhr2.XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            console.log(`url[${url}] response[${req.status}]`);
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve({
                    status: req.status,
                    message: req.statusText,
                    payload: req.response.substring(
                        req.responseText.indexOf("<title>"),
                        req.responseText.indexOf("</title>") + 8)
                });
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject({
                    status: req.status,
                    message: req.statusText
                });
            }
        };

        // Handle network errors
        req.onError = function () {
            console.log(`url[${url}] Network Error`);
            reject({
                status: 500,
                message: "Network Error"
            });
        };

        // Make the request
        req.send();
    });
}

get('doesnotexist.json')
    .then(function (response) {
        console.log("Success!", response);
    }, function (error) {
        console.error("Failed!", JSON.stringify(error));
    });

get('http://localhost/~roybailey').then((response) => {
    console.log("Success!", response);
}, function (error) {
    console.error("Failed!", error);
});


// ------------------------------------------------------
// Generator with Promises
// ------------------------------------------------------

var ajaxGenerator = function*(url) {
    var result1 = yield get(url);
    var result2 = yield get(url);
    console.log({result1: result1, result2: result2})
};
var testGenerator = new ajaxGenerator('http://localhost/~roybailey');
var result1Promise = testGenerator.next().value
    .then((result1) => {
        var result2Promise = testGenerator.next(result1).value
            .then((result2) => {
                testGenerator.next(result2);
            });
    });
