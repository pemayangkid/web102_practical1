const { likes } = require("../utils/mockData");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../middleware/errorResponse");

// Get all likes
exports.getLikes = asyncHandler((req, res) => {
  res.status(200).json({ success: true, count: likes.length, data: likes });
});

// Get single like
exports.getLike = asyncHandler((req, res, next) => {
  const like = likes.find(l => l.id == req.params.id);
  if (!like) return next(new ErrorResponse("Like not found", 404));
  res.status(200).json({ success: true, data: like });
});

// Create like
exports.createLike = asyncHandler((req, res) => {
  const newLike = { id: likes.length + 1, ...req.body };
  likes.push(newLike);
  res.status(201).json({ success: true, data: newLike });
});

// Delete like
exports.deleteLike = asyncHandler((req, res, next) => {
  const index = likes.findIndex(l => l.id == req.params.id);
  if (index === -1) return next(new ErrorResponse("Like not found", 404));
  likes.splice(index, 1);
  res.status(200).json({ success: true, message: "Like removed" });
});