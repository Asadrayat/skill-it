import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../Component/CourseSummery/CourseSummery';

const CourseCatagory = () => {
    const Catagories = useLoaderData();
    return (
        <div>
            {
                Catagories.map(catagory => <CourseSummery
                key={catagory.id}
                catagory ={catagory}
                ></CourseSummery> )
            }
        </div>
    );
};

export default CourseCatagory;