'use strict';

angular.module('rateTheMusicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('albums', {
        url: '/albums',
        templateUrl: 'app/albums/albums.html',
        controller: 'AlbumsCtrl'
      });
  });
