const express = require('express');
const router = express.Router();

/**
 * load middleware
 */
 const auth = require('../middlewares/nextbankAuth');

/**
 * load controller
 */
const controller = require('../controllers/dictionary');

router.get('/', auth, controller.getCode);

module.exports = router;