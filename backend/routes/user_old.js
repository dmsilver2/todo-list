const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('', (req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        todos: []
    });

    user.save().then(createdUser => {
        res.status(201).json({
            message: 'User added successfully'
        });
    });
});

module.exports = router;