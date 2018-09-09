angular.module('MyApp')
  .factory('Restaurant', function($http) {
    return {
      add: function(data) {
        return $http.post('/api/restaurants', data);
      },
      get: function () {
        return $http.get('/api/restaurants');
      },
    };
  });