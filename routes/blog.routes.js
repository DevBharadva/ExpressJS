// routes/blog.routes.js
const express = require('express');
const { showBlogPage, addBlog } = require('../controller/blog.controller');
const authMiddleware = require('../middleware/auth');  // Import authentication middleware
const blogRoutes = express.Router();

blogRoutes.get("/", authMiddleware, showBlogPage);  // Apply middleware here
blogRoutes.post("/", authMiddleware, addBlog);  // Apply middleware here

module.exports = blogRoutes;
