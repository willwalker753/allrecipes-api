require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const UUID = require('uuid');
const BCrypt = require('bcryptjs');
const { NODE_ENV } = require('./config');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const morganOption = (NODE_ENV === 'production') ? 'tiny': 'common';

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const favoriteRoute = require('./routes/favorite');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/favorite', favoriteRoute);


mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true }, () => {
    console.log('connected to db')
});

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
    res.status(500).json(response)
});

module.exports = app;