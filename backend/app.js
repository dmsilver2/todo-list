const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos');

const app = express();

mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Problem with connectin to db');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PUT"
    );

    next();
});

app.use('/api/todos', todosRoutes);

module.exports = app;
