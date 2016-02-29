'use strict';

module.exports = function (config) {

    const _title = config.title;

    const TITLE = `RevealingModule(${_title})`;

    function _privateMethod(caller) {
        console.log("RevealingModule._privateMethod() called by ", caller);
    }

    function publicMethod(payload) {
        console.log("RevealingModule.publicMethod() called with ", payload);
        _privateMethod('publicMethod');
        return "RevealingModule.publicMethod() result";
    }


    return {
        name: TITLE,
        publicMethod: publicMethod
    }

};
