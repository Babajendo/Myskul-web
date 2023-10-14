const express = require('express')
const router = express.Router()

// Define a route for the GET request to retreive all news

router.get('/news', (req, res) => {
    const newsData = []
    res.json(newsData)
})

// Define a route for the GET request to retrieve a specific news item by its ID

router.get('/news/:id', (req, res) => {
    const newsId = req.params.id

    const newsItem = {}
    res.json(newsItem)
})

// Define a route for the PATCH request to update a specific news item by its ID

// Get the news ID from the request parameters
router.patch('/news/:id', (req, res) => {
    const newsId = req.params.id

// Get the updated news data from the request body    
   const newsData = req.body

   const updateNewsItem = {}
   res.json(updateNewsItem)
})

module.exports = router 