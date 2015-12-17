'use strict';

angular.module('rateTheMusicApp')
  .controller('CreateAlbumCtrl', function ($scope, $http, $location) {
    $scope.create = function(form){
      if(form !== null){
        $http.post('/api/albums/', form)
        .success(function(){
          $location.path('/albums');
        });
    }
  };
  });
