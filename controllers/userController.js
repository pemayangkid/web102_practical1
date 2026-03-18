// controllers/users.js

const ErrorResponse = require('../middleware/errorResponse');
const asyncHandler = require('../middleware/async');
const { users } = require('../utils/mockData');

// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = asyncHandler(async (req, res, next) => {
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = users.length;

    // Get paginated results
    const results = users.slice(startIndex, endIndex);

    // Pagination result
    const pagination = {};
    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit
        };
    }
    if (startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit
        };
    }

    res.status(200).json({
        success: true,
        count: results.length,
        page,
        pagination,
        totalPages: Math.ceil(total / limit),
        data: results
    });
});

// @desc    Get single user
// @route   GET /api/users/:id
// @access  Public
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

// @desc    Create new user
// @route   POST /api/users
// @access  Public
exports.createUser = asyncHandler(async (req, res, next) => {
    const newUser = {
        id: (users.length + 1).toString(),
        username: req.body.username,
        email: req.body.email,
        full_name: req.body.full_name,
        profile_picture: req.body.profile_picture || 'default-profile.jpg',
        bio: req.body.bio || '',
        created_at: new Date().toISOString().slice(0, 10)
    };

    // Check if username already exists
    const existingUser = users.find(u => u.username === newUser.username);
    if (existingUser) {
        return next(new ErrorResponse('Username already exists', 400));
    }

    users.push(newUser);

    res.status(201).json({
        success: true,
        data: newUser
    });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private (simulated)
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404));
    }

    // Update user
    const index = users.findIndex(u => u.id === req.params.id);
    users[index] = {
        ...user,
        ...req.body,
        id: user.id // Ensure ID doesn't change
    };

    res.status(200).json({
        success: true,
        data: users[index]
    });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private (simulated)
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const user = users.find(u => u.id === req.params.id);

    if (!user) {
        return next(new ErrorResponse(`User not found with id of ${req.params.id}`, 404));
    }

    const index = users.findIndex(u => u.id === req.params.id);
    users.splice(index, 1);

    res.status(200).json({
        success: true,
        data: {}
    });
});