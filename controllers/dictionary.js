const axios = require('axios').default;

/**
 * 
 * @link https://qa.rbsilay.nextbank.cloud/api/v2/api-documentation#operation/readDictionariesByCodeUsingGET
 */
exports.getCode = async (req, res, next) => {
    try {
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/dictionaries',
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
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