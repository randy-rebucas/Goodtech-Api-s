const axios = require('axios').default;

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/payLoanByTransfer
 */
exports.payLoanByTransfer = async (req, res, next) => {
    try {
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/PayLoanByTransfer',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readLoanTypeCollectionUsingGET
 */
exports.productsLoanTypes = async (req, res, next) => {
    try {
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/loans/types',
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/createLoan
 */
exports.createLoan = async (req, res, next) => {
    try {
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/CreateLoan',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
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
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readLoanByProductNumberUsingGET
 */
exports.productsLoanSearch = async (req, res, next) => {
    try {
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/loans/search',
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
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
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/loans/' + req.params.id,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
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