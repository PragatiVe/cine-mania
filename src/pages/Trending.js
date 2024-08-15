import React, { useState, useEffect } from 'react';
import { fetchMovies, fetchLatestMovies , fetchLatestTVShows} from '../utils/tmdb';
import Carousel from '../components/Carousel';
import ScrollList from '../components/ScrollList';
import './Trending.css';

const Trending = () => {
    const [popularMovies, setPopularMovies] = useState([]); //used for carousel
    const [latestMovies, setLatestMovies] = useState([]); //get latest released movies
    const [latestTVShows, setLatestTVShows] = useState([]); //get latest released tv shows
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const popularData = await fetchMovies('/movie/popular');
                const latestMoviesData = await fetchLatestMovies();
                const latestTVShowsData = await fetchLatestTVShows();

                if (popularData && popularData.results) {
                    setPopularMovies(popularData.results);
                } else {
                    console.error('No popular movies found');
                }

                if (latestMoviesData && latestMoviesData.length >0) {
                    setLatestMovies(latestMoviesData);
                } else {
                    console.error('No latest movies found');
                }

                if (latestTVShowsData && latestTVShowsData.length >0) {
                    setLatestTVShows(latestTVShowsData);
                } else {
                    console.error('No latest TV shows found');
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    return (
        <div className='trending-container'>
            <div className="trending-section">
                <div className="trending-text">
                    <h2>Explore what's Trending</h2>
                    <h5>Stay in the loop with trending picks!</h5>
                </div>
                <div className="trending-carousel">
                    {loading ? <p>Loading...</p> : popularMovies.length > 0 ? <Carousel movies={popularMovies} /> : <p>No trending movies found</p>}
                </div>
            </div>
            <div className="divider-line"></div>
            <div className='scroll-list-section'>
                <ScrollList title="Latest Movies" movies={latestMovies} />
                <ScrollList title="Latest TV Shows" movies={latestTVShows} />
            </div>
            <div className="divider-line"></div>
        </div>
    );
};

export default Trending;
