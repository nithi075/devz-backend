const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { addGallery, getGallery, deleteGallery } = require("../controllers/galleryController");

router.post("/add", upload.single("image"), addGallery);
router.get("/", getGallery);
router.delete("/:id", deleteGallery);

module.exports = router;