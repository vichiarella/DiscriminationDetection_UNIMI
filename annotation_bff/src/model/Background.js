const mongoose = require('mongoose');

const BackgroundSchema = new mongoose.Schema({
  background: { 
    type: String, 
    required: true,
    unique: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Background', BackgroundSchema);
