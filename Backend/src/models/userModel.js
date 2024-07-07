const mongoose = require("mongoose") ;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true // Remove leading/trailing whitespace
    },
    age: Number,
    aadharID: String,
    city: String,
    gender: {
        type: String,
    },
    bloodGroup: {
        type: String,
    },
})

const userModel = mongoose.model("User", userSchema) ;

module.exports = userModel ;