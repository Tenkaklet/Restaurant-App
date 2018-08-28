angular.module('MyApp')
  .controller('HomeCtrl', function ($scope, Contact) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVua2FrbGV0IiwiYSI6ImNpa2xsZzhlOTAwN2t2cWxzdXpqcHpwa3EifQ.H3dNmbWFhofi9ia3AVPzFA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  });
