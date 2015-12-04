'use strict';

angular.module('rateTheMusicApp')
  .controller('CreateAlbumCtrl', function ($scope, $http) {
    $scope.create = function(form){
      $http.post('/api/albums/', form)
      .success(function(){
        console.log("test");
      });
    }
  });
