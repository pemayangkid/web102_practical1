# Social Media RESTful API - Node.js & Express

This project focuses on building a RESTful API for a social media platform similar to Instagram. The goal was to design clean and well-structured endpoints while implementing them using Node.js and Express.
The API handles resources such as users, posts, comments, likes, and followers. It also includes proper request handling, meaningful HTTP status codes, middleware, and a simple documentation page. Even without a database, mock data is used to simulate real-world behavior.

# Project Structure
social-media-api/
├── controllers/
├── routes/
├── middleware/
├── utils/
├── config/
├── public/
│   └── docs.html
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
└── REFLECTION.md

# Getting Started

## Step 1: Create Project
mkdir social-media-api
cd social-media-api

## Step 2: Initialize Node.js
npm init -y

## Step 3: Install Dependencies
npm install express morgan cors helmet
npm install nodemon --save-dev

## Step 4: Create Project Structure
mkdir -p controllers routes middleware config utils public
touch server.js .env .gitignore

## Step 5: Environment Setup
In the .env file:
PORT=3000

## Step 6: Setup Server
A basic Express server was created in server.js. Middleware such as express.json(), morgan, cors, and helmet were added to handle requests, logging, and security.

## Step 7: Add Mock Data
Since no database was used, a mockData.js file was created to store sample data for users, posts, comments, likes, and followers. This made it possible to test the API easily.

## Step 8: Error Handling
To manage errors properly, separate files were created for handling responses and async operations. This helped keep the code clean and avoided repeating the same logic.

## Step 9: Create Controllers
Controllers were written for each resource to handle the main logic. These included operations like creating, reading, updating, and deleting data.

## Step 10: Create Routes
Routes were defined for each resource such as /users, /posts, and others. Each route supports standard HTTP methods like GET, POST, PUT, and DELETE.

## Step 11: Content Negotiation
A middleware was added to format responses based on the request type. This allows the API to return data in different formats when needed.

## Step 12: API Documentation
A simple documentation page was created inside the public folder. This helps users understand how to use the API and what endpoints are available.

## Step 13: Run the Server
npm run dev
Visit:
http://localhost:3000

# Part 2: API Design
Resources
Users
Posts
Comments
Likes
Followers

Example Endpoints
Users:
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id

The same structure is followed for all other resources to maintain consistency.

# Part 3: Features Implemented

RESTful API design
Proper use of HTTP methods and status codes
Middleware for error handling
Async request handling
Content negotiation
Use of mock data
Basic API documentation

## Testing Checklist
Feature Status
All endpoints working
CRUD operations functioning
Error handling implemented
Routes correctly structured
Documentation accessible

# Resources
Node.js Documentation. (n.d.). Available at: https://nodejs.org
Mozilla Developer Network (MDN). (n.d.). HTTP Methods. Available at: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
GeeksforGeeks. (n.d.). Express.js Tutorial. Retrieved March 16, 2026, from https://www.geeksforgeeks.org/express-js/

Run Locally
npm install
npm run dev

Visit:
http://localhost:3000