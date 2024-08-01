import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from '../utils/tmdb';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { type } = location.state || { type: 'movie' }; // Default to 'movie' if type is not provided
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetchDetails(`/${type}/${id}`);
        if (data) {
          setDetails(data);
        } else {
          setError('No details found');
        }
      } catch (err) {
        setError('Error fetching details');
        console.error(err);
      }
    };

    getDetails();
  }, [id, type]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!details) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-header">
        <img
          src={details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : 'path/to/default-image.jpg'}
          alt={details.title || details.name || 'No title'}
          className="detail-poster"
        />
        <div className="detail-info">
          <h1>{details.title || details.name}</h1>
          <p><strong>Release Date:</strong> {details.release_date || details.first_air_date}</p>
          <p><strong>Rating:</strong> {details.vote_average}</p>
          <p><strong>Overview:</strong> {details.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

