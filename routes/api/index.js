// Tells the document where to find the relevant other documents to make all this function
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// prefix routes with route names
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// export the router
module.exports = router;