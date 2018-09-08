angular.module('MyApp')
  .factory('Restaurant', function($http) {
    return {
      add: function(data) {
        return $http.post('/restaurants', data);
      },
      get: function () {
        return $http.get('/restaurants');
      },
    };
  });