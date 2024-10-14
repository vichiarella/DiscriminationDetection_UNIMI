const mongoose = require('mongoose');

const SocialMediaPostSchema = new mongoose.Schema({
  social_media_source: String,
  hashtags: [String],
}, { timestamps: true });

module.exports = mongoose.model('SocialMediaPost', SocialMediaPostSchema);
