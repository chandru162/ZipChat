
const express = require('express');
const bodyParser = require('body-parser');
const usermodel = require('../models/usermodele');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('user page');
});

router.post('/post', (req, res) => {
    console.log(req.body)
    const newuser = new usermodel(req.body)
    newuser.save()
        .then(response => {
            console.log(response);
            res.send("User has been posted successfully");
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("An error posting the user");
        });
});

router.get('/get/:mobilenumber', (req, res) => {
    console.log(req.params.mobilenumber)
    const mobilenumbers = usermodel.find({ mobilenumber: req.params.mobilenumber })
    // const accesstoken = jwt.sign(mobilenumber,process.env.TOKEN)
       
        .then(response => res.send(response))
        .catch(err => console.log(err))
    // res.json({ accesstoken: accesstoken })
})

module.exports = router;