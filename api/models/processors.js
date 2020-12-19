const mongoose = require('mongoose');

const CpuSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true
    },
    processor: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true, 
    },
    review: {
        type: String,
        required: true
      }
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('CPU', CpuSchema);