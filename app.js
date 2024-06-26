'use strict';

// Requirements
const express = require('express');
const path = require('path');
const pug = require('pug');
const bodyParser = require('body-parser');
const routerIndex = require('./routes');

// Include JSON project data file
const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', routerIndex);

// Handle 404 errors
app.use((req, res, next) => {
  console.log('Request for ' + req.url + ' not found');
  const err = new Error('Why do you seek that which does not exist?');
  err.status = 404;
  next(err);
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 3000');
});
