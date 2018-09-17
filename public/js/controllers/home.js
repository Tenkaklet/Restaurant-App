angular.module('MyApp')
  .controller('HomeCtrl', function ($scope, Restaurant) {
    var map = undefined;
    var el = undefined;
    mapboxgl.accessToken = 'pk.eyJ1IjoidGVua2FrbGV0IiwiYSI6ImNpa2xsZzhlOTAwN2t2cWxzdXpqcHpwa3EifQ.H3dNmbWFhofi9ia3AVPzFA';
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 11,
      center: [12.694512, 56.046467] // centered on Helsingborg
    });
    Restaurant.get()
      .then(function (res) {

        var restaurants = res.data;
        restaurants.forEach(function (i) {
          console.info(i);
          var latitude = i.coords.latitude;
          var longitude = i.coords.longitude;
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          
          <h4>${i.name}</h4> <br> <a href="restaurant/${i.slug}">View more</a>
          <p>Cuisine: ${i.cuisine}</p>
          `);
          el = document.createElement('div');
          el.id = 'marker';

          new mapboxgl.Marker(el)
            .setLngLat([latitude,longitude])
            .setPopup(popup)
            .addTo(map);
        });
      })
      .catch(function (err) {
        console.log(err);
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
      Restaurant.get()
      .then(function (res) {

        var restaurants = res.data;
        restaurants.forEach(function (i) {
          console.log(i);
          
          var latitude = i.coords.latitude;
          var longitude = i.coords.longitude;
          var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <h1>${i.name}<br> <a href="restaurant/${i.slug}">View more</a></h1>
          
          `);
          el = document.createElement('div');
          el.id = 'marker';

          new mapboxgl.Marker(el)
            .setLngLat([latitude, longitude])
            .setPopup(popup)
            .addTo(map);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
    });

  });
