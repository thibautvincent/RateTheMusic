'use strict';

angular.module('rateTheMusicApp')
  .controller('MainCtrl', function ($state, $scope, $http, socket) {
    function success() {
     $rootScope.$broadcast('userLoggedIn', {});
     $state.transitionTo('/overview');
   }
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
