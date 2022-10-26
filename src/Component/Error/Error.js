import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='mt-5'>
            <div className=''>
                
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only'>Error</span>404
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link
                        to='/'
                        className=''
                    >
                        Back to Courses
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;