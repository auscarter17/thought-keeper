const { Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema (
    {
        reactionId: {
                // use mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
                // default value is set to a new ObjectId
            default: () => new Types.ObjectId()
            
        },
        reactionBody: {
            type: String,
            required: true,
            // 280 character maximum
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use a getter method to format the timestamp on query
            get: createdAtVal => dateFormate(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            // must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use a getter method to format the timestamp on query
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: Schema.Types.ObjectId, 
            ref: 'User'
        },
        // array of nested documents created with the reactionSchema
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
)

// create a virtual called reactionCount that retrieves
// the length of the thought's reactions array field on query
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;