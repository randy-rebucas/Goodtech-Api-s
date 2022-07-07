const express = require('express');
const router = express.Router();

/**
 * load middleware
 */
 const auth = require('../middlewares/nextbankAuth');
 
/**
 * load controller
 */
const controller = require('../controllers/casa');

router.post('/createAccount', auth, controller.createAccount);

router.get('/productsAccountsDetails', auth, controller.productsAccountsDetails);

router.get('/productsCasaTypes', auth, controller.productsCasaTypes);

router.post('/accountTaggedCreditMemo', auth, controller.accountTaggedCreditMemo);

router.post('/productAccountsSearch', auth, controller.productAccountsSearch);

router.post('/accountTaggedDebitMemo', auth, controller.accountTaggedDebitMemo);

router.post('/accountTrasferToProduct', auth, controller.accountTrasferToProduct);

router.post('/processDirectIncomingFundTransfer', auth, controller.processDirectIncomingFundTransfer);

router.post('/sendxternalFundTransfer', auth, controller.sendxternalFundTransfer);

module.exports = router;