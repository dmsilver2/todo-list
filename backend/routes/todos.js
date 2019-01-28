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

router.post('', (req, res, next) => {
    const todo = new Todo({
        description: req.body.description
    });

    todo.save().then(createdTodo => {
        res.status(201).json({
            message: 'Todo added successfully',
            createdTodo: createdTodo
        });
    });
});

router.delete('/:id', (req, res, next) => {
    const _id = req.params.id;
    Todo.deleteOne({ _id }).then(result => {
        res.status(200).json({ message: "Todo deleted!" });
    });
});

module.exports = router;
