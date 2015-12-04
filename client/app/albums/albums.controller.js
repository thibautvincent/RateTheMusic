'use strict';

angular.module('rateTheMusicApp')
  .controller('AlbumsCtrl', function ($scope, Auth, $http) {

    $http.get('/api/albums')
    .success(function(albums){
      $scope.albums = albums;
      $scope.showed = [];
      for(var i = 0; i < albums.length; i++){
        var id = albums[i]._id;
        $scope.showed[id]= false;
      }
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
      $scope.songs = [];
      for(var i = 0; i < album.songs.length; i++){
        $http.get('/api/songs/' + album.songs[i])
        .success(function(song){
          $scope.songs.push(song);
        });
      }
      $scope.showed[album._id] = $scope.showed[album._id] === false ? true: false;
      // $http.get('/api/albums/'+ id +'/songs')
      // .success(function(songs){
      //   console.log(songs);
      //
      // });
    };

    $scope.update = function(album,form){
      if(form!=null) {
        $http.put('/api/albums/' + album._id, form)
        .success(function(){
          $http.get('/api/albums')
          .success(function(albums){
            $scope.albums = albums;
          });
        });
      }
    }

      $scope.create = function(){
        console.log("test");
      };
  });
