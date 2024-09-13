const mongoose = require('mongoose')

const userscheema = new mongoose.Schema({
    mobilenumber:{
        type:Number,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true
    }
})

const usermodele = mongoose.model('users',userscheema);

module.exports = usermodele;