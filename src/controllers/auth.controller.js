const httpStatus = require("http-status");
const userService = require('../services/user.service');
const tokenService = require('../services/token.service');
const authService = require('../services/auth.service');
const register = async(req, res) => {
    const user = await userService.createUser(req.body);
    const token = await tokenService.generateAuthToken(user);
    res.status(httpStatus.CREATED).send({user, token});
}
const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const token = await tokenService.generateAuthToken(user);
    res.status(httpStatus.OK).send({user, token});
}
module.exports= {
    register,
    login
}