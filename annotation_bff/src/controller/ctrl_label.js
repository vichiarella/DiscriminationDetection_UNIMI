const Label = require('../model/Label');

// Create a Label
exports.createLabel = async (req, res) => {
    const { label } = req.body;
    try {
      const savedDomain = await new Label({ label }).save();
      res.status(201).json(savedDomain);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Get all Domains
exports.getAllLabels = async (req, res) => {
try {
    const labels = await Label.find();
    res.status(200).json(labels.map( x=> ({ 
      _id: x.id,
      label: x.label
    })));
} catch (error) {
    res.status(500).json({ message: error.message });
}
};