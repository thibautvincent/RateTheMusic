'use strict';

angular.module('rateTheMusicApp')
  .controller('AlbumsCtrl', function ($scope, Auth, $http) {
    $scope.showed = false;

    $http.get('/api/albums')
    .success(function(albums){
      $scope.albums = albums;
    });

    $scope.delete = function(album) {
      $http.delete('/api/albums/' + album._id)
      .success(function(){
        angular.forEach($scope.albums, function(u, i) {
          if (u === album) {
            $scope.albums.splice(i, 1);
          }
        });
      });
    };

    $scope.albumdDetails = function(album){
      $scope.showed = $scope.showed === false ? true: false;
    }
  });
