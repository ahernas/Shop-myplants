const express = require('express');
const router = express.Router();
const CartItemController = require('../controllers/cartItems.controller');

router.get('/cartItems', CartItemController.getAll);
router.get('/cartItems/:id', CartItemController.getById);
router.post('/cartItems', CartItemController.postNew);
router.put('/cartItems/:id', CartItemController.putById);
router.delete('/cartItems/:id', CartItemController.deleteById);

module.exports = router;
