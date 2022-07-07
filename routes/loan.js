const express = require('express');
const router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/loan');

router.get('/productsLoanTypes', controller.productsLoanTypes);

router.get('/productsLoanSearch', controller.productsLoanSearch);

router.get('/getProductsLoan/:id', controller.getProductsLoan);

router.post('/payLoanByTransfer',  controller.payLoanByTransfer);

router.post('/createLoan',controller.createLoan);

module.exports = router;