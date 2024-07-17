const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jwtTokenSchema = new Schema({
    token: { type: String, unique: true }
}, { timestamps: false });

module.exports = mongoose.model('JwtToken', jwtTokenSchema, 'jwtTokens');
