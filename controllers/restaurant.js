var Restaurant = require('../models/Restaurant');


exports.getRestaurant = function (req, res) {
    Restaurant.find({})
    .exec(function (err, restaurants) {
        res.send(restaurants);
    });
};

exports.addRestaurant = function (req, res) {
    Restaurant.findOne({ id: req.body }, function (err, restaurant) {
        if(err) {
            return res.status(400).send(err);
        }
        restaurant = new Restaurant({
            name: req.body.name,
            chain: req.body.chain,
            coords: req.body.coords,
            cuisine: req.body.cuisine
        });
        restaurant.save(function (err) {
            res.status(200).send(restaurant);
        })
        
    });
};