const express = require('express');
const characterRouter = require('./routes/characters');
const storiesRouter = require('./routes/stories');
const comicsRouter = require('./routes/comics');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.use(characterRouter);
app.use(storiesRouter);
app.use(comicsRouter);
app.listen('5000', () => console.log('listening on port 5000'));
