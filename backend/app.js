const express = require('express')
const http = require('http')
const socketio = require('socket.io')
require('dotenv').config();
const users = require('./routers/user.js')
const message = require('./routers/message.js')
const mongoDB = require('./database/db.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const messagemodele =require('./models/messagemodele.js')
const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const app = express()
const server = http.createServer(app)
const io = socketio(server,{cors : {origin : '*'}})

//mongodb,bodyparser,cors
mongoDB();
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());


// socket io connection

// io.on('connect', (socket) => {
//     console.log('User connected:', socket.id);
//     socket.on('sendMessage',(message)=>{
//         socket.broadcast.emit('reciveMessage',{message,sender:false});
//         console.log('message : ',socket.id,' from : ',message);

//         socket.emit('reciveMessage',{message,sender:true})
        

//     })

//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id);
//     });
// });
////////
io.on('connect',async(socket)=>{
    // console.log("user connected")
     
    try{
        const messages = await
    messagemodele.find().sort('createdAt').exec();
        socket.emit('loadmessages',messages);
    }
    catch(err) {
        console.error('error feching messages :',err)
    }

    socket.on('sendMessage',(msgData)=>{
        const{username,message,sender} = msgData;

        const newMessage = new messagemodele({username,message,sender})
        newMessage.save()
        .then(()=>{
            socket.broadcast.emit('receiveMessage', {username,message,sender:false})
        socket.emit('receiveMessage',{username,message,sender:true})
        })
        .catch(err => console.error("message saving error:",err))
    });

    socket.on('disconnect',()=>{
        // console.log("user disconnected")
    });

});
/////
//routes
app.get('/', (req, res) => { res.send("Server Home page") })
app.use('/users', users);
// app.use('/message', message)


// server listen
let port = process.env.PORT
server.listen(port,()=>{
    console.log('server is running on port:   http://localhost:7000')
    
})
