import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcourses from '../Component/Allcourses/Allcourses';

const CourseCatagory = () => {
    const Catagories = useLoaderData();
    return (
        <div>
            {
                Catagories.map(catagory => <Allcourses
                key={catagory.id}
                catagory ={catagory}
                ></Allcourses> )
            }
        </div>
    );
};

export default CourseCatagory;