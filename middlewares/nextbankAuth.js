
module.exports = async (req, res, next) => {
    try {
        const buf = Buffer.from(process.env.NEXTBANK_USER + ":" + process.env.NEXTBANK_PASSWORD);
        req.authentication = buf.toString('base64');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid credentials!' });
    }
}