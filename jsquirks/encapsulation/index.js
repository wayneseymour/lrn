(function() {
    /*jshint unused:false */
    'use strict';

    function fnThatReturnsObject() {
        return function returnThatObjectIMentioned() {
            return {
                user: "Andrew P.",
                state: "Looks forward to EcmaScript 6"
            };
        };
    }
}());
