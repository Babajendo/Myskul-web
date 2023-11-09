const express = require("express");
const {
  createNews,
  getAllNews,
  getSingleNews,
  updateNews,
  deleteNews,
} = require("../controllers/newsControllers");
const isAdmin = require("../controllers/Admin");
const router = express.Router();

// GET all Newz
router.get("/news", getAllNews);

// GET single Newz
router.get("/news/:Id", getSingleNews);

// CREATE a new newz (requires admin privileges)
router.post("/news", isAdmin, createNews);

// UPDATE a newz by ID (requires admin privileges)
router.patch("/news/:newsId", isAdmin, updateNews);

// DELETE a newz by ID (requires admin privileges)
router.delete("/news/:newsId", deleteNews);

module.exports = router;
