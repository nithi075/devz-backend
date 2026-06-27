const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { addTestimonial, getTestimonials, deleteTestimonial } = require("../controllers/testimonialController");

router.post("/add", upload.single("image"), addTestimonial);
router.get("/", getTestimonials);
router.delete("/:id", deleteTestimonial);

module.exports = router;