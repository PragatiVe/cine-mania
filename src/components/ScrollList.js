import React, { useRef, useState, useEffect } from 'react';
import './ScrollList.css';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ScrollList = ({ title, movies }) => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollContainerRef.current;
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth-1);
        };
        const container = scrollContainerRef.current;
        container.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollLeft = () => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: -container.clientWidth / 2, behavior: 'smooth' });
    };

    const handleScrollRight = () => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: container.clientWidth / 2, behavior: 'smooth' });
    };

    return (
        <div className='scroll-list'>
            <h2>{title}</h2>
            <div className="scroll-container-wrapper">
                {showLeftArrow && (
                    <div className="scroll-arrow left" onClick={handleScrollLeft}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                )}
                <div className="scroll-container" ref={scrollContainerRef}>
                    {movies.length > 0 ? (
                        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                    ) : (
                        <p>No movies available</p>
                    )}
                </div>
                {showRightArrow && (
                    <div className="scroll-arrow right" onClick={handleScrollRight}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScrollList;
