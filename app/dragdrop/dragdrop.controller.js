'use strict';

angular.module('eventx')
  .controller('DragdropCtrl', function ($scope,CalendarEvent,Auth) {
      
    $scope.userInfo = {}  
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.getCurrentUser(function(user) {
      $scope.currentUser = user;
      $scope.userInfo.user = $scope.currentUser.name;
      $scope.userInfo.createdDate = new Date();
    });

    CalendarEvent.query().$promise.then(response => {
      $scope.draggedEvents = response
      // socket.syncUpdates('events', $scope.draggedEvents);
    });
  });
