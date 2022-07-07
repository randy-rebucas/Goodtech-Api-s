const NextBankClient = require('../utils/NextBank');

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readDictionariesByCodeUsingGET
 */
exports.getCode = async (req, res, next) => {
    try {
        const response = await NextBankClient.get('/api/v2/dictionaries', {
            params: {
                code: req.query.code
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