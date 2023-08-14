const {schema, model} = require('mongoose'); // Import mongoose for the schema and model

// Define the schema for the User model
const userSchema = new Schema(
    {
        // username of the user
        userName: {
            type: String,
            required: true, // has to be provided, for obvious reasons
            unique: true, // has to be unique
            trim: true // trim whitespace from the beginning and end of the string
        },

        email : {
            type: String,
            required: true,
            unique: true, // has to be unique
            // Regular expression to validate the email address
            match: [/.+@.+\..+/, 'Requires valid email address!'] //Resource: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
        },

        // Array of _id values referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId, // Resource: https://mongoosejs.com/docs/schematypes.html
                ref: 'Thought' 
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, // Resource: https://mongoosejs.com/docs/schematypes.html
                ref: 'User' // references the User model to populate the friends list
            }
        ],
    },
    { // Include virtual properties and getter functions when converting to JSON
        toJSON: {
            virtuals: true,
        },
        // Id is false because this is a virtual that Mongoose returns, and we don't need it
        id: false
    }
);

// create the virtual for the friendCount
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
}); 

// Create the User model
const User = model('User', userSchema);

// Export the User model
module.exports = User;