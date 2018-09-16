var Restaurant = require('../models/Restaurant');
var geo = require('mapbox-geocoding');

geo.setAccessToken(process.env.MAPBOX_KEY);

exports.getRestaurant = function (req, res) {
    console.log('getting restaurants');
    
    Restaurant.find({})
        .exec(function (err, restaurants) {
            res.send(restaurants);
        });
};

exports.getBySlug = function ( req, res) {
    console.log('getting individual restaurant');
    Restaurant.findOne({slug: req.params.slug}, function (err, restaurant) {
        if(err) {
            return res.status(400).send(err);
        }
        res.send(restaurant);
    });
};

exports.addRestaurant = function (req, res) {
    Restaurant.findOne({ id: req.body }, function (err, restaurant) {
        if (err) {
            return res.status(400).send(err);
        }
        var address = req.body.address.street + ',' + req.body.address.city + ',' + req.body.address.postCode;
        console.log('address check');
        
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
                var location = {
                    latitude: map.features[0].center[0],
                    longitude: map.features[0].center[1]
                };
                var contact = {
                    street: req.body.address.street,
                    city: req.body.address.city,
                    postCode: req.body.address.postCode
                };

                var user = {
                    name: req.user.name,
                    id: req.user._id,
                    email: req.user.email
                };

                restaurant = new Restaurant({
                    name: req.body.name,
                    chain: req.body.chain,
                    coords: location,
                    cuisine: req.body.cuisine,
                    address: contact,
                    created_by: user,
                    phoneNumber: req.body.phoneNumber,
                    email: req.body.email
                });
                restaurant.save(function (err) {
                    res.status(200).send(restaurant);
                });
            }
        });
        

    });
};