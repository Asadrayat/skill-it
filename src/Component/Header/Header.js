import React from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/home.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import './Header.css'
import { useState } from 'react';
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const [btn, setBtnText] = useState('Light');
    // console.log(user);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const ChangeTheme = () => {
        setBtnText('Dark');
    }
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true)
    }
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    const menuItem =
        <>
            <img className='w-20 h-12 mx-9 mt-3' src={img} alt="Avatar Tailwind CSS Component" srcset="" />
            <li>
                <button className='btn btn-outline btn-ghost mt-3 ' onClick={ChangeTheme}>{btn}</button>
            </li>
            < li >
                <Link to='/'><div>
                    <Link to="/home" className="text-decoration-none">
                        <li className="nav-link items  ms-5 p-0 text-light fw-bolder"><h1>Home </h1></li>

                    </Link>
                </div></Link>
            </li>
            <li>
                <Link to="/home" className="text-decoration-none">
                    <li className="nav-link items  ms-5 text-light fw-bolder">Courses</li>
                </Link>
            </li>
            <li>
                <Link to="/faq" className="text-decoration-none">
                    <li className="nav-link items  ms-5 text-light fw-bolder">
                        FAQ
                    </li>
                </Link>
            </li>
            < li > <Link to='/blog'>Blog</Link></li>


            {
                user?.email ?
                    <>
                        <li>
                            <button onClick={handleLogout} className='btn btn-outline mt-3 btn-warning'>Sign Out</button>
                        </li>

                        <li>{
                            user?.photoURL ? <div>
                                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} alt='Avatar' />
                                    </div>
                                    {isHovering && <h2>{user?.displayName}</h2>}
                                </div>
                            </div> :
                                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="avatar">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    {isHovering && <h2>{user?.displayName}</h2>}
                                </div>


                        }


                        </li>
                    </>
                    :
                    <li><Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link>

                    </li>
            }

        </>
    return (
        <div className='mt-12'>
            <div className="navbar bg-base-100 mb-12 h-24 font-semibold	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><img alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Header;