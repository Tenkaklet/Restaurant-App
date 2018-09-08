var Restaurant = require('../models/Restaurant');
var geo = require('mapbox-geocoding');

geo.setAccessToken(process.env.MAPBOX_KEY);




exports.getRestaurant = function (req, res) {
    Restaurant.find({})
        .exec(function (err, restaurants) {
            res.send(restaurants);
        });
};

exports.addRestaurant = function (req, res) {
    Restaurant.findOne({ id: req.body }, function (err, restaurant) {
        if (err) {
            return res.status(400).send(err);
        }
        var address = req.body.address.street + ',' + req.body.address.city + ',' + req.body.address.postCode;
        console.log(address);
        function numberWithSpaces(x) {
            // return x.slice(3,5).split('').join(' ');
            // return x.replace(x.slice(3,5), "max");
            // return x.slice(2,4).split('');
            return x.replace(/.{2}$/,' $&');
        }
        console.log('unedited postal code ', req.body.address.postCode);
        
        
        console.log('address check');
        // console.log('the body request ', req.body.address);
        geo.geocode('mapbox.places', address, function (err, map) {
            
            if (err) {
                return res.status(400).send(err);
            }
            
            if (map.features[0].context[0].text !=  req.body.address.postCode) {
                console.log('not right address');
                res.status(400).json({msg: 'Could not find the correct address'});
            } else {
                // if all is ok with checking... do this
                console.log('the map ', map.features[0]);
                console.log('right address');
                restaurant = new Restaurant({
                    name: req.body.name,
                    chain: req.body.chain,
                    coords: req.body.coords,
                    cuisine: req.body.cuisine,
                    address: req.body.address
                });
                restaurant.save(function (err) {
                    res.status(200).send(restaurant);
                });
            }
        });
        

    });
};