'use strict';

eventsApp.controller('EventCtrl', 
   function EventCtrl($scope) {
      
      $scope.snippet = '<span style="color:red">hi there</span>';
      $scope.boolValue = true;
      $scope.myStyle = {color:'red'};
      $scope.myClass = "blue";
      $scope.myDisabled = true;
      $scope.sortOrder = 'name';

      $scope.event = {
         name: 'Angular Boot Camp',
         date: '1/1/2013',
         time: '10:30 am',
         location: {
            address: 'Morneau Shepell 115 Perimeter Center Pl #1150', 
            city: 'Atlanta', 
            state: 'GA',
            zip: '30346', 
            country: 'United States'
         },
         imageUrl: '/img/angularjs-logo.png',
         sessions: [
            {
               name: 'Directives Masterclass Introductory',
               creatorName: 'Bob Smith',
               duration: 1,
               level: 'Intermediate',
               abstract: 'In this session you will learn the ins and outs of directives.',
               upVoteCount: 0
            },
            {
               name: 'Scopes for fun and profit',
               creatorName: 'Bob Smith',
               duration: 2,
               level: 'Advanced',
               abstract: 'In this session you will learn the ins and outs of directives.',
               upVoteCount: 0
            },
            {
               name: 'Jell Behaved Controllers', creatorName: 'Bob Smith',
               duration: 4,
               level: 'Introductory',
               abstract: 'In this session you will learn the ins and outs of directives.',
               upVoteCount: 0
            }
         ]
      }

      $scope.upVoteSession = function(session) {
         session.upVoteCount++;
      }

      $scope.downVoteSession = function(session) {
         session.upVoteCount--;
      }
   }
);
