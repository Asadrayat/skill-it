import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../Hook/firebaseConfig';
const auth = getAuth(app);
const Register = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        // console.log(form);
    }
    return (
        <div className="mt-5 position-absolute top-50 start-50 translate-middle ">
            <div className='mb-3 text-center'>
                <h1>Signup here</h1>
            </div>
            <div className="main-container d-flex container justify-content-between align-items-center justify-content-center">
                <div className="register-form  text-center">
                    <p>{"error"}</p>
                    <div className="input-box">
                        <input
                            className="form-control p-3 m-2"
                            type="text"
                            name='name'
                            placeholder="Your name"
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


                        <button onClick={handleSubmit}
                            type="submit" className="btn btn-info mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                            Signup Now
                        </button>
                    </div>
                    <button className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
                        <div class="github">
                            <img
                                className=" px-2 image-fluid btn-image"
                                src="https://img.icons8.com/color/344/google-logo.png"
                                alt=""
                            />
                        </div>

                        <p className="fw-bold">Google SignIn</p>
                    </button>
                    <button className="btn mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
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

export default Register;