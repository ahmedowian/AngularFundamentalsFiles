'use strict';

eventsApp.directive('mySample', function($compile) {
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
        scope: {

        }
        //link: function(scope, element, attrs, controller) {
        //    var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
        //    angular.element(element).html($compile(markup)(scope));
        //}
    };
})