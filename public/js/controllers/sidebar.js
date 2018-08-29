angular.module('MyApp')
  .controller('SidebarCtrl', function ($scope, $location, $window, $auth, $rootScope) {

    $scope.getLocation = function () {
      navigator.geolocation.getCurrentPosition(function (pos) {
        var userLocation = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
        $rootScope.$broadcast('user-location', {userLocation});
        
      });
    };

  });
