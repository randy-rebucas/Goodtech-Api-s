var express = require('express');
var router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/users');

router.get('/', controller.getUsers);

module.exports = router;
