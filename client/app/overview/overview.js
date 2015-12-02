'use strict';

angular.module('rateTheMusicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'app/overview/overview.html',
        controller: 'OverviewCtrl'
      });
  });