const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
    userId: String,
    recipeId: String
});

module.exports = mongoose.model('Favorite', favoriteSchema);