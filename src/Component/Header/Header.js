import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Authprovider, { AuthContext } from '../../Context/AuthProvider/Authprovider';
import './Header.css'
const Header = () => {
    const {user} = useContext(AuthContext);
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
                    <p className='text-light'>{user?.displayName}</p>


                </div>
            </nav>
        </div>
    );
};

export default Header;