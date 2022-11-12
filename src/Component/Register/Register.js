import React from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import app from '../Hook/firebaseConfig';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import { useContext } from 'react';
const auth = getAuth(app);
const Register = () => {

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
    const { createUser } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL?.value;
        // console.log(photoURL);
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email, password);
        createUser(email, password, displayName, photoURL)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => console.error(e))
    }
    return (
        <div className=" border border-dark m-4 p-3 w-2/4 rounded-2 mt-5  ">
            <div className='mb-3 text-center'>
                <h1>Signup here</h1>
            </div>
            <form onSubmit={handleSubmit} className="input-box">
            <div>
                        <p>{"error"}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required placeholder="name" name="displayName" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" required placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" required placeholder="password" name="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" name="Confirm password" required placeholder="Confirm password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" required placeholder="photoUrl" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />

                        </div>
                        {/* 
                            <input
                                className="form-control p-3 m-2"
                                type="text"
                                name='name'
                                placeholder="Your name"
                            />
                            <input
                                className="form-control p-3 m-2"
                                type="text"
                                name='photoURL'
                                placeholder="photoURL"
                            />
                            <input
                                className="form-control p-3 m-2"
                                type="email"
                                name='email'
                                placeholder="Email"
                                required
                            />
                            <input
                                className="form-control p-3 m-2"
                                type="password"
                                name='password'
                                placeholder="password"
                                required
                            />


                            <button
                                type="submit" className="btn btn-info mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                                Signup Now
                            </button>
                        </form > */}
                    </div>
            </form>
            <div className="main-container d-flex container justify-content-between align-items-center justify-content-center">
                <div className="d-flex justify-content-between register-form  text-center">
                    


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

export default Register;