'use strict';

eventsApp.controller('EditEventCtrl', 
   function EditEventCtrl($scope) {
      
      $scope.saveEvent = function(event, newEventForm) {
         console.log(newEventForm);

         if (newEventForm.$valid) {
            window.alert(event.name + ' ' + event.date + ' got saved!');
         }
      }

      $scope.cancelEdit = function() {
         window.location = "/EventDetails.html";         
      }      
   }
);
