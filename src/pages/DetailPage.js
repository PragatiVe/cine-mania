import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../utils/tmdb';

const DetailPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovies(`/movie/${id}`);
      setDetails(data);
    };

    getDetails();
  }, [id]);

  if (!details) return <div>Loading...</div>;

  return (
    <div className="detail-page">
      <h1>{details.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
      <p>{details.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailPage;
