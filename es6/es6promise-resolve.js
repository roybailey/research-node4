"use strict";
import test from 'tape'

process.on('unhandledRejection', function (error, promise) {
    console.error("UNHANDLED REJECTION", error.stack);
});


test((assert)=> {

    Promise.resolve(1)
        .then((valueNumber)=> {
            assert.pass('valueNumber');
            console.log(valueNumber);
            return Promise.resolve([1, 2, 3]);
        })
        .then((valueArray)=> {
            assert.pass('valueArray');
            console.log(valueArray);
            return Promise.resolve({statusCode: 400, message: 'Bad Request'});
        })
        .then((valueObject)=> {
            assert.pass('valueObject');
            console.log(valueObject);
            assert.end();
        })
        .catch((error)=> {
            console.error(error);
            assert.end(error);
        })

});