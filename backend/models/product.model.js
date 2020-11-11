const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  water: { type: String, required: true },
  light: { type: String, required: true },
  temperature: { type: String, required: true },
  difficulty: { type: String, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: Array, required: true },

});

module.exports = mongoose.model('products', productSchema);
