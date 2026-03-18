const express = require("express");
const {
  getFollowers,
  getFollower,
  createFollower,
  deleteFollower,
} = require("../controllers/followerController");

const router = express.Router();

// CRUD routes for followers
router.get("/", getFollowers);          // Get all followers
router.get("/:id", getFollower);        // Get a single follower
router.post("/", createFollower);       // Add a follower
router.delete("/:id", deleteFollower);  // Remove a follower

module.exports = router;