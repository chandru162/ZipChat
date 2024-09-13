const mongoose = require('mongoose')
require('dotenv').config()

let DB_URL = process.env.DB_URL;

const connectdb=()=>{
    mongoose.connect(DB_URL)
    , { useNewUrlParser: true, useUnifiedTopology: true }

    mongoose.connection.on('connected',()=>{
        console.log("mongoDB is connected sucessfully")
    })
}

module.exports = connectdb