import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${movie.id}`);
  };

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear(): movie.first_air_date
    ? new Date(movie.first_air_date).getFullYear(): 'Unknown';

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'path/to/default-image.jpg'}
        alt={movie.title || movie.name || 'No title'}
        className="movie-card-image"
      />
      <div className="movie-card-content">
        <h3>{movie.title || movie.name}</h3>
        <p className="movie-release-year">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
