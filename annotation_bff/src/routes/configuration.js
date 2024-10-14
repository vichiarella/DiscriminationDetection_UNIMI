const express = require('express');
const router = express.Router();
const configuration_controller = require('../controller/ctrl_configuration');

router.get('/:key', configuration_controller.getConfiurationByKey);

module.exports = router;