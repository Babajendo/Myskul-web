const { where } = require("sequelize");
const Newz = require("../models/newsModel");
const validateNewsTable = require("../validations/newsValidations");
const { v4: uuidv4 } = require("uuid");

const { error } = validateNewsTable();

if (error !== undefined) {
  throw new Error("Validation error");
}

const createNews = async (req, res) => {
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

  const { error } = validateNewsTable();
  if (error !== undefined) {
    throw new Error("Validation error");
  }

  const newsId = uuidv4();
  try {
    await Newz.create({
      news_id: newsId,
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

    return res
      .status(201)
      .json({ status: true, message: "post created successfully," });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getAllNews = async (req, res) => {
  try {
    const news = await Newz.findAll();

    return res.status(201).json({
      status: true,
      message: "news is ready, have a good read",
      data: news,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getSingleNews = async (req, res) => {
  try {
    const news = await Newz.findOne();

    return res.status(201).json({ status: true, data: news });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const updateNews = async (req, res) => {
  const { post_id } = req.params; // Assuming you pass the post_id as a parameter in the route
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

  try {
    const updatedNews = await Newz.update(
      {
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
      },
      {
        where: { post_id: post_id },
      }
    );

    if (updatedNews[0] === 1) {
      // Check if one row was affected, indicating a successful update
      return res.status(200).json({
        status: true,
        message: "News updated successfully",
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "News not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteNews = async (req, res) => {
  const { post_id } = req.params; // Assuming you pass the post_id as a parameter in the route

  try {
    const deletedNews = await Newz.destroy({
      where: { post_id: post_id },
    });

    if (deletedNews === 1) {
      // Check if one row was deleted, indicating a successful deletion
      return res.status(200).json({
        status: true,
        message: "News deleted successfully",
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "News not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  createNews,
  getAllNews,
  getSingleNews,
  updateNews,
  deleteNews,
};
