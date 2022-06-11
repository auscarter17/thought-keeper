const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    getAllThought,
    getThoughtById
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/')
    .get(getAllThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(addReaction)
    .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;