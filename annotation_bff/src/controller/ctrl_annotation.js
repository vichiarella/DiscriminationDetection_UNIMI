const Annotation = require('../model/Annotation');


exports.createAnnotation = async (req, res) => {
  const { text, text_id, annotator, label, domain, reason, tokens } = req.body;

  try {
    const newAnnotation = new Annotation({
      text,
      text_id,
      annotator,
      label,
      domain,
      reason,
      tokens,
    });
    await newAnnotation.save();
    res.json(newAnnotation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getHistoryAnnotations = async (req, res) => {
  const annotatorId = req.params.annotatorId;

  try {
    const annotations = await Annotation
      .find({ annotator: annotatorId })
      .populate('text_id').populate('domain').populate('label');

    res.json(annotations
      .map(x =>({
        annotationId: x._id,
        title: x.text_id.title,
        label: x.label.label,
        domain: x.domain.domain,
        reason: x.reason,
        createdOn: x.createdAt
      }))
  );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAnnotation = async (req, res) =>{
  const { annotatorId, annotationId } = req.body;
  try{
    await Annotation.deleteOne({ annotator: annotatorId, _id: annotationId })
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}