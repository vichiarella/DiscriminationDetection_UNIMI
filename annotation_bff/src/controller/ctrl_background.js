const Background = require('../model/BackGround');

exports.createBackground = async (req, res) => {
    const { background } = req.body;
    try {
      const newBackground = new Background({ background });
      const savedBackground = await newBackground.save();
      res.status(201).json(savedBackground);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
exports.getAllBackgrounds = async (req, res) => {
try {
    const backgrounds = await Background.find();
    res.status(200).json(backgrounds.map( x=> ({
      _id: x.id,
      background: x.background
    })));
} catch (error) {
    res.status(500).json({ message: error.message });
}
};