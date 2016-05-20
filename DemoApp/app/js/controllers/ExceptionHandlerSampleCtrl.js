'use strict';

eventsApp.controller('ExceptionHandlerSampleCtrl',
    function ExceptionHandlerSampleCtrl($scope, $timeout) {
        throw {message: 'My error message 1'};

    }
);