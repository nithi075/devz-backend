const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  clientName: String,
  review: String,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Testimonial", testimonialSchema);