'use strict';

eventsApp.controller('SampleCtrl',
    function SampleCtrl($scope, $timeout) {
        var promise = $timeout(function() {
            $scope.name = "Ahmed Owian";
        }, 3000);

        $scope.cancel = function() {
            $timeout.cancel(promise);
        }



    }
);