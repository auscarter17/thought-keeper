const res = require('express/lib/response');
const { User, Thought } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
        console.log(body)
        Thought.create(body)
    }
}