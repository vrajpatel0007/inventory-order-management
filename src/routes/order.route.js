const express = require('express');
const orderController = require('../controllers/order.controller');
const { authUser, authorizeAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/placeOrder', authUser,  orderController.placeOrder);
router.get('/getOrder/:id', authUser, orderController.getOrder);
router.put('/:id/status', authUser, authorizeAdmin, orderController.updateOrderStatus);
router.get('/getAllOrders', authUser, authorizeAdmin, orderController.getAllOrders);

module.exports = router;
