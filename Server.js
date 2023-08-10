// This file is the entry point for the server. 
// It will import the Express.js server, the database connection, and the routes. 
// It will also define the PORT and start the server listening on the PORT.
const express = require('express');
const db = require('./config/connection');
const router = require('./routes');

// Define the PORT
const PORT = process.env.PORT || 3001;
// Create the Express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());