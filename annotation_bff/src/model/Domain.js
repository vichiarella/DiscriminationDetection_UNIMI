const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
  domain: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Domain', DomainSchema);
