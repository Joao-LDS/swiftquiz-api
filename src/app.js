// Chamada para o express
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database

// Mongoose conecta com a connecting stringo do DB
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


// Instância para manipular o que acontece com a conexão
const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
        'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    });
});

// Models
const Question = require('./models/question');

// Rotas
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const questionRoutes = require('./routes/question-routes');
app.use('/question', questionRoutes);

module.exports = app;