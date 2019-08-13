let text = [];

const controller = {
  get: (req, res) => {
    res.status(200).send(text);
  },
  post: (req, res) => {
    console.log(req.body);
  }
}

module.exports = controller;
