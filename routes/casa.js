const express = require('express');
const router = express.Router();

/**
 * load controller
 */
const controller = require('../controllers/casa');

router.post('/createAccount', controller.createAccount);

router.get('/productsAccountsDetails', controller.productsAccountsDetails);

router.get('/productsCasaTypes', controller.productsCasaTypes);

router.post('/accountTaggedCreditMemo', controller.accountTaggedCreditMemo);

router.post('/productAccountsSearch', controller.productAccountsSearch);

router.post('/accountTaggedDebitMemo', controller.accountTaggedDebitMemo);

router.post('/accountTrasferToProduct', controller.accountTrasferToProduct);

router.post('/processDirectIncomingFundTransfer', controller.processDirectIncomingFundTransfer);

router.post('/sendxternalFundTransfer', controller.sendxternalFundTransfer);

module.exports = router;