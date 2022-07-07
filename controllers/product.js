const NextBankClient = require('../utils/NextBank');

exports.productsOperations = async (req, res, next) => {
    try {

        const response = await NextBankClient.get('/api/v2/products/operations', {
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
