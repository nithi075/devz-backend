const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// remove this
// app.use("/uploads", express.static("uploads"));

app.use("/gallery", require("./routes/galleryRoutes"));
app.use("/instagram", require("./routes/instagramRoutes"));
app.use("/featured", require("./routes/featuredRoutes"));
app.use("/testimonial", require("./routes/testimonialRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});