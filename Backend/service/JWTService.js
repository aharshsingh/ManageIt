const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

class JwtService {
    static sign(payload, expiry = '5h', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

module.exports = JwtService;
