const fs = require('fs');

const controller = {
  get: (req, res) => {
    res.status(200).send(text);
  },
  post: (req, res) => {
    var { text } = req.body;
    var texts = JSON.parse(text);
    var str = '';
    var str2 = '';
    var helper = (obj) => {
      for (var key in obj) {
        if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
          str += obj[key] + ',';
        }
      }
      str += '\n';
      str2 += str.slice(0, -1);
      if (obj.children.length > 0) {
        for (var i = 0; i < obj.children.length; i++) {
          helper(obj.children[i]);
        }
      }
    }
    helper(texts);
    fs.appendFile('csv_report.csv', str, 'utf8', (err) => {
      if (err) console.log(err);
      console.log('The "data to append" was appended to file!');
    })
    res.status(201).send();
  }
}
module.exports = controller;
