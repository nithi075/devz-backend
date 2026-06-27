const Gallery = require("../models/Gallery");
const cloudinary = require("../config/cloudinary");

const addGallery = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const uploadResult = await cloudinary.uploader.upload(base64, {
      folder: "gallery",
    });

    const gallery = await Gallery.create({
      title: req.body.title,
      category: req.body.category,
      imageUrl: uploadResult.secure_url,
    });

    res.status(201).json({ success: true, data: gallery });

  } catch (err) {
    console.error("Gallery Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addGallery, getGallery, deleteGallery };