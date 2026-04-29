const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const controller = require("../controllers/testimonialController");

router.post("/add", upload.single("image"), controller.addTestimonial);
router.get("/all", controller.getTestimonial);
router.delete("/:id", controller.deleteTestimonial);

module.exports = router;