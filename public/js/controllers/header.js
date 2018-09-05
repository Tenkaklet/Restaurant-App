angular.module('MyApp')
  .controller('HeaderCtrl', function ($scope, $location, $window, $auth, $rootScope, Account) {

    $scope.$on('current-user', function (event, args) {
      $scope.currentUser = args.user;
    });

    $scope.isAuthenticated = function () {    
      return $auth.isAuthenticated();
    };

    $scope.signOut = function () {
      $auth.logout();
    };

  });
