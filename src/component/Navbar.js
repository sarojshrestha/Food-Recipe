import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="logo" />
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/recipes">Recipe</Link>
                    </li>
                </ul>
            </div>
        </nav>);
}

export default Navbar;