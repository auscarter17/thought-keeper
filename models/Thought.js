const { Schema, model} = require('mongoose');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        // must be between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        // set default value to current timestamp
        // use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        type: Array,
        // array of nested documents created with the reactionSchema
    }
})

const reactionSchema = new Schema ({
    reactionId: {
        // use mongoose's ObjectId data type
        // default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        // 280 character maximum
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormate(createdAtVal)
        // use a getter method to format the timestamp on query
    }
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// create a virtual called reactionCount that retrieves
// the length of the thought's reactions array field on query