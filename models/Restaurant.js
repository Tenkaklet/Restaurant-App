var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: String,
    chain: Boolean,
    coords: Object,
    cuisine: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);