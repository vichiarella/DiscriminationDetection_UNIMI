const mongoose = require('mongoose');

const LabelSchema = new mongoose.Schema({
  label: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Label', LabelSchema);
