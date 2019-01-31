const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = Schema({
    email: {
        type: String,
        minlength: 3,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    },
    todos: [{
        ref: 'Todo',
        type: Schema.Types.ObjectId
    }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
