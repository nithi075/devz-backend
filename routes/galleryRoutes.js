const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const controller = require("../controllers/galleryController");

router.post("/add", upload.single("image"), controller.addGallery);
router.get("/all", controller.getGallery);
router.delete("/:id", controller.deleteGallery);

module.exports = router;