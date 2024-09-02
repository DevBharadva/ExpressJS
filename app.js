require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const dbURL = process.env.MONGO_URI;
const cookies = require('cookie-parser');

// view engine setup
app.set("view engine", 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());

// Routes
const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');
const { verifyToken } = require('./middleware/auth');


// app.use("/api/user", userRoutes);
// app.use('/api/blog',blogRoutes)

// Protect blog routes with authentication middleware (assume it's written)


// // Root route
app.get("/", (req, res) => {
    res.render("register.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/blog",verifyToken, (req, res) => {
    console.log('Hello wolrd ----------------------------------------------------------');
    res.render("blog.ejs");
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
