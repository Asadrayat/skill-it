import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const ctg = useLoaderData();
    return (
        <div>
            <p className='text-center text-6xl text-bold'>{ctg[0].name}</p>
        </div>
    );
};

export default CheckOut;