const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite'); 

router.post('/', (req, res) => {
    const favorite = new Favorite({
        userId: req.body.userId,
        recipeId: req.body.recipeId
    });
    favorite.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({ message: err});
    });
});

router.post('/get', async(req, res) => {
    try{
        const favorite =  await Favorite.find({
            userId: req.body.userId
        });
        res.json(favorite);
    }
    catch(err) {
        res.json({ message: 'Error finding your favorites' });
    }
});

router.post('/delete', async(req, res) => {
    try{
        const favorite = await Favorite.deleteOne({
            userId: req.body.userId,
            recipeId: req.body.recipeId
        });
        res.json(favorite);
    }
    catch(err) {
        res.json({ message: 'Error deleting your favorite' });
    }
});

module.exports = router;