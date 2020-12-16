const mongoose = require('./connection');
const Schema = mongoose.Schema
const dessertsSchema = new Schema({
    name: String,
    ingredients: String,
    directions: String,
    chef: String    
});
module.exports = mongoose.model('Desserts', dessertsSchema)