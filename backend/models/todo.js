const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        minlength: 3,
        required: true
    },
    begin_date: {
        type: Date,
        required: false
    },
    modifed_date: {
        type: Date,
        required: false
    },
    end_date: {
        type: Date,
        required: false
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Todo', todoSchema);
