const mongoose = require('mongoose');
const JobPostSchema = require('./JobPost');

const TextSchema = new mongoose.Schema({
  _id: { 
    type: String 
  },
  title: { 
    type: String, 
    required: 
    true 
  },
  text: { type: String, required: true },
  author: { 
    type: String, 
    default: "unknown" 
  },
  data_provider: { 
    type: mongoose.Types.ObjectId, 
    required: true },
  links: {
    type: [
      {
        source: { type: String, required: true },
        url: {
          type: String,
        },
      },
    ],
    
  },
  icu_locale_language_tag: {
    type: String,
    required: true
  },
},
{ timestamps: true });

TextSchema.discriminator('JobPost', JobPostSchema)

module.exports = mongoose.model('Text', TextSchema);
