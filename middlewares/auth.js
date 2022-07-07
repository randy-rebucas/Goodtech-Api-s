const axios = require('axios');



module.exports = async (req, res, next) => {
    try {
        const buf = Buffer.from(process.env.NEXTBANK_USER + ":" + process.env.NEXTBANK_PASSWORD);
        const base64 = buf.toString('base64');

        const NextBankClient = axios.create({
            baseURL: process.env.NEXTBANK_ENDPOINT,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + base64
            }
        });
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid credentials!' });
    }
}