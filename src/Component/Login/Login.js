import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
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
                navigate('/');
            })
            .catch(e => console.error(e))
    }
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="mt-5 position-absolute top-50 start-50 translate-middle ">
            <div className="main-container d-flex container justify-content-between align-items-center justify-content-center">
                <div className="register-form ">
                    <p>{"error"}</p>
                    <form onSubmit={handleSubmit} className="input-box">
                        <input
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
                            <Link to="/register" className="text-decoration-none">
                                <small className="text-danger link">
                                    are you new? please register
                                </small>
                            </Link>
                            <span role="button" className="ms-4 text-center  text-primary cursor-pointer">
                                <Link to="/register">Forget Password?</Link>
                            </span>
                        </p>

                        <button className="btn btn-info mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                            Login
                        </button>
                    </form >
                    <button onClick={handleGoogleSignIn} className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                        <div class="github">
                            <img
                                className=" px-2 image-fluid btn-image"
                                src="https://img.icons8.com/color/344/google-logo.png"
                                alt=""
                            />
                        </div>

                        <p className="fw-bold">Google SignIn</p>
                    </button>
                    <button onClick={handleGithubSignIn} className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                        <div class="github">
                            <img

                                className="px-2 image-fluid btn-image"
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt=""
                            />
                        </div>
                        <p className=" fw-bold">Github SignIn</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;