import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';  // Add this line to include a basic CSS file
import Home from './pages/Home';

const Movies = () => <div>Movies Page</div>;
const TVShows = () => <div>TV Shows Page</div>;
const Trending = () => <div>Trending Page</div>;
const Genre = () => <div>Genre Page</div>;
const Language = () => <div>Language Page</div>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/language" element={<Language />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
