const mongoose = require("mongoose");

const instagramSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  postLink: String
});

module.exports = mongoose.model(
  "Instagram",
  instagramSchema
);