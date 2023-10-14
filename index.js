require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT
const Joi = require('joi')
//const data = require('./.newsdata')
const sequelize = require('./config/db')
const mysql = require('mysql2')
const router = require('./controllers/newsControllers')

const app = express()

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('You are welcome to Yabatech!')
})

sequelize.authenticate()
.then(res => {
    app.listen(port, () =>
        console.log(`This website is listening on port ${port}`))
        console.log('This database has been connected succesfully')
    })
    
.catch(err => console.log('error: ', `db connection failure`))

//module.exports = data 