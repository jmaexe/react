const md5 = require('md5');
const ts = 1;

//aggiungere limit
const getAllComics = async (req, res) => {
  const response = await fetch(
    `${process.env.BASE_URL}/comics?apikey=${process.env.PUBLIC_KEY}&hash=${md5(
      ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    )}&ts=${ts}`
  );
  const jsonData = await response.json();

  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    const { results } = jsonData.data;
    res.json(results);
  } else {
    res.send('error fetching data comics');
  }
};

module.exports = getAllComics;
