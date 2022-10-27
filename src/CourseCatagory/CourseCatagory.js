import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCatagory = () => {
    const catagory = useLoaderData();
    return (
        <div>
            <h1>Courses are{catagory.length}</h1>
        </div>
    );
};

export default CourseCatagory;