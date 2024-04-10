'use strict';

// Requirements
const express = require('express');
const path = require('path');
const { projects } = require('./project-data.json');
const pug = require('pug');
const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 3000');
});
