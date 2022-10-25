import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className="d-flex justify-content-around align-items-center bg-dark p-3 flex-wrap">
                <div class="logo">
                    <img
                        className="img-fluid"
                        src='https://cdn2.vectorstock.com/i/1000x1000/58/36/technical-skill-development-vector-26115836.jpg'
                        alt=""
                    />
                </div>
                <div>
                    <Link to="/courses" className="text-decoration-none">
                        <li className="nav-link items  ms-5 p-0 text-light fw-bolder"><h1>Skill-it </h1></li>

                    </Link>
                </div>
                <div className="menu-container d-flex flex-wrap ">
                    <Link to="/courses" className="text-decoration-none">
                        <li className="nav-link items  ms-5 text-light fw-bolder">Courses</li>
                    </Link>

                    <li
                        role="button"
                        className="nav-link items  ms-5 text-light fw-bolder"
                    >
                        Blog
                    </li>

                    <Link to="/register" className="text-decoration-none">
                        <li className="nav-link items  ms-5 text-light fw-bolder">
                            FAQ
                        </li>
                    </Link>
                    {<Link to="/login" className="text-decoration-none">
                        <li className="nav-link items  ms-5 text-light fw-bolder">Login</li>
                    </Link>}


                </div>
            </nav>
        </div>
    );
};

export default Header;