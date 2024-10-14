const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema(  {
    job_type: { 
      type: String, 
      required: true 
    },
    title: { 
      type: String, 
      required: true 
    },
    company: { 
      type: String, 
      default: "" 
    },
    location: { 
      type: String, 
      required: true 
    },
    employment_type: { 
      type: String 
    },
  },
  { timestamps: true });

module.exports = JobPostSchema; 