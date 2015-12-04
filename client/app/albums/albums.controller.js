'use strict';

angular.module('rateTheMusicApp')
  .controller('AlbumsCtrl', function ($scope, Auth, $http) {
    $scope.open = [];
    $scope.songs = [];

    $http.get('/api/albums')
    .success(function(albums){
      $scope.albums = albums;
      for(var i = 0; i < albums.length; i++){
        $scope.open[albums[i]._id] = false;
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
      $scope.songs = getSongs(album.songs);
      changeStatus(album);
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
        $scope.songs = getSongs(songs);
      });
    };

    $scope.updateSong = function(song){
      $http.put('/api/songs/' + song._id, song)
      .success(function(songs){
        $scope.songs = getSongs(songs);
      });
    };

    $scope.addSong = function(song){
      $http.post('/api/albums/' + $scope.selectedalbum._id + '/songs/', song)
      .success(function(song){
        $scope.songs.push(song);
      })
      .error(function(err){
        console.log(err);
      })
    };

    function getSongs(songs){
      var tempSongs = [];
      for(var i = 0; i < songs.length; i++){
        $http.get('/api/songs/' + songs[i])
        .success(function(song){
          tempSongs.push(song);
        });
      }
      return tempSongs;
    };

    function changeStatus(album){
      $http.get('/api/albums')
      .success(function(albums){
        for (var i = 0; i < albums.length; i++) {
          if(albums[i]._id === album._id){
            if($scope.open[album._id] === true){
              $scope.open[album._id] = false;
            }else{
              $scope.open[album._id] = true;
            }
          }else{
            $scope.open[albums[i]._id] = false;
          }
        }
      })
    }
  });
