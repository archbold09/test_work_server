require('dotenv').config();
const { config } = require('../config/index');
const fetch = require('node-fetch');
const URL = process.env.MOVIE_URL_API;

const getMovies = async (movieOption) => {
  try {
    const response = await fetch(`${URL}/movie/${movieOption}?api_key=${config.clientApiKey}&language=es-CO&page=1`);
    const body = await response.json();
    return body.results;
  } catch (error) {
    console.log(`[API REQUEST: ${error.message}]`);
    return error.message;
  }
};

const getDetailMovie = async (movieId) => {
  try {
    const response = await fetch(`${URL}/movie/${movieId}?api_key=${config.clientApiKey}&language=es-es`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.log(`[API REQUEST: ${error.message}]`);
    return error.message;
  }
};

https: module.exports = { getMovies, getDetailMovie };
