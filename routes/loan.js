const express = require('express');
const router = express.Router();

/**
 * load middleware
 */
 const auth = require('../middlewares/nextbankAuth');

/**
 * load controller
 */
const controller = require('../controllers/loan');

router.get('/productsLoanTypes', auth, controller.productsLoanTypes);

router.get('/productsLoanSearch', auth, controller.productsLoanSearch);

router.get('/getProductsLoan/:id', auth, controller.getProductsLoan);

router.post('/payLoanByTransfer', auth, controller.payLoanByTransfer);

router.post('/createLoan', auth, controller.createLoan);

module.exports = router;