import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchResultsPage } from '../utils/tmdb';
import MovieCard from '../components/MovieCard';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    setSearchQuery(query || '');

    const fetchResults = async () => {
      if (query) {
        try {
          const data = await fetchResultsPage(`/search/multi?query=${query}`);
          console.log('API Response:', data);
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
      <h1>Search Results for "{searchQuery}"</h1>
      <div className="results-list">
        {results.length > 0 ? (
          results.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
