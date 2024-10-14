const express = require('express');
const router = express.Router();
const annotation_controller = require('../controller/ctrl_annotation')

// @route  POST api/users
// @desc   Register user
// @access Public

router.post('/new', annotation_controller.createAnnotation);
router.get('/:annotatorId', annotation_controller.getHistoryAnnotations);
router.delete('/', annotation_controller.deleteAnnotation);


module.exports = router;