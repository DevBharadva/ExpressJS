const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

exports.verifyToken = async (req, res, next) => {
  try {
    const authorization = req.cookies.auth_token;
    if (!authorization) {
      return res.json({ message: "Not authorized " });
    }
    let payload = jwt.verify(authorization, process.env.JWT_SECRET);
    // console.log(payload);
    if (!payload) {
      return res.status(401).json({ message: "unauthorized" });
    }
    let user = await User.findOne({ _id: payload.userId });
    if (!user) {
      return res.status(404).json({ message: 'User not Found' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Errror" });
  }
};
