const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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

todoSchema.post('save', function () {
    const User = mongoose.model('User');
    User.update({ _id: this.user }, { $push: { todos: this._id } })
        .then(null);
});

todoSchema.pre('remove', function () {
    const User = mongoose.model('User');
    User.update({ _id: this.user }, { $pull: { todos: this._id } }).then(null);
});

todoSchema.statics.delete = (id) => {
    return mongoose.model('Todo')
        .findById(id)
        .then(todo => todo.remove());
}

module.exports = mongoose.model('Todo', todoSchema);
