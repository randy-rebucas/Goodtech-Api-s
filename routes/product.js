const express = require('express');
const router = express.Router();

/**
 * load middleware
 */
 const auth = require('../middlewares/nextbankAuth');

/**
 * load controller
 */
const controller = require('../controllers/product');

router.get('/productsOperations', auth, controller.productsOperations);

module.exports = router;