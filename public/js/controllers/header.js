angular.module('MyApp')
  .controller('HeaderCtrl', function ($scope, $location, $window, $auth, $rootScope) {

    $scope.$on('current-user', function (event, args) {
      console.log('user', args);
      $scope.currentUser = args.user;
    });

    $scope.isAuthenticated = function () {
      return $auth.isAuthenticated();
    };

  });
