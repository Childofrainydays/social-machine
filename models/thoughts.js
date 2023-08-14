const { Schema, model } = require('mongoose'); // import mongoose for the schema and model
const reactionSchema = require('./reaction'); // import the reaction schema

// Define the schema for the User model
const thoughtSchema = new Schema(
    {
        // user name of the user who created this thought
        userName: {
            type: String,
            required: true,
        },

        // Array of _id values referencing the Thought model
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
        },

        // date the thought was created
        createdAt: {
            type: Date,
            default: Date.now()
        }, 

        // reactions to the thought
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true, // Include virtual properties and getter functions when converting to JSON
            virtuals: true // Include virtual properties in the JSON representation
        },
        // Id is false because this is a virtual that Mongoose returns, and we don't need it
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema); // create the Thought model

module.exports = Thought; // export the Thought model