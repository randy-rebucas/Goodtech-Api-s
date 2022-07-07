const axios = require('axios').default;

exports.productsOperations = async (req, res, next) => {
    try {
        const response = await axios({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            url: '/api/v2/products/operations',
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + req.authentication
            },
            params: {
                productIds: req.query.productIds, // Array of integers
                dateFrom: req.query.dateFrom, // 2020-01-01
                dateTo: req.query.dateTo// 2021-01-01
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
