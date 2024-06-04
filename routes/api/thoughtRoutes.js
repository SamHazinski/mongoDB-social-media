const router = require('express').Router();
const {
    getThoughts,
    newThought,
    getThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(newThought)

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId').post(newReaction).delete(deleteReaction)



module.exports = router;