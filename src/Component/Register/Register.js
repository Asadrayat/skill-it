import React from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Hook/firebaseConfig';
const auth = getAuth(app);
const Register = () => {
    
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
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            className="form-control p-3 m-2"
                            type="password"
                            placeholder="password"
                        />


                        <button className="btn btn-info mt-3 border text-center d-flex align-items-center justify-content-evenly py-3 px-5 m-auto">
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