import "./NavBar.css";
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Ohio Humanities
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">


                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                         </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            <Link to="/Podcast">
                                <a class="dropdown-item" href="#">Podcasts</a>
                            </Link>

                            <Link to="/archives">
                                <a class="dropdown-item" href="#">Pathways Archives</a>
                            </Link>
                        </div>
                        </li>


                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Live
                         </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            <Link to="/webinar">
                                <a class="dropdown-item" href="#">Webinars</a>
                            </Link>

                            <Link to="/group">
                                <a class="dropdown-item" href="#">Group Discussions</a>
                            </Link>
                            
                        </div>
                        </li>

                        <Link to="/LogIn">
                        <li class="nav-item">
                            <a class="nav-link" >Log in</a>
                        </li>
                    </Link>

                    <Link to="/Register">
                        <li class="nav-item">
                            <a class="nav-link" >Register</a>
                        </li>
                    </Link>


                    </ul>
                </div>


                            

                       
                </div>
            </nav>
        </div>
    )
}