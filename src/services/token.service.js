require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (userId, expires, tokenType, secret = process.env.JWT_SECRET) => {
    //key is not fixed
    const payload = {
        id: userId,
        type: tokenType,
        exp: expires,
        iat: Math.floor(Date.now() / 1000), //issued at time
    }
    const jwtToken = jwt.sign(payload, secret);
    return jwtToken;
}

const generateAuthToken = async (user) => {
    const expires = Math.floor(Date.now()/1000) + process.env.JWT_ACCESS_EXPIRATION_MINUTES * 60;
    const accessToken = generateToken(user.id, expires, "access");
    return{
        token: accessToken,
        expires: new Date(expires * 1000)
    }
}
module.exports = {
    generateToken,
    generateAuthToken
}