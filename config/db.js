require('dotenv').config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD, 
    {
       host: process.env.HOST,
       port: process.env.DATABASE_PORT,
       dialect: 'mysql' /* one of | 'postgres' | 'sqlite' | 'mariadb' | 'mysql' | 'db2' | 'snowflake' | 'oracle' */
})

sequelize.authenticate()
   .then(() => {
        console.log('Conection has been established successfully.');


sequelize.sync()
   .then(() => {
        console.log('Models synchronized with the database.');
    })
  .catch((error) => {
        console.error('Error synchronizing models:', error);
    });
})
.catch((error) => {
       console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;