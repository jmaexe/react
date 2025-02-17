const express = require('express');
const router = express.Router();
const getAllStories = require('../controllers/storiesController');

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.url);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization,Origin'
  );
  next();
});

router.get('/stories', getAllStories);

module.exports = router;
