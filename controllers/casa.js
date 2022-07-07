const NextBankClient = require('../utils/NextBank');

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/createAccount
 */
exports.createAccount = async (req, res, next) => {
    try {
        const response = await NextBankClient.post('/api/v2/command/CreateAccount', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readAccountsWithDetailsUsingGET
 */
exports.productsAccountsDetails = async (req, res, next) => {
    try {
        const response = await NextBankClient.get('/api/v2/products/accounts/details', {
            params: {
                code: req.query.customerId
            }
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readCasaTypesUsingGET
 */
exports.productsCasaTypes = async (req, res, next) => {
    try {
        const response = await NextBankClient.get('/api/v2/products/casa/types');

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/accountTaggedCreditMemo
 */
exports.accountTaggedCreditMemo = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/AccountTaggedCreditMemo', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readAccountsWithDetailsUsingGET
 */
exports.productAccountsSearch = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/products/accounts/search', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/accountTaggedDebitMemo
 */
exports.accountTaggedDebitMemo = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/AccountTaggedDebitMemo', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/accountTransferToProduct 
 */
exports.accountTrasferToProduct = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/AccountTransferToProduct', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 */
exports.processDirectIncomingFundTransfer = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/ProcessDirectIncomingFundTransfer', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/sendExternalFundTransfer 
 */
exports.sendxternalFundTransfer = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/SendExternalFundTransfer', {
            data: JSON.stringify(req.body, null, 2)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}