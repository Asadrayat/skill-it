import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state.from.pathname   || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from , {replace : true});
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }
    return (
        <div className="mt-5 mx-10   ">
            <div className="max-w-screen-xl ">
                <div className="register-form flex flex-col justify-center ">
                    <p className='ms-3'>{error}</p>
                    <form onSubmit={handleSubmit} className="input-box">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <p className="link ">
                            <Link to="/register" className="text-center text-decoration-none">
                                <small className="ms-4 text-danger link">
                                    are you new? please register
                                </small> <br />
                            </Link>
                        </p>
                        </div>
                        {/* <input
                            className="form-control p-3 m-2"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            className="form-control p-3 m-2"
                            type="password"
                            name="password"
                            placeholder="password"
                        />
                        <p className="link ">
                            <Link to="/register" className="text-center text-decoration-none">
                                <small className="ms-4 text-danger link">
                                    are you new? please register
                                </small> <br />
                            </Link>
                            <span role="button" className="  ms-4 text-center  text-primary cursor-pointer">
                                <Link to="/register">Forget Password?</Link>
                            </span>
                        </p> */}

                        <button className="btn btn-outline btn-ghost mt-3 border text-center d-  align-items-center justify-content-evenly py-3 px-5 m-auto">
                            Login
                        </button>
                    </form >
                    <div className='flex flex-col'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline  btn-ghost mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                            <div className="w-10">
                                <img
                                    className=" px-2 image-fluid btn-image"
                                    src="https://img.icons8.com/color/344/google-logo.png"
                                    alt=""
                                />
                            </div>

                            <p className="fw-bold">Google SignIn</p>
                        </button>
                        <button onClick={handleGithubSignIn} className="btn btn-outline btn-ghost mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                            <div className="w-10">
                                <img
                                    className=" px-2 image-fluid btn-image"
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                    alt=""
                                />
                            </div>

                            <p className="fw-bold">Github SignIn</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;