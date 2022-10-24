const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const calculationController = require("../controllers/calculation");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//Since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, calculationController.getCalculation);

//Enables user to create post w/ cloudinary for media uploads
router.post("/createCalculation", upload.single("file"), calculationController.createCalculation);

//Enables user to like post. In controller, uses POST model to update likes by 1
router.put("/likeCalculation/:id", calculationController.likeCalculation);

//Enables user to delete post. In controller, uses POST model to delete post from MongoDB collection
router.delete("/deleteCalculation/:id", calculationController.deleteCalculation);

module.exports = router;
