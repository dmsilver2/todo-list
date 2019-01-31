const express = require('express');
const Todo = require('../models/todo.js');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
router.get('', (req, res, next) => {
    Todo.find().then(todos => {
        res.status(200).json({
            message: 'Successfully retreived todos',
            todos
        });
    });
});

router.get('/:id', (req, res, next) => {
    Todo.findOne({ _id: req.params.id }).then(todo => {
        res.status(200).json({
            message: 'Successfully retreived todo',
            todo
        });
    });
});

router.post('', checkAuth, (req, res, next) => {
    const todo = new Todo({
        description: req.body.description,
        user: req.userId
    });

    todo.save().then(createdTodo => {
        res.status(201).json({
            message: 'Todo added successfully',
            createdTodo: createdTodo
        });
    });
});

router.put('/:id', (req, res, next) => {
    const todo = new Todo({
        _id: req.body.id,
        description: req.body.description,
        completed: req.body.completed
    });
    Todo.updateOne({ _id: req.params.id }, todo).then(todo => {
        res.status(200).json({ message: 'Update successful!', todo });
    });
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Todo.delete(id)
        .then(() => {
            res.status(200).json({ message: "Todo deleted!" });
        });
});

module.exports = router;
