import React from 'react';
import svg from '../../../assets/About.png'
const About = () => {
    return (
        <div className="hero py-32 bg-base-100">
            <div className="hero-content flex-col gap-28 lg:flex-row">
                <img src={svg} alt='Avatar' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="font-bold text-6xl">Enhance Your <br /> Potential</h1>
                    <p className="py-6 text-2xl">We make learning engaging & effective, so that you are ready to achieve your goals
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;