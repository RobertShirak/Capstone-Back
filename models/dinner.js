const mongoose = require('./connection');
const Schema = mongoose.Schema
const dinnerSchema = new Schema({
    name: String,
    ingredients: String,
    directions: String,
    chef: String    
});
module.exports = mongoose.model('Dinner', dinnerSchema)