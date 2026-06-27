const Testimonial = require("../models/Testimonial");
const cloudinary = require("../config/cloudinary");

const addTestimonial = async (req, res) => {
  try {
    const { clientName, review } = req.body;

    if (!clientName || !review) {
      return res.status(400).json({
        success: false,
        error: "Client name and review are required",
      });
    }

    let imageUrl = "";

    if (req.file) {
      const base64 = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      const uploadResult = await cloudinary.uploader.upload(base64, {
        folder: "testimonials",
        resource_type: "image",
        timeout: 60000, // 60 seconds
      });

      imageUrl = uploadResult.secure_url;
    }

    const testimonial = await Testimonial.create({
      clientName,
      review,
      imageUrl,
    });

    return res.status(201).json({
      success: true,
      data: testimonial,
    });

  } catch (err) {
    console.error("Testimonial Error:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
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