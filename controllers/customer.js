const NextBankClient = require('../utils/NextBank');

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/createCustomer
 */
exports.createCustomer = async (req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/command/CreateCustomer', {
            data: JSON.stringify(customerData)
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        console.log(error)
        res.status(error.response.status).json({
            message: error.message
        });
    }
}