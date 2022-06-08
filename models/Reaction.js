const { Schema, model } = require('mongoose');

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
        // set default value to current timestamp
        // use a getter method to format the timestamp on query
    }
})

// This will not be a model, but rather will be 
// used as the reaction field's subdocument schema in the Thought model.