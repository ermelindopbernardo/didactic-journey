// Index, Show, Store, Update, Destroy
const User = require('../models/Users');
module.exports = {
   async store(req, res){
        const {email} = req.body; 

        const user = await User.create({email});

        return res.json(user);
    }
};