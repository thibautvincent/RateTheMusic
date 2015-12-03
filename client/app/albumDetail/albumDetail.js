'use strict';

angular.module('rateTheMusicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('albumDetail', {
        url: '/albumDetail/:id',
        templateUrl: 'app/albumDetail/albumDetail.html',
        controller: 'AlbumDetailCtrl'
      });
  });
