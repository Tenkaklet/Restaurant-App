var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    chain: Boolean,
    coords: Object,
    Address: String,
    cuisine: { type: String, required: true }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);