const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String },
  totalPrice: { type: Number, required: true },
  deliveryPrice: { type: Number, required: true },
  items: [{
    count: { type: Number },
    productId: {type: Number, ref: 'products' },
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
  }],

});

module.exports = mongoose.model('orders', orderSchema );
