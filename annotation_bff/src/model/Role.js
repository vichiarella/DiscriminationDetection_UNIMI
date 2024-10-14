const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  role: { type: String, required: true },
  reliability_score: {
    type: Number,
    required: true,
    min: [0, "reliability_score can't be negative"],
    max: [10, "reliability_score can't be grater than 10"],
  },
}, { timestamps: true });
RoleSchema.index({ role: 1 }, { unique: true });

module.exports = mongoose.model('Role', RoleSchema);
