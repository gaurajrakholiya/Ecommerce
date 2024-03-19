const jwt = require("jsonwebtoken");
const { User } = require("../models/useModel");

//protected route token base
const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin access
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 'admin') {
      return res.status(401).send({
        success: false,
        message: "Unauthorized user",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: " Error in admin middlewares",
    });
  }
};

module.exports = {
    requireSignIn,
    isAdmin,
  };
