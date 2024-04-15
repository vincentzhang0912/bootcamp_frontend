import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleLinkClick = () => {
        setIsNavOpen(false);
    };

    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img 
                            src="imgs/plainLogo.png"
                            width="60"
                            height="60"
                            alt="logo"
                        />
                    </Link>
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : 'd-none'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" to="/" onClick={handleLinkClick}>
                                    <i className="bi bi-house-door"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-reset text-decoration-none" to="/About" onClick={handleLinkClick}>
                                    <i className="bi bi-list-task"></i> About Us
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-reset text-decoration-none" to="/Products" onClick={handleLinkClick}>
                                    <i className="bi bi-brightness-high"></i> Products
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link text-reset text-decoration-none" to="/Contact" onClick={handleLinkClick}>
                                    <i className="bi bi-person-lines-fill"></i> Contact Us
                                </Link>
                            </li>
                        </ul>
                        <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">
                            <i className="bi bi-box-arrow-in-right"></i> Login
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
