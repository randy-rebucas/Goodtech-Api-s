const express = require('express');
const router = express.Router();

/**
 * load middleware
 */
 const auth = require('../middlewares/nextbankAuth');

/**
 * load controller
 */
const controller = require('../controllers/customer');

router.post('/', auth, controller.createCustomer);

module.exports = router;