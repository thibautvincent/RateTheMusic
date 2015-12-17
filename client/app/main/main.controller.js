'use strict';

angular.module('rateTheMusicApp')
  .controller('MainCtrl', function ($state, $scope, $http, socket) {

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
