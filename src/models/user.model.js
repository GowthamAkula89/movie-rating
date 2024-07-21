const mongoose = require('mongoose');
const validator = require('validator');
const bycrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name : {
        type:String,
        required: true,
        trim : true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Invalid Email Address"
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
    }
})
// Add static method to the schema
userSchema.statics.isEmailTaken = async function (email) {
    const user = await this.findOne({ email: email });
    return !!user;
};
//Check if entered password matches the user's password
userSchema.methods.isPasswordMatch = async function (password) {
    const user = this
    return bycrypt.compare(password, user.password);
}

const User = mongoose.model("User", userSchema );

module.exports = {
    User
}