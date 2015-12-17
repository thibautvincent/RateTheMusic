'use strict';

angular.module('rateTheMusicApp')
  .controller('AlbumDetailCtrl', function ($scope, $stateParams, $http, Auth) {
      init($stateParams);

    function init($stateParams){
      $http.get('/api/albums/' + $stateParams.id)
      .success(function(album){
        $scope.album = album;
        $scope.upvotes = album.upvotes.length;
        getComments(album);
        $scope.songs = getSongs(album.songs);
        changeLike(album.upvotes);
      });
    }

    function getSongs(songs){
      var tempSongs = [];
      for(var i = 0; i < songs.length; i++){
        $http.get('/api/songs/' + songs[i])
        .success(function(song){
          tempSongs.push(song);
        });
      }
      return tempSongs;
    }

    $scope.addComment = function(comment){
      //apicall to add comment
      comment.author = Auth.getCurrentUser()._id;
      if($scope.content || $scope.content === '') {return ;}
      $http.post('/api/albums/' + $stateParams.id + '/comment/', comment)
      .success(function(album){
        getComments(album);
      }).error(function(err){
        console.log(err);
      });
    };

    function getComments(album){
      $scope.comments = [];
      for(var i = 0; i < album.comments.length; i++){
        $http.get('/api/comments/' + album.comments[i])
        .success(function(comment){
          $scope.comments.push(comment);
          $http.get('/api/users/' + comment.author)
          .success(function(user){
            $scope.author = user.name;
          });
        });
      }
    }

    $scope.vote = function(album) {
      $http.post('/api/albums/' + album._id + '/vote/' + Auth.getCurrentUser()._id)
      .success(function(upvotes){
        $scope.upvotes = upvotes.length;
        changeLike(upvotes);
      });
    };

    function changeLike(upvotes){
      if(upvotes.length === 0){
        unlike();
      }
      angular.forEach(upvotes, function(vote){
        if(vote === Auth.getCurrentUser()._id){
          like();
        }else{
          unlike();
        }
      });
    }

    function like(){
      $('#likebtn').addClass('liked');
    }

    function unlike(){
      $('#likebtn').removeClass('liked');
    }
  });
