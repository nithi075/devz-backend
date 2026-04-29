const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  clientName: String,
  review: String,
  imageUrl: String
});

module.exports = mongoose.model(
  "Testimonial",
  testimonialSchema
);