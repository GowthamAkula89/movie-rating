const httpStatus = require('http-status');
const bycrypt = require('bcryptjs')

const {User} = require('../models/user.model');
const createUser = async(data) => {
    if(await User.isEmailTaken(data.email)){
        throw new Error(httpStatus.OK, "Email Already Exit")
    }
    const salt = await bycrypt.genSalt();
    const hashPassword = await bycrypt.hash(data.password, salt);
    const user = await User.create({...data, password: hashPassword});
    return user;
}
module.exports = {
    createUser
}