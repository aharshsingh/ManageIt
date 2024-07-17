const Joi = require('joi');
const customErrorHandler = require('../../customErrorHandler/customErrorHandler')
const bcrypt = require('bcrypt');
const JwtService = require('../../service/JWTService');
const User = require('../../models/user');
const JwtToken = require('../../models/JWT');

const loginController = {
    async login(req,res,next){
        //validation
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,16}$')).required()
        });
        
        const { error } = loginSchema.validate(req.body);
        if(error){
            return next(error);
        }
        try {
            const user = await User.findOne({ email: req.body.email });
            if(!user)
                return next(customErrorHandler.wrongCredentials('Username or password is wrong'))
            //compare the password
            const match = await bcrypt.compare(req.body.password, user.password)
            if(!match){
                return next(customErrorHandler.wrongCredentials('Username or password is wrong'))
            }
            //token
            const token = JwtService.sign({ _id: user._id });
            const access_token = new JwtToken({ token });
            await access_token.save();
            res.json(access_token);
        } catch (err) {
            return next(err);
        }
    },

    async verify(req,res,next){
        //validation of the JWT token
        const tokenSchema = Joi.object({
            jwtToken : Joi.string().required()
        });

        const { error } = tokenSchema.validate(req.body);
        if (error){
            return next(error);
        }

        let accessToken;
        let userId;
        try{
        accessToken = await JwtToken.findOne({ token: req.body.jwtToken });
            if(!accessToken){
                return next(customErrorHandler.notAuthorized('Invaild access token'));
            }

            try {
                const { _id } = JwtService.verify(accessToken.token)
                userId = _id;
            } catch (error) {
                return next(customErrorHandler.notAuthorized('Invaild access token'));
            }

            const user = User.findOne({_id: userId});
            if(!user){
                return next(customErrorHandler.notAuthorized('No user found!'));
            }
        }
        catch(err){
            return next(new Error('Something went, ' + err.message));
        }
        res.send('Successfully logged in.');
    }
}

module.exports = loginController;