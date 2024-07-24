import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = ({ movies }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,    
        slidesToScroll: 1,   
        autoplay: true,
        arrows: false,      
        autoplaySpeed: 3000, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1 
            }
          }
        ]
      };
    
    console.log('Movies in Carousel:', movies);  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || 'Movie Poster'}
                onError={(e) => e.target.src = 'fallback_image_url'}
              />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;