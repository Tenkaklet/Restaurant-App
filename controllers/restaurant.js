var Restaurant = require('../models/Restaurant');


exports.getRestaurant = function (req, res) {
    Restaurant.find({})
    .exec(function (err, restaurants) {
        res.send(restaurants);
    });
};