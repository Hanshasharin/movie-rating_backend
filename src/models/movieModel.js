const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
  title : String,
  image : String,
  rating:Number

});
const model = mongoose.model('movie', movieSchema);
module.exports= model