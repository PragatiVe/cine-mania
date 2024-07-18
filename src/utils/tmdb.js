import axios from 'axios';

const API_KEY = '64f9bdeee5357628887f2f71b6314b04';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};