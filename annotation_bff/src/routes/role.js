const express = require('express');
const router = express.Router();
const role_controller = require('../controller/ctrl_role');

router.post('/', role_controller.createRole);
router.get('/', role_controller.getAllRoles);

module.exports = router;