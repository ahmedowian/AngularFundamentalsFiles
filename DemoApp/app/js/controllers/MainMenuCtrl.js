'use strict';

eventsApp.controller('MainMenuCtrl',
    function MainMenuCtrl($scope, $location) {
        $scope.createEvent = function() {
            $location.url('/newEvent');
        };
    }
);