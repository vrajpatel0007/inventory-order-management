const express = require('express');
const productController = require('../controllers/product.controller');
const { authUser, authorizeAdmin } = require('../middleware/auth');
const router = express.Router();

router.get('/getAllProducts', authUser, productController.getAllProducts);
router.post('/createProduct', authUser, authorizeAdmin, productController.createProduct);
router.put('/updateProduct/:id', authUser, authorizeAdmin, productController.updateProduct);
router.delete('/deleteProduct/:id', authUser, authorizeAdmin, productController.deleteProduct);

module.exports = router;
