module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'secretkey123') {
        next();
    } else {
        res.status(403).json({ error: 'Unauthorized' });
    }
};
