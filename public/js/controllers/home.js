angular.module('MyApp')
  .controller('HomeCtrl', function ($scope, Contact) {
    var map = undefined;
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVua2FrbGV0IiwiYSI6ImNpa2xsZzhlOTAwN2t2cWxzdXpqcHpwa3EifQ.H3dNmbWFhofi9ia3AVPzFA';
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 11,
      center: [12.694512, 56.046467] // centered on Helsingborg
    });
    $scope.$on('user-location', function (event, args) {
      let lat = args.userLocation.latitude;
      let lng = args.userLocation.longitude;
      let userLocation = [lng, lat];
           
      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: userLocation,
        zoom: 14
      });
      
    });
    
  });
