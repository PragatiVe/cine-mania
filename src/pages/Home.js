import React, { useState, useEffect } from 'react';
import './Home.css';
import { fetchMovies } from '../utils/tmdb';
import Carousel from '../components/Carousel';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies('/movie/popular');
      setPopularMovies(data.results);
    };

    getMovies();
  }, []);

  return (
    <div className="home-container">
      <div className="search-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>Search for movies, TV shows and more...</h1>
          <input type="text" placeholder="Find" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="trending-section">
        <div className="trending-text">
          <h2>Explore what's Trending</h2>
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