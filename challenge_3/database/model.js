const Sequelize = require('sequelize');
const database = require('./index.js');

const Shop = database.define('account', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { len: 10 }
  },
  creditCardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  expirationDate: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { len: 4 }
  },
  cvv: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { len: 3 }
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { len: 5 }
  }
}, { timestamps: false })

database
  .sync({})
  .then(() => console.log('SYNCED!'))
  .catch(() => console.log('NOT SYNCED!'));

module.exports = Shop;