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
      $scope.selectedalbum = album;
      $scope.songs = [];
      getSongs();
      $scope.showed[album._id] = $scope.showed[album._id] === false ? true: false;
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
    };

    $scope.deleteSong = function(song){
      $http.delete('/api/songs/'+ song._id)
      .success(function(songs){
        console.log(songs);
        getSongs();
      });
    };

    $scope.updateSong = function(song){
      $http.put('/api/songs/' + song._id, song)
      .success(function(){
        getSongs();
      });
    };

    $scope.addSong = function(song){
      //router.post('/:id/songs/:song', controller.addSong);
      $http.post('/api/albums/' + $scope.selectedalbum._id + '/songs/', song)
      .success(function(song){
        $scope.songs.push(song);
      })
    };

    function getSongs(){
      $scope.songs = [];
      for(var i = 0; i < $scope.selectedalbum.songs.length; i++){
        $http.get('/api/songs/' + $scope.selectedalbum.songs[i])
        .success(function(song){
          $scope.songs.push(song);
        });
      }
    };
  });
