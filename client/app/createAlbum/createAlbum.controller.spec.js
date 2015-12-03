'use strict';

describe('Controller: CreateAlbumCtrl', function () {

  // load the controller's module
  beforeEach(module('rateTheMusicApp'));

  var CreateAlbumCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateAlbumCtrl = $controller('CreateAlbumCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
