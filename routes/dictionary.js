const express = require('express');
const router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/dictionary');

router.get('/', controller.getCode);

module.exports = router;