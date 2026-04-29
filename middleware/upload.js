const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary"); // path adjust pannunga

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    allowed_formats: ["jpg", "png", "jpeg", "webp", "pdf"],
    public_id: (req, file) => {
      return Date.now() + "-" + file.originalname.split(".")[0];
    }
  }
});

module.exports = multer({ storage });