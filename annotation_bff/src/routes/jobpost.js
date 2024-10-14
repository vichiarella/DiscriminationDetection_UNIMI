const express = require('express');
const router = express.Router();
const jobpost_controller = require('../controller/ctrl_jobpost');

// @route  POST api/users
// @desc   Register user
// @access Public
router.get('/', jobpost_controller.getAllJobPost);
router.get('/random', jobpost_controller.getRandomUnannotatedJobPost);

module.exports = router;