const { Schema, model} = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        requires: true,
        unique: true,
        // add email format validation
    },
    thoughts: {
        type: Array,
        // reference thought model
    },
    friends: {
        type: Array,
        // reference user model
    }
})

// create virtual called friendCount that 
// retrieves the length of user's friends
// array field om query