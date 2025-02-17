const express = require('express');
const router = express.Router();
const {
  getAllCharacters,
  getCharacterByName,
  getCharacterById,
} = require('../controllers/charactersController.js');

router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.url);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization,Origin'
  );
  next();
});

router.get('/characters', getAllCharacters);
router.get('/characters/:id', getCharacterById);
module.exports = router;
