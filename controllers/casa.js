const axios = require('axios').default;

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/createAccount
 */
exports.createAccount = async (req, res, next) => {
    try {
        const payload = {
            accountTypeId: 1256,
            customerId: 1256,
            ownership: [
                {
                    customerId: 687842,
                    ownershipType: "OWNER",
                    productAccess: true
                }
            ],
            pdicTypeId: 6289,
            updateAta: true
        }
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/CreateAccount',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
            data: JSON.stringify(req.body, null, 2)
        });
        console.log(response);
        res.status(200).json({
            data: response
        });
    } catch (error) {
        console.log(error)
        res.status(error.response.status).json({
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
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/accounts/details',
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
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
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/casa/types',
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/accountTaggedCreditMemo
 */
exports.accountTaggedCreditMemo = async (req, res, next) => {
    try {
        const payload = {
            amount: 1250.25,
            ledgerAccountCode: "ASET/DFBA/DF008",
            productId: 1024,
            tag: "SETTLEMENT_PAYMENT"
        }

        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/AccountTaggedCreditMemo',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
            data: JSON.stringify(payload)
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
        const payload = {
            branchId: 1,
            customerId: [
                1,
                2,
                3
            ],
            customerName: "Customer Name",
            exactProductNumber: false, // boolean
            includeOwnership: false, // boolean
            includeRelativesAccount: false, // boolean
            matchExtraNumber: false, // boolean
            offset: 0,
            pageNo: 0,
            pageSize: 0,
            productNumber: [
                "111-111-112",
                "111-111-113"
            ], // Array of strings
            productStatus: [
                "PENDING",
                "APPROVED",
                "ACTIVE"
            ] // Array of strings "PENDING" "APPROVED" "INACTIVE" "ACTIVE" "MATURE" "CLOSED" "CANCELED" "INVALID" "PAST_DUE_PERFORMING" "PAST_DUE_NON_PERFORMING" "PAST_DUE_LITIGATION" "PAST_DUE_WRITE_OFF" "ROPA"
        }

        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/accounts/search',
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/accountTaggedDebitMemo
 */
exports.accountTaggedDebitMemo = async (req, res, next) => {
    try {
        const payload = {
            amount: 1250.25,
            ledgerAccountCode: "ASET/DFBA/DF008",
            productId: 1024,
            tag: "SETTLEMENT_PAYMENT"
        }

        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/AccountTaggedDebitMemo',
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/accountTransferToProduct 
 */
exports.accountTrasferToProduct = async (req, res, next) => {
    try {
        const payload = {
            amount: 1250,
            closeOperation: false,
            entryType: "CREDIT",
            productId: 2048,
            targetProductId: 2
        }

        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/AccountTransferToProduct',
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

exports.processDirectIncomingFundTransfer = async (req, res, next) => {
    try {
        const payload = {
            creditInformation: {
                amount: 500.65,
                remarks: "Payment for online order"
            },
            customerId: 2048,
            productId: 2048,
            recipientInformation: {
                accountNumber: "000123456789",
                recipientName: "John Foo"
            },
            senderInformation: {
                accountNumber: "000103326633232",
                address: "Manila, Philippines",
                institutionCode: "RCBC",
                name: "John Doe",
                referenceNumber: "BANK202100100001",
                tag: "SYSTEM1"
            }
        }

        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/ProcessDirectIncomingFundTransfer',
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
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/sendExternalFundTransfer 
 */
exports.sendxternalFundTransfer = async (req, res, next) => {
    try {
        const payload = {
            channel: "PESONET",
            creditInformation: {
                "amount": 500.65,
                "remarks": "Payment for online order"
            },
            customerId: 2048,
            institutionCode: "RCBC",
            productId: 12345,
            recipientInformation: {
                "accountNumber": "000103326633232",
                "address": "Manila, Philippines",
                "name": "John Doe"
            }
        }

        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/command/SendExternalFundTransfer',
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