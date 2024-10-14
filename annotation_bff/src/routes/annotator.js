const express = require('express');
const router = express.Router();
const annotatorController = require('../controller/ctrl_annotator');

router.get('/', annotatorController.getAllAnnotators);
router.get('/:id', annotatorController.getAnnotatorById);
router.post('/human', annotatorController.createHumanAnnotator);
// router.post('/machine', annotatorController.createMachineAnnotator);
router.put('/annotators/:id', annotatorController.updateAnnotator);

module.exports = router;