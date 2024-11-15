const Joi = require('joi');
const customErrorHandler = require('../../customErrorHandler/customErrorHandler')
const bcrypt = require('bcrypt');
const JwtService = require('../../service/JWTService');
const User = require('../../models/user');
const JwtToken = require('../../models/JWT');
const { loginSchema } = require('../../service/validator');

const loginController = {
    async login(req,res,next){    
        const { error } = loginSchema.validate(req.body);
        if(error){
            return next(error);
        }
        try {
            const user = await User.findOne({ email: req.body.email });
            if(!user)
                return next(customErrorHandler.wrongCredentials('Username or password is wrong'))

            const match = await bcrypt.compare(req.body.password, user.password)
            if(!match){
                return next(customErrorHandler.wrongCredentials('Username or password is wrong'))
            }
        
            const token = JwtService.sign({ _id: user._id });
            res.json({"token": token});
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = loginController;