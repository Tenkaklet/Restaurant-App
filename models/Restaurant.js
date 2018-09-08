var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    chain: Boolean,
    coords: { type: Object, require: true},
    cuisine: { type: String, required: true },
    address: Object
});

module.exports = mongoose.model('Restaurant', restaurantSchema);