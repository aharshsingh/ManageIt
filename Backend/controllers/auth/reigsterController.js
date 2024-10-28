const Joi = require('joi');
const CustomErrorHandler = require('../../customErrorHandler/customErrorHandler');
const Userdata = require('../../models/user');
const bcrypt = require('bcrypt');

const registerController = {
    async register(req, res, next) {
        
        const registerSchema = Joi.object({
            userName: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,16}$')).required()
        });

        const { error } = registerSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        try {
            const exist = await Userdata.exists({ email: req.body.email });
            if (exist) {
                return next(CustomErrorHandler.alreadyExists('Email is already registered'));
            }
        } catch (err) {
            return next(err);
        }

        const { userName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new Userdata({
            userName,
            email,
            password: hashedPassword,
        });
        
        try {
            const result = await user.save();
        } catch (err) {
            return next(err);
        }
        res.send('Hello, you are now registered!');
    },
};

module.exports = registerController;
