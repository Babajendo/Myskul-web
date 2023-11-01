const express = require('express')
const { createNews, getAllNews, getSingleNews, updateNews, deleteNews } = require('../controllers/newsControllers')
const router = express.Router()


// GET all Newz
router.get('/get-all', getAllNews)

// GET single Newz
router.get('/get-single', getSingleNews)

// POST Newz
router.post('/create', createNews)

// UPDATE Newz
router.patch('/update', updateNews)

// DELETE Newz
router.delete('/delete', deleteNews)



module.exports = router
