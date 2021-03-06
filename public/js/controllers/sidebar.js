angular.module('MyApp')
  .controller('SidebarCtrl', function ($scope, $location, $window, $auth, $rootScope, Restaurant) {

    $scope.getLocation = function () {
      navigator.geolocation.getCurrentPosition(function (pos) {
        var userLocation = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        };
        $rootScope.$broadcast('user-location', {userLocation});
      });
    };

    $scope.find = function (rest) {
      if (rest === '') {
        return false;
      }
      
      Restaurant.search(rest)
      .then(function (data) {
        console.log(data);        
        $scope.found = data.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    };

  });
