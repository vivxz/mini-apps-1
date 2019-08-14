const express = require('express');
const router = require('./server/router.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));