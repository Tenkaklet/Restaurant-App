angular.module('MyApp')
  .controller('HeaderCtrl', function ($scope, $location, $window, $auth, $rootScope) {

    $scope.openMenu = function () {
      var menu = angular.element ( document.querySelector('#menu') );
      menu.addClass('open');
    };

  });
