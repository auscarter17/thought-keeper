const { Schema, model} = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            // make sure two users cannot have the same username
            unique: true,
            required: true,
            // trim whitespace from username
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // add email format validation
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        },
        // reference thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // reference user model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        // give access to virtuals and getters
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

// create virtual called friendCount that 
// retrieves the length of user's friends
// array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User;