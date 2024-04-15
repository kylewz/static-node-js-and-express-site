const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// GET Home page
router.get('/', (req, res) => {
  res.locals.projects = projects;
  res.render('index');
});

module.exports = router;
