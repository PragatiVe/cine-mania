
import axios from 'axios';

const API_KEY = '64f9bdeee5357628887f2f71b6314b04';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchResultsPage = async (endpoint) => {
  try {
    const url = `${BASE_URL}${endpoint}&api_key=${API_KEY}`;
    console.log('Request URL:', url);
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return null;
  }
};

const fetchMovies = async (endpoint) => {
  try {
    const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
    console.log('Request URL:', url);
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return null;
  }
};

const fetchDetails = async (endpoint) => {
  const response = await fetch(`https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

const fetchLatestMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching latest movies:', error);
  }
};

const fetchLatestTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching latest TV shows:', error);
  }
};


export { fetchMovies, fetchResultsPage, fetchDetails , fetchLatestMovies, fetchLatestTVShows};
