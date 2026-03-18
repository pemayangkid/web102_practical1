const express = require("express");
const {
  getLikes,
  getLike,
  createLike,
  deleteLike,
} = require("../controllers/likeController");

const router = express.Router();

// CRUD routes for likes
router.get("/", getLikes);          // Get all likes
router.get("/:id", getLike);        // Get a single like
router.post("/", createLike);       // Add a like
router.delete("/:id", deleteLike);  // Remove a like

module.exports = router;