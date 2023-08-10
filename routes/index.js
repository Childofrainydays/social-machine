// Init route
// has to be included
// all of this is a pain
const router = require('express').Router();

// file path: /api needs to be included in order to use the api routes
const apiRoutes = require('./api');

// Establish all of the routes for the server using /api as the prefix
router.use('/api', apiRoutes);

// If the route is not defined, return a 404 status and message
router.use((req, res) => {
    res.status(404).send('<h1>404 Error!Route not found</h1>');
});

// Export the router
module.exports = router;