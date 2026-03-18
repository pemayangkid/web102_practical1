const { comments } = require("../utils/mockData");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../middleware/errorResponse");

// Get all comments
exports.getComments = asyncHandler((req, res) => {
  res.status(200).json({ success: true, count: comments.length, data: comments });
});

// Get single comment
exports.getComment = asyncHandler((req, res, next) => {
  const comment = comments.find(c => c.id == req.params.id);
  if (!comment) return next(new ErrorResponse("Comment not found", 404));
  res.status(200).json({ success: true, data: comment });
});

// Create comment
exports.createComment = asyncHandler((req, res) => {
  const newComment = { id: comments.length + 1, ...req.body, created_at: new Date().toISOString() };
  comments.push(newComment);
  res.status(201).json({ success: true, data: newComment });
});

// Update comment
exports.updateComment = asyncHandler((req, res, next) => {
  const comment = comments.find(c => c.id == req.params.id);
  if (!comment) return next(new ErrorResponse("Comment not found", 404));
  Object.assign(comment, req.body);
  res.status(200).json({ success: true, data: comment });
});

// Delete comment
exports.deleteComment = asyncHandler((req, res, next) => {
  const index = comments.findIndex(c => c.id == req.params.id);
  if (index === -1) return next(new ErrorResponse("Comment not found", 404));
  comments.splice(index, 1);
  res.status(200).json({ success: true, message: "Comment deleted" });
});