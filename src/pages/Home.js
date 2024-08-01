import React, { useState} from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') return;
    navigate(`/search?q=${searchQuery}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="home-container">
      <div className="search-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>Search for movies, TV shows and more...</h1>
          <input type="text" placeholder='"Friends"' className="search-input"  value={searchQuery} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default Home;

