const express = require('express');
const router = express.Router();
const datamodel = require('../controller/ctrl_datamodel');


router.get('/',datamodel.getAllDataprovider)

module.exports = router;