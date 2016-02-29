'use strict';

module.exports = (function (RevealingModule) {

    var _additive = 'spice';

    function _privateMethod(caller) {
        console.log(`WrapperModule._privateMethod(caller=${caller}, additive=${_additive})`);
    }

    function publicMethod(payload) {
        console.log("WrapperModule.publicMethod() called with ", payload);
        _privateMethod('publicMethod');
    }

    RevealingModule.wrapperData = 100;
    RevealingModule.wrapperExtension = publicMethod;

    return RevealingModule;

});
