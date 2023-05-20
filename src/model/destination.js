const mongoose = require("mongoose");

const destSchema = new mongoose.Schema({
    imgSrc: {
        type: String,
        required: true
      },
      destTitle: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      fees: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      }

});
module.exports = mongoose.model("Destination", destSchema);