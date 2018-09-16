var mongoose = require('mongoose');
var getSlug = require('speakingurl');


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
    },
    phoneNumber: String,
    email: String,
    slug: { type: String, unique: true}
});

restaurantSchema.index({'$**' : 'text'});

restaurantSchema.pre('save', function (next) {
    this.slug = getSlug(this.name);
    next();
});

module.exports = mongoose.model('Restaurant', restaurantSchema);