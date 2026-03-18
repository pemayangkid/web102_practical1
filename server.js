const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(require("./middleware/formatResponse"));

// Serve static files
app.use(express.static('public'));

// API Documentation route
app.get('/api-docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// API Routes
app.use("/users", require("./routes/users"));
app.use("/posts", require("./routes/posts"));
app.use("/comments", require("./routes/comments"));
app.use("/likes", require("./routes/likes"));
app.use("/followers", require("./routes/followers"));

// Basic route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Social Media API" });
});

// Error handler middleware
app.use(require('./middleware/errorHandler'));
app.use(require('./middleware/formatResponse'));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});