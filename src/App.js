import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import DetailPage from './pages/DetailPage';
import Trending from './pages/Trending';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/Trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
