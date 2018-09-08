angular.module('MyApp')
  .controller('HeaderCtrl', function ($scope, $location, $window, $auth, $rootScope, Restaurant) {

    $scope.$on('current-user', function (event, args) {
      $scope.currentUser = args.user;
    });

    $scope.isAuthenticated = function () {    
      return $auth.isAuthenticated();
    };

    $scope.signOut = function () {
      $auth.logout();
    };

    $scope.addPlace = function (place) {
      Restaurant.add(place)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (response) {
        $scope.messages = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
      
    };

  });
