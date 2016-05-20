'use strict';

eventsApp.factory('$exceptionHandler', function() {
    return function (exception) {
        console.log("Oooh, an exception: " + exception.message);
    };
});
