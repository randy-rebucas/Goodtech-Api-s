const express = require('express');
const router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/product');

router.get('/productsOperations', controller.productsOperations);

module.exports = router;