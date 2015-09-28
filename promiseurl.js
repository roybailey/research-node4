'use strict';
var xhr2 = require('xhr2');

new Promise((resolve, reject) => {
    resolve(1);
}).then((val) => {
    console.log(val); // 1
    return val + 2;
}).then(function (val) {
    console.log(val); // 3
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
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

get('story.json').then(function (response) {
    console.log("Success!", response);
}, function (error) {
    console.error("Failed!", error);
});

get('http://localhost/~roybailey').then(function (response) {
    console.log("Success!", response);
}, function (error) {
    console.error("Failed!", error);
});
