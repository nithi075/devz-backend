const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  title: String,
  category: String,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Gallery", gallerySchema);