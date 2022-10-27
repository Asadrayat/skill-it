import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import './Header.css'
import { Image } from 'react-bootstrap';
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <nav className="d-flex  justify-content-around align-items-center bg-dark p-3 flex-wrap">
                <div class="logo">
                    <img
                        className="img-fluid"
                        src='https://cdn2.vectorstock.com/i/1000x1000/58/36/technical-skill-development-vector-26115836.jpg'
                        alt=""
                    />
                </div>
                <div>
                    <Link to="/home" className="text-decoration-none">
                        <li className="nav-link items  ms-5 p-0 text-light fw-bolder"><h1>Home </h1></li>

                    </Link>
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
                    <Link to='/blog' className="text-decoration-none">
                        <li
                            role="button"
                            className="nav-link items  ms-5 text-light fw-bolder"
                        >
                            Blog
                        </li>
                    </Link>


                    <Link to="/faq" className="text-decoration-none">
                        <li className="nav-link items  ms-5 text-light fw-bolder">
                            FAQ
                        </li>
                    </Link>

                    <p className='text-light ms-3'>
                        {
                            user?.uid ?
                                <>
                                    <button onClick={handleLogout} className='me-2 btn btn-light'>Logout</button>
                                    <span>{user?.displayName}</span>
                                </>
                                :
                                <>
                                    <div className='d-flex justify-content-around'>
                                        <Link to="/login" className="text-decoration-none">
                                            <li className="nav-link items  ms-1 text-light fw-bolder">Login</li>
                                        </Link>
                                        <Link to="/register" className="text-decoration-none">
                                            <li className="nav-link items  ms-1 text-light fw-bolder">Signup</li>
                                        </Link>
                                    </div>
                                </>
                        }
                    </p>
                    <div className='ms-3' >
                        {user?.photoURL ?
                            <Image roundedCircle style={{ height: "40px" }} src={user?.photoURL} ></Image>
                            : <FontAwesomeIcon className='bg-light' icon={faUser}></FontAwesomeIcon>
                        }
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;