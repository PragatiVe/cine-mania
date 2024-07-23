import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo"><img src={logo} alt="Cinemania Logo" className="logo-img" /></Link>
            </div>
            <div className="nav-center">
                <div className='center-left'>
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </div>
                    <ul className={isOpen ? "nav-links active" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/tvshows">TV Shows</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
                        <li><Link to="/genre">Genre</Link></li>
                        <li><Link to="/language">Language</Link></li>
                    </ul>
                </div>
                <div className="center-right">
                    <Link to="/profile" className="nav-profile"><i className="fas fa-user"></i></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
