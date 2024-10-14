const express = require('express');
const router = express.Router();
const background_controller = require('../controller/ctrl_background');

router.post('/', background_controller.createBackground);
router.get('/', background_controller.getAllBackgrounds);

module.exports = router;