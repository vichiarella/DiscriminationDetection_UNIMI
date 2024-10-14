const mongoose = require('mongoose');

// const AnnotatorSchema = new mongoose.Schema({
//   annotator_type: { type: mongoose.Schema.Types.ObjectId, ref: 'AnnotatorType'},
// }, { timestamps: true });

const Annotator = new mongoose.Schema(
  {
    role: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Role",
    },
    background: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Background",
    },
    email:{
      type: String,
    },
    isHuman: { type: Boolean, required: true },
  },
  { timestamps: true }
);



module.exports = mongoose.model('Annotator', Annotator);
