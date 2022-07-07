const express = require('express');
const router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/customer');

router.post('/', controller.createCustomer);

module.exports = router;