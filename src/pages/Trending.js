import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/tmdb';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';
import './Trending.css';

const Trending = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [latestMovies, setLatestMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchMovies('/movie/popular');
            console.log('Fetched Movies Data:', data);
            if (data && data.results) {
                setPopularMovies(data.results);
            } else {
                console.error('No results found or data is null:', data);
            }

            const latestData = await fetchMovies('/movie/now_playing');
            console.log('Fetched LatestMovies Data:', latestData);
            if (latestData && latestData.results) {
                setLatestMovies(latestData.results);
            }
            else {
                console.error('No results found or data is null:', latestData);
            }

        };

        getMovies();
    }, []);

    return (
        <div className='trending-container'>
            <div className="trending-section">
                <div className="trending-text">
                    <h2>Explore what's Trending</h2>
                    <h5>Stay in the loop with trending picks!</h5>
                </div>
                <div className="trending-carousel">
                    {popularMovies.length > 0 ? <Carousel movies={popularMovies} /> : <p>Loading...</p>}
                </div>
            </div>
            <div className="divider-line"></div>
            <div className="latest-movies-section">
                <div className="section-header">
                    <h2>Latest Movies</h2>
                </div>
                
            </div>
            <div className="divider-line"></div>
        </div>
    );
};

export default Trending;