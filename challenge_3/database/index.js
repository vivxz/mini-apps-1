const Sequelize = require('sequelize');

const database = new Sequelize('shoppingCart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

database
 .authenticate()
 .then(() => console.log('Connected to the database'))
 .catch((err) => console.log('Unable to connect to the database', err))

 module.exports = database;