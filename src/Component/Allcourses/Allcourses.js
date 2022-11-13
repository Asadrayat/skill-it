import React from 'react';
import { Link } from 'react-router-dom';

const Allcourses = ({ catagory }) => {
    console.log(catagory);
    const { Course_fee, Total_video, details, name, picture } = catagory;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} alt='Avatar' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{details}</p>
                    <p className="py-6 text-2xl font-bold">Course_fee : ${Course_fee}</p>
                    <p className="py-6 text-2xl font-bold">Total_video : {Total_video}</p>
                    <div>
                        <Link to='checkout'>
                            <button className='bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500 text-base-200 px-5 py-2 border rounded-lg'>Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allcourses;