const ts = 1;
const md5 = require('md5');
const getAllCharacters = async (req, res) => {
  const { limit, name, comics } = req.query;
  const baseURL = new URL(`${process.env.BASE_URL}/characters`);
  if (comics && comics > 0) {
    let characters = await getCharactersByComic(comics);
    if (name && name !== '') {
      console.log(name);
      console.log(characters[0].name);
      characters = characters.filter((c) =>
        c.name.toLowerCase().includes(name)
      );
    }
    if (limit && limit !== 0) {
      return res.json(characters.slice(0, limit));
    }
  }
  const params = new URLSearchParams();
  limit && limit !== 0 ? params.append('limit', limit) : null;
  name && name !== '' ? params.append('nameStartsWith', name) : null;
  params.append('apikey', process.env.PUBLIC_KEY);
  params.append(
    'hash',
    md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
  );
  params.append('ts', ts);

  const response = await fetch(baseURL + '?' + params);
  const jsonData = await response.json();
  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    const { results } = jsonData.data;
    res.json(results);
  } else {
    res.status(500).send('error fetching data characters');
  }
};

const getCharacterByName = async (name) => {
  const response = await fetch(
    `${process.env.BASE_URL}/characters?nameStartsWith=${name}&apikey=${
      process.env.PUBLIC_KEY
    }&hash=${md5(
      ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    )}&ts=${ts}`
  );
  const jsonData = await response.json();
  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    return jsonData.data;
  } else {
    return 'error fetching data character: ' + name;
  }
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const response = await fetch(
    `${process.env.BASE_URL}/characters/${id}?apikey=${
      process.env.PUBLIC_KEY
    }&hash=${md5(
      ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    )}&ts=${ts}`
  );
  console.log(response.url);
  const jsonData = await response.json();
  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    if (jsonData.data.results.length > 0) {
      return res.json(jsonData.data.results[0]);
    }
  }
  return res.status(500).send(`error fetching data character ${id}`);
};

const getCharactersByComic = async (comics) => {
  const response = await fetch(
    `${process.env.BASE_URL}/comics/${comics}/characters?apikey=${
      process.env.PUBLIC_KEY
    }&hash=${md5(
      ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    )}&ts=${ts}`
  );
  const jsonData = await response.json();
  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    if (jsonData.data.results.length > 0) {
      return jsonData.data.results;
    }
  }
  return `error fetching data characters in comics: ${comics}`;
};

module.exports = {
  getAllCharacters,
  getCharacterByName,
  getCharacterById,
};
