const mongoose = require('mongoose');

const VideoPostSchema = new mongoose.Schema({
  video_source: String,
}, { timestamps: true });

module.exports = mongoose.model('VideoPost', VideoPostSchema);
