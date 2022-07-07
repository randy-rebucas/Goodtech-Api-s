exports.getUsers = async(req, res, next) => {
    try {
        res.send('respond with a resource');
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};