var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    chain: Boolean,
    coords: { type: Object, require: true},
    cuisine: { type: String, required: true },
    address: Object,
    created_by: {
        name: String,
        id: String,
        email: String
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);