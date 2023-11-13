const { where } = require("sequelize");
const Newz = require("../models/newsModel");
const validateNewsTable = require("../validations/newsValidations");
const { v4: uuidv4 } = require("uuid");

const isAdmin = async (req, res) => {
  try {
    // Check if the user is an admin
    if (req.body.role === "admin") {
      const {
        titl,
        imgs,
        shows,
        storey,
        dreg,
        categ,
        categ_id,
        viewz,
        dele,
        imp,
        breakingnews,
        news_expiry,
        impeg,
        skid,
        docklenk,
        typee,
        newsdetails,
        multimage,
      } = req.body;

      const postId = uuidv4();

      // Use await inside the try block
      await Newz.create({
        post_id: postId,
        id: req.body.id, // Make sure to define or destructure 'id' from req.body
        titl,
        imgs,
        shows,
        storey,
        dreg,
        categ,
        categ_id,
        viewz,
        dele,
        imp,
        breakingnews,
        news_expiry,
        impeg,
        skid,
        docklenk,
        typee,
        newsdetails,
        multimage,
      });

      // If everything is successful, return a response
      return res.status(201).json({
        status: true,
        message: "Post created successfully.",
      });
    } else {
      // User is not an admin, return an error
      return res.status(404).json({
        status: false,
        message:
          "Access denied. You are not authorized to perform this action.",
      });
    }
  } catch (error) {
    // Handle any errors
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = isAdmin;
