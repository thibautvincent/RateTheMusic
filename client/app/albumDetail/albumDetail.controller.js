'use strict';

angular.module('rateTheMusicApp')
  .controller('AlbumDetailCtrl', function ($scope, $stateParams, $http, Auth) {
    getAlbum($stateParams);

    function getAlbum($stateParams){
      $http.get('/api/albums/' + $stateParams.id)
      .success(function(album){
        console.log(album);
        $scope.album =  album;
        $scope.album.upvotes = album.upvotes.length;
        getComments(album);
      });

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
    }
    function getComments(album){
      $scope.comments = [];
      for(var i = 0; i < album.comments.length; i++){
        $http.get('/api/comments/' + album.comments[i])
        .success(function(comment){
          $scope.comments.push(comment);
          // User.findById(comment.author, function(user){
          //   $scope.author = user.name;
          // });
          $http.get('/api/users/' + comment.author)
          .success(function(user){
            $scope.author = user.name;
          })
        });
      }
    };
    $scope.vote = function(album) {
      $http.post('/api/albums/' + album._id + '/vote/' + Auth.getCurrentUser()._id)
      .success(function(upvotes){
        $scope.album.upvotes = upvotes;
      });
    };
  });
