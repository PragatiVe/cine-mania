import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo"><img src={logo} alt="Cinemania Logo" className="logo-img" /></Link>
            </div>

            <div className="nav-right">
                <Link to="/" className="nav-icon"><i className="fas fa-home"></i></Link>
                <Link to="/trending" className="nav-icon"><i className="fas fa-chart-line"></i></Link>
                <Link to="/watchlist" className="nav-icon"><i className="fas fa-heart"></i></Link>
                <Link to="/profile" className="nav-icon"><i className="fas fa-user"></i></Link>
            </div>
        </nav>
    );
};

export default Navbar;
