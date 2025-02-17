const express = require('express');
const getAllComics = require('../controllers/comicsController');
const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.url);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization,Origin'
  );
  next();
});

router.get('/comics', getAllComics);

module.exports = router;
