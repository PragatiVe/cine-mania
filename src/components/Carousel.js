import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const Carousel = ({ movies }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,    
        slidesToScroll: 1,   
        autoplay: true,      
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
    

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="carousel-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;