const { Schema, model, Types } = require('mongoose');
 // import mongoose for the schema and model

// Define the schema for the User model
const thoughtSchema = new Schema(
    {
       reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },

        userName: {
            type: String,
            required: true, // has to be provided, for obvious reasons
        },
        createdAt: {
            type: Date,
            default: Date.now, // date.now returns the current timestamp vs date.now() returns the current timestamp
        }
    },
    {
        toJSON: {
            getters: true, // Include virtual properties and getter functions when converting to JSON
        },
        // Id is false because this is a virtual that Mongoose returns, and we don't need it
        id: false
    }
);

//export the reaction schema
module.exports = thoughtSchema;
