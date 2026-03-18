const express = require("express");
const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

// CRUD routes for comments
router.get("/", getComments);          // Get all comments
router.get("/:id", getComment);        // Get a single comment
router.post("/", createComment);       // Create a comment
router.put("/:id", updateComment);     // Update a comment
router.delete("/:id", deleteComment);  // Delete a comment

module.exports = router;