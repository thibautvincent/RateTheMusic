'use strict';

angular.module('rateTheMusicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createAlbum', {
        url: '/createAlbum',
        templateUrl: 'app/createAlbum/createAlbum.html',
        controller: 'CreateAlbumCtrl'
      });
  });
