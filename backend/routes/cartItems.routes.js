const express = require('express');
const router = express.Router();
const CartItemController = require('../controllers/cartItems.controller');

router.get('/cart', CartItemController.getAll);
router.get('/cart/items/:id', CartItemController.getById);
router.post('/cart/items', CartItemController.postNew);
router.put('/cart/items/:id', CartItemController.putById);
router.delete('/cart/items/:id', CartItemController.deleteById);

module.exports = router;
