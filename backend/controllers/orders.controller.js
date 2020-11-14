const Order = require('../models/order.model');
const CartItem = require('../models/cartItem.model');

exports.postNew = async (req, res) => {
  try {
    const { name, email, address, message } = req.body;

    const cartItems = await CartItem.find().populate('productId').lean();
    const newOrder = new Order({ name: name, email: email, address: address, message: message, totalPrice: 0, deliveryPrice: 10, items: cartItems.map( item => {
      return {...item, ...item.productId, _id: undefined, productId: undefined };
    }) });
    await newOrder.save();
    res.json(newOrder.toObject());

  } catch(err) {
    res.status(500).json({ message: err });
  }
};
