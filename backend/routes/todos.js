const express = require('express');
const Todo = require('../models/todo.js');
const router = express.Router();

router.get('', (req, res, next) => {
    Todo.find().then(todos => {
        res.status(200).json({
            message: 'Successfully retreived todos',
            todos
        });
    });
});

module.exports = router;
