const mongoose = require("mongoose");
import IUserDB from '../interfaces/user.interface'

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    name: String,
    mobile: String,
    dob: String,
    address: String
});

export const userModel = mongoose.model('User', userSchema);