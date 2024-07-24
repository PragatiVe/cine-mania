import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovies } from '../utils/tmdb';
import MovieCard from '../components/MovieCard';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // const searchQuery = new URLSearchParams(location.search).get('q');
    // const fetchResults = async () => {
    //   if (searchQuery) {
    //     const data = await fetchMovies(`/search/multi?query=${searchQuery}`);
    //     setResults(data.results);
    //   }
    // };

    const searchQuery = new URLSearchParams(location.search).get('q');
  const fetchResults = async () => {
    if (searchQuery) {
      try {
        const data = await fetchMovies(`/search/multi?query=${searchQuery}`);
        console.log('API Response:', data);  // Log the entire response
        if (data && data.results) {
          setResults(data.results);
        } else {
          console.error('No results found in response');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

    fetchResults();
  }, [location.search]);

  return (
    <div className="search-results">
      <h1>Search Results</h1>
      <div className="results-list">
        {results.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
