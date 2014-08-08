'use strict';

describe('Controller: BensctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('transpAppApp'));

  var BensctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BensctrlCtrl = $controller('BensctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
