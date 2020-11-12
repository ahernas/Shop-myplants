const CartItem = require('../models/cartItem.model');

exports.getAll = async (req, res) => {
  try {
    await res.json(await CartItem.find());
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
    const newCartItem = new CartItem({ count: count, productId: productId });
    await newCartItem.save();
    res.json({ message: 'OK' });

  } catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.putById = async (req, res) => {
  const { count } = req.body;
  try {
    const cart = await(CartItem.findById(req.params.id));
    if(cart) {
      await CartItem.updateOne({ _id: req.params.id }, { $set: { count: count }});
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const cart = await(CartItem.findById(req.params.id));
    if(cart) {
      await CartItem.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
