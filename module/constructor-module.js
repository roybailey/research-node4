'use strict';

/*
    Constructor Module
    exports a function taking parameters needed to create an instance
 */
module.exports = function (config) {

    const _title = config.title;

    const TITLE = `ConstructorModule(${_title})`;

    function _privateMethod(caller) {
        console.log("ConstructorModule._privateMethod() called by ", caller);
    }

    function publicMethod(payload) {
        console.log("ConstructorModule.publicMethod() called with ", payload);
        _privateMethod('publicMethod');
        return "ConstructorModule.publicMethod() result";
    }

    return {
        name: TITLE,
        publicMethod: publicMethod
    }

};
