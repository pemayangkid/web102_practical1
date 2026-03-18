const { followers } = require("../utils/mockData");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../middleware/errorResponse");

// Get all followers
exports.getFollowers = asyncHandler((req, res) => {
  res.status(200).json({ success: true, count: followers.length, data: followers });
});

// Get single follower
exports.getFollower = asyncHandler((req, res, next) => {
  const follower = followers.find(f => f.id == req.params.id);
  if (!follower) return next(new ErrorResponse("Follower not found", 404));
  res.status(200).json({ success: true, data: follower });
});

// Add follower
exports.createFollower = asyncHandler((req, res) => {
  const newFollower = { id: followers.length + 1, ...req.body };
  followers.push(newFollower);
  res.status(201).json({ success: true, data: newFollower });
});

// Remove follower
exports.deleteFollower = asyncHandler((req, res, next) => {
  const index = followers.findIndex(f => f.id == req.params.id);
  if (index === -1) return next(new ErrorResponse("Follower not found", 404));
  followers.splice(index, 1);
  res.status(200).json({ success: true, message: "Follower removed" });
});