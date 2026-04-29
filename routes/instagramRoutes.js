const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const controller = require("../controllers/instagramController");

router.post("/add", upload.single("image"), controller.addInstagram);
router.get("/all", controller.getInstagram);
router.delete("/:id", controller.deleteInstagram);

module.exports = router;