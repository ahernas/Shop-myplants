const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    await res.json(await Product.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const pro = await Product.findById(req.params.id);
    if(!pro) res.status(404).json({ message: 'Not found'});
    else res.json(pro);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};
