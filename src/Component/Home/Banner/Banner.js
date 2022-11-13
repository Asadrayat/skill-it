import React from 'react';
import svg from '../../../assets/home.svg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${svg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Skill-It</h1>
                    <p className="mb-5 text-2xl ">Millions of happy students and counting <br />
                    Boost creativity with our award-winning play-based learning platform. Develop core skills -  code, design and more!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;