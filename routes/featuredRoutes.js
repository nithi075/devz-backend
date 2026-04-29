const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const controller = require("../controllers/featuredController");

router.post(
  "/add",
  upload.array("images", 8),
  controller.addFeatured
);

router.get("/all", controller.getFeatured);

module.exports = router;