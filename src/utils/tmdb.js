
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
  
  export { fetchMovies, fetchResultsPage, fetchDetails };
