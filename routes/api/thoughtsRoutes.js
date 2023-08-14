const router = require('express').Router();

const {
    getAllThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// Set up routes for handling multiple thoughts
router.route('/')
    .get(getAllThoughts)  // GET all thoughts
    .post(createThought); // Create a new thought

// Set up routes for handling a specific thought by its ID
router.route('/:thoughtId')
    .get(getThought)     // GET a single thought by ID
    .put(updateThought)  // Update a thought by ID
    .delete(deleteThought); // Delete a thought by ID

// Set up route for adding a reaction to a specific thought
router.route('/:thoughtId/reactions')
    .post(addReaction); // Add a reaction to a thought

// Set up route for deleting a reaction from a specific thought
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // Delete a reaction from a thought

module.exports = router;
