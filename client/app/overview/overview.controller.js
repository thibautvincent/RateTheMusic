'use strict';

angular.module('rateTheMusicApp')
  .controller('OverviewCtrl', function ($scope, $http) {
    $scope.albums = [];

    $http.get('/api/albums').success(function(albums) {
      $scope.albums = albums;
    });
  });
