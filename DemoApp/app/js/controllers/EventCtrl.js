'use strict';

eventsApp.controller('EventCtrl',
    function EventCtrl($scope, eventData, $anchorScroll, $routeParams, $route) {
        $scope.sortOrder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId);

        $scope.reload = function() {
            $route.reload();
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);
