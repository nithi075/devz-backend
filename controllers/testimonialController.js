const Testimonial = require("../models/Testimonial");
const cloudinary = require("../config/cloudinary");

const addTestimonial = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      const uploadResult = await cloudinary.uploader.upload(base64, {
        folder: "testimonials",
      });

      imageUrl = uploadResult.secure_url;
    }

    const testimonial = await Testimonial.create({
      clientName: req.body.clientName,
      review: req.body.review,
      imageUrl,
    });

    res.status(201).json({ success: true, data: testimonial });

  } catch (err) {
    console.error("Testimonial Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ _id: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addTestimonial, getTestimonials, deleteTestimonial };