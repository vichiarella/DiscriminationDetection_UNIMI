require("dotenv").config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // await mongoose.connect(`${process.env.SERVICE}://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_URI}/JobDescriptionCollector_Unimi`);
    await mongoose.connect(`${process.env.SERVICE}://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_URI}/${process.env.MONGODB_COLLECTION}`);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
