import React, { useState, useEffect } from 'react';
import './Home.css';
import { fetchMovies } from '../utils/tmdb';
import Carousel from '../components/Carousel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies('/movie/popular');
      console.log('Fetched Movies Data:', data); 
      if (data && data.results) {
        setPopularMovies(data.results);
      } else {
        console.error('No results found or data is null:', data);
      }
    };

    getMovies();
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') return;
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className="home-container">
      <div className="search-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>Search for movies, TV shows and more...</h1>
          <input type="text" placeholder="Find" className="search-input"  value={searchQuery} onChange={handleInputChange}/>
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="trending-section">
        <div className="trending-text">
          <h2>Explore what's Trending</h2>
          <h5>Stay in the loop with trending picks!</h5>
        </div>
        <div className="trending-carousel">
          {popularMovies.length > 0 ? <Carousel movies={popularMovies} /> : <p>Loading...</p>}
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default Home;

