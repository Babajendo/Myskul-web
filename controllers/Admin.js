const { where } = require('sequelize');
const Newz = require('../models/newsModel');
const validateNewsTable = require('../validations/newsValidations');
const { v4: uuidv4 } = require('uuid');

const isAdmin = (req, res, next) => {
  // check if the user is an admin
  if (req.body && req.body.role === "admin") {
    // User is an admin, proceed to the next middleware
    next();
  } else {
    // User is not an admin, return an error
    return res.status(404).json({
      status: false,
      message: "Access denied.You are not authorized to perform this action.",
    });
  }
};

module.exports = isAdmin;
