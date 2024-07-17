const CustomErrorHandler = require('../customErrorHandler/customErrorHandler');
const Userdata = require('../models/user');

const userController = {
    async userInfo(req,res,next) {
        let doc;
        const userId = req.params.userId;
        console.log(userId);
        try {
            doc = await Userdata.findOne({_id : userId});
            console.log(doc);
            if(!doc){
                return next(CustomErrorHandler.notFound('User not Found!'));
            }
            res.json(doc);
        } catch (error) {
            return next(error);
        }
    }
};
module.exports = userController;