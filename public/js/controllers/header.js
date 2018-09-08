angular.module('MyApp')
  .controller('HeaderCtrl', function ($scope, $location, $window, $auth, Notification, Restaurant) {

    $scope.$on('current-user', function (event, args) {
      $scope.currentUser = args.user;
    });

    $scope.isAuthenticated = function () {    
      return $auth.isAuthenticated();
    };

    $scope.signOut = function () {
      $auth.logout();
    };
    
    $scope.place = {};
    $scope.addPlace = function () {
      Restaurant.add($scope.place)
      .then(function () {
        $scope.place = {};
        var placeModal = angular.element( document.querySelector('#place-modal') );
        Notification.success('Yay! A Restaurant has been added');
        placeModal.modal('hide');
        $scope.messages = {};
        
      })
      .catch(function (response) {
        $scope.messages = {
          error: Array.isArray(response.data) ? response.data : [response.data]
        };
      });
      
    };

  });
