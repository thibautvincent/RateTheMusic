'use strict';

describe('Controller: AlbumDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('rateTheMusicApp'));

  var AlbumDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumDetailCtrl = $controller('AlbumDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
