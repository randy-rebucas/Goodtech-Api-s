const axios = require('axios').default;

exports.getAccessToken = async(req, res, next) => {
    try {
        const buf = Buffer.from(process.env.NEXTBANK_USER + ":" + process.env.NEXTBANK_PASSWORD);
        const encodedData = buf.toString('base64');

        const response = await axios({
            url: process.env.NEXTBANK_ENDPOINT + '/api/v2/auth-tokens',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + encodedData
            },
            data: 'username=' + process.env.NEXTBANK_USER + '&password=' + process.env.NEXTBANK_PASSWORD
        }); 

        res.status(200).json({
            data: response.data
        });
    } catch (error) {
        res.status(500).json(error);
    }
}
