'use strict';

eventsApp.controller('EventListCtrl',
    function EventListCtrl($scope, $location, $route) {
        $scope.events = $route.current.locals.events;
    }
);