require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 
const bodyParser = require('body-parser')
// const sequelize = require('./config/db')
// const Newz = require('./models/newsModel')
// const ValidateNewsTable = require('./validations/newsValidations')
const newsRouter = require('./routes/newsRoutes')


app.use(bodyParser.json())

app.use('/api/v1/news', newsRouter)


app.get('/', (req, res) => {
    res.send({message: 'You are welcome to Yabatech'})
})

app.listen(port, () => {
    console.log(`This server is listening on port ${port}`)
})