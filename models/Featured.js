const mongoose = require("mongoose");

const featuredSchema = new mongoose.Schema({
  title: String, // Global title
  items: [
    {
      title: String,
      image: String,
      category: String // Inga thaan category store aagum (eg: 'traditional-wedding')
    }
  ]
});

module.exports = mongoose.model("Featured", featuredSchema);