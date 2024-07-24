import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'; // Create a CSS file for styling

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'path/to/default-image.jpg'}
        alt={movie.title || movie.name || 'No title'}
        className="movie-card-image"
      />
      <div className="movie-card-content">
        <h3>{movie.title || movie.name}</h3>
        <p>{movie.overview ? movie.overview.slice(0, 100) + '...' : 'No overview available.'}</p>
      </div>
    </div>
  );
};

export default MovieCard;
