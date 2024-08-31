require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const dbURL = process.env.MONGO_URI;

// view engine setup
app.set("view engine", 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');

app.use("/api/user", userRoutes);

// Protect blog routes with authentication middleware (assume it's written)
const authMiddleware = require('./middleware/auth');  // Ensure this middleware is created
app.use("/api/blog", authMiddleware, blogRoutes);

// Root route
app.get("/", (req, res) => {
    res.redirect("/api/user/register");
});

// Database connection and server start
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB Connected');
        app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
    })
    .catch((err) => {
        console.error('Database connection error:', err);
        process.exit(1);
    });
