const express = require('express')

const mongoose = require('mongoose')
const messagescheema = new mongoose.Schema({
    
    username:{
        type:String,
        required:true
    },
    sender:{
        type:Boolean,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
});

const messagemodele = mongoose.model('messages',messagescheema)
module.exports = messagemodele