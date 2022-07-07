const express = require('express');
const router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/token');

router.get('/', controller.getAccessToken);

module.exports = router;