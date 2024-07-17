import React from 'react';
import './Home.css';

const Home = () => {
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
      <div className="trending-section">
      </div>
    </div>
  );
};

export default Home;