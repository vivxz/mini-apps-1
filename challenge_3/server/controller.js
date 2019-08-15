const Shop = require('../database/model.js');

const controller = {
  get: (req, res) => {
    Shop.findAll()
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  },
  post: (req, res) => {

  }
}

module.exports = controller;