angular.module('BSG Engine')
  .controller('FubarCtrl', function($scope, $auth) {
    $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };
  });