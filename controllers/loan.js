const NextBankClient = require('../utils/NextBank');

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/payLoanByTransfer
 */
exports.payLoanByTransfer = async (req, res, next) => {
    try {
        const response = await NextBankClient.post('/api/v2/command/PayLoanByTransfer', {
            data: JSON.stringify(customerData)
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readLoanTypeCollectionUsingGET
 */
exports.productsLoanTypes = async (req, res, next) => {
    try {

        const response = await NextBankClient.get('/api/v2/products/loans/types');

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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/createLoan
 */
exports.createLoan = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/CreateLoan', {
            data: JSON.stringify(customerData)
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
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readLoanByProductNumberUsingGET
 */
exports.productsLoanSearch = async (req, res, next) => {
    try {
        
        const response = await NextBankClient.get('/api/v2/products/loans/search', {
            params: {
                productNumber: req.query.productNumber
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readLoanUsingGET
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readLoanTypeByIdUsingGET
 */
 exports.getProductsLoan = async (req, res, next) => {
    try {

        const response = await NextBankClient.get(`/api/v2/products/loans/${req.params.id}`);

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}