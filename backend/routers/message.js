
const express = require('express');
const bodyParser = require('body-parser');
const messagemodele = require('../models/messagemodele')
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    console.log(req.body)
    res.send("user message home page")
})

// router.post('/post', (req, res) => {
//     res.send("user chat box post page")
//     const newmessage = new messagemodele(req.body);
//     newmessage.save()
//     console.log(req.body)

// });

router.get('/get', (req, res) => {
    console.log(req.body);
    messagemodele.find()
        .then(mes => res.send(mes))
        .catch(err => console.log(err));

});

module.exports = router