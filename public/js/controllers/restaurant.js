angular.module('MyApp')
  .controller('RestaurantCtrl', function($scope, $routeParams, Restaurant) {
    console.log($routeParams);
    Restaurant.getBySlug($routeParams.slug)
    .then(function (rest) {
      console.log(rest);
    })
    .catch(function (err) {
      console.log(err);
    });
    
  });
