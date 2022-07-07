const NextBankClient = require('../utils/NextBank');

exports.getAccessToken = async(req, res, next) => {
    try {

        const response = await NextBankClient.post('/api/v2/auth-tokens', {
            data: 'username=' + process.env.NEXTBANK_USER + '&password=' + process.env.NEXTBANK_PASSWORD
        });

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json(error);
    }
}
