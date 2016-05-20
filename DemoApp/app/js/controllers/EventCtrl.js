'use strict';

eventsApp.controller('EventCtrl',
    function EventCtrl($scope, eventData, $anchorScroll) {
        $scope.sortOrder = 'name';

        $scope.event = eventData.getEvent();

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        },

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);
