const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orders.controller');

router.post('/order', OrderController.postNew);

module.exports = router;
