const JsonWebToken = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.auth_token || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    JsonWebToken.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
};
