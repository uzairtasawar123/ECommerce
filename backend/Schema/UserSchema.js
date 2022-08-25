const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }

},{
    timestamps:true
})

const User = new mongoose.model('user' , UserSchema)
module.exports = User;