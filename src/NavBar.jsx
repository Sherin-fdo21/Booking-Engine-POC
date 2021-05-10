import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(

    <nav  class="navbar navbar-expand-sm navbar-dark bg-dark mb-0">
        <div class="container">
            <a class="navbar-brand" href="#">Book Now</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Map</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">INR</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Navbar;