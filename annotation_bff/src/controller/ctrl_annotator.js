const Annotator = require('../model/Annotator');
// const HumanAnnotator = require('../model/HumanAnnotator');
// const MachineAnnotator = require('../model/MachineAnnotator');

// Get all annotators
exports.getAllAnnotators = async (req, res) => {
  try {
    const annotators = await Annotator.find();
    res.status(200).json(annotators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific annotator by ID
exports.getAnnotatorById = async (req, res) => {
  try {
    const annotator = await Annotator.findById(req.params.id);
    if (!annotator) {
      return res.status(404).json({ message: 'Annotator not found' });
    }
    res.status(200).json(annotator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new human annotator
exports.createHumanAnnotator = async (req, res) => {
  const { role, background, email } = req.body;
  try {
    const newAnnotator = new Annotator({
      role, //ID
      background, //ID
      email,
      isHuman: true
    });
    const savedAnnotator = await newAnnotator.save();
    res.status(201).json(savedAnnotator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // Create a new machine annotator
// exports.createMachineAnnotator = async (req, res) => {
//   const { id, annotator_type, algorithm, accuracy } = req.body;
//   try {
//     const newAnnotator = new MachineAnnotator({
//       id,
//       annotator_type,
//       algorithm,
//       accuracy,
//     });
//     const savedAnnotator = await newAnnotator.save();
//     res.status(201).json(savedAnnotator);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Update an annotator
exports.updateAnnotator = async (req, res) => {
  try {
    const updatedAnnotator = await Annotator.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAnnotator) {
      return res.status(404).json({ message: 'Annotator not found' });
    }
    res.status(200).json(updatedAnnotator);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
