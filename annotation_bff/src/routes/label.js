const express = require('express');
const router = express.Router();

const label_controller = require('../controller/ctrl_label');

router.post('/', label_controller.createLabel);
router.get('/', label_controller.getAllLabels);

module.exports = router;