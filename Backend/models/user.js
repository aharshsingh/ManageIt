const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { APP_URL } = require('../config')

const userdataSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true, toJSON: { getters: true}, toObject: { getters: true } });

module.exports = mongoose.model('Userdata', userdataSchema, 'userdatas');