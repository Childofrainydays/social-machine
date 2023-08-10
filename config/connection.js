const {connect, connection} = require('mongoose'); // import mongoose

// Store the connection string in a variable
const connectionString = 
    process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce_db"; // define the connection string

connect(connectionString); // connect method to connect to the  database

// export the connection
module.exports = connection;