const mongoose = require('mongoose');

let RestaurantSchema = mongoose.Schema({
    name:String,
    pic:String,
    menu:[{foodName:String,foodPrice:String}]
});

module.exports = mongoose.model('Restaurant',RestaurantSchema);