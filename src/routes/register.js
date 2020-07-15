const express = require('express');
const router = express.Router();
const Register = require('../models/Register'); 
const hash = require('object-hash');

router.post('/', (req, res) => {
    
    let password = hash(req.body.password);
    const register = new Register({
        username: req.body.username,
        password: password
    });
    register.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    });
    
    
    
});

module.exports = router;