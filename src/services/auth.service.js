const httpStatus = require('http-status');
const {User} = require('../models/user.model');

const loginUserWithEmailAndPassword = async (email, password) => {
    const user = await User.findOne({email:email});

    if(!user || !user.isPasswordMatch(password)){
        throw new Error(httpStatus.UNAUTHORIZED, "Incorrect Credentials");
    }

    return user;
}
module.exports = {
    loginUserWithEmailAndPassword
}