const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    thoughts: [{type: Schema.Types.ObjectId,
        ref: 'thought'
    }],
    friends: [{type: Schema.Types.ObjectId,
        ref: 'user'}],
},
{
    toJSON: {
      getters: true,
    },
  })







const User = model('user', userSchema);
module.exports = User;