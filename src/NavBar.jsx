import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(

    <nav  className="navbar navbar-expand-sm navbar-dark bg-dark mb-0">
        <div className="container">
            <a className="navbar-brand" href="#">Book Now</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Map</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">INR</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar;