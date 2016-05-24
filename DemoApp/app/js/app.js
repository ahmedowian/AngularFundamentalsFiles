'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller:'EditEventCtrl'
            });
        $routeProvider.when('/events',
            {
                templateUrl:'templates/EventList.html',
                controller:'EventListCtrl',
                resolve: {
                    events: function($route, eventData) {
                        return eventData.getAllEvents().$promise;
                    }
                }
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl:'templates/EventDetails.html',
                controller:'EventCtrl'
            });

        $routeProvider.when('/editProfile',
            {
                templateUrl:'templates/EditProfile.html',
                controller:'EditProfileController'
            });
        $routeProvider.when('/about',
            {
                template:'Ahmed Owian\'s Angular Fundamentals App<br/>Version 1'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveCtrl'
            });
        $routeProvider.otherwise({redirectTo:'/events'});

        $locationProvider.html5Mode(true);

    });
