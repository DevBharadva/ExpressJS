// routes/blog.routes.js
const express = require('express');
const blogRoutes = express.Router();
const { showBlogPage, addBlog } = require('../controller/blog.controller');
const {verifyToken} = require('../middleware/auth');  // Import authentication middleware

// blogRoutes.use("/", verifyToken);

blogRoutes.get("/", verifyToken, showBlogPage);  // Apply middleware here
blogRoutes.post("/", verifyToken, addBlog);  // Apply middleware here


module.exports = blogRoutes;
