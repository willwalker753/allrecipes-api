const express = require('express');
const router = express.Router();
const Register = require('../models/Register'); 
const hash = require('object-hash');


router.post('/', async(req, res) => {
    try {
        let password = hash(req.body.password);
        console.log(password);
        const account =  await Register.find({
            username: req.body.username,
            password: password
        });
        res.json(account);
    }
    catch (err) {
        res.json({ message: 'Error logging into your account' });
    }

});

module.exports = router;