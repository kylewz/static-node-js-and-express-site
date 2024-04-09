'use strict';

// Requirements
const express = require('express');
const path = require('path');
const { projects } = require('./project-data.json');

const app = express();

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on port 3000');
});
