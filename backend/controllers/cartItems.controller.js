const CartItem = require('../models/cartItem.model');

exports.getAll = async (req, res) => {
  const items = await CartItem.find().populate('productId');
  const totalPrice = items.map(i => i.productId.price * i.count).reduce((prev, next) => prev + next, 0);
  const deliveryPrice = 10;
  try {
    await res.json({
      items: items.map(i => ({count: i.count, product: i.productId})),
      totalPrice: totalPrice,
      deliveryPrice: deliveryPrice,
      summaryPrice: totalPrice + deliveryPrice,
    });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const pro = await CartItem.findById(req.params.id);
    if(!pro) res.status(404).json({ message: 'Not found'});
    else res.json(pro);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postNew = async (req, res) => {
  try {
    const { count, productId } = req.body;
    const cart = await(CartItem.findOne({ productId: productId }));
    if(cart){
      cart.count += 1;
      await cart.save();
      res.json(cart);
    } else {
      const newCartItem = new CartItem({count: count, productId: productId});
      await newCartItem.save();
      res.json(newCartItem);
    }

  } catch(err) {
    res.status(500).json({ message: err.message });
  }
};

exports.putById = async (req, res) => {
  const { count } = req.body;
  try {
    const cart = await(CartItem.findOne({ productId: req.params.id }));
    if(cart) {
      cart.count = count;
      cart.save();
      res.json(cart);
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const cart = await(CartItem.findOne({ productId: req.params.id }));
    if(cart) {
      await CartItem.deleteOne({ productId: req.params.id });
      res.json({ productId: parseInt(req.params.id) });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
