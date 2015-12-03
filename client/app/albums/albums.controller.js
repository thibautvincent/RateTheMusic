'use strict';

angular.module('rateTheMusicApp')
  .controller('AlbumsCtrl', function ($scope, Auth, $http) {

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
      $http.get('/api/albums/'+ album._id+'/songs')
      .succes(function(songs){
        console.log(songs);
        $scope.showed = $scope.showed === false ? true: false;
        return album._id;
      });
    };

    $scope.update = function(album,form){
      if(form.$valid) {
        $http.put('/api/albums/' + album._id, form)
        .success(function(album){
          $http.get('/api/albums')
          .success(function(albums){
            $scope.albums = albums;
          });
        });
      }).catch( function(err) {
        err = err.data;
        $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }

      $scope.create = function(){
        console.log("test");
      };

    }
  });
