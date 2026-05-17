const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

/* ================= DATABASE ================= */

connectDB();

/* ================= CLOUDINARY CONFIG ================= */

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/* ================= MIDDLEWARE ================= */

app.use(cors());

app.use(express.json());

/* ================= ROUTES ================= */

app.use(
  "/gallery",
  require("./routes/galleryRoutes")
);

app.use(
  "/instagram",
  require("./routes/instagramRoutes")
);

app.use(
  "/featured",
  require("./routes/featuredRoutes")
);

app.use(
  "/testimonial",
  require("./routes/testimonialRoutes")
);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("API Running...");
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});