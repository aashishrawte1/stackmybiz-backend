const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    mobiles: String,
    dob: String,
    address: String
});

export const userModel = mongoose.model('user', userSchema);