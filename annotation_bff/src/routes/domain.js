const express = require('express');
const router = express.Router();

const domain_controller = require('../controller/ctrl_domain');

router.post('/', domain_controller.createDomain);
router.get('/', domain_controller.getAllDomains);

module.exports = router;