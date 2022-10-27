import React from 'react';

const Allcourses = ({catagory}) => {
    console.log(catagory);
    return (
        <div className='mt-5'>
            <h1>Course title : {catagory.name}</h1>
        </div>
    );
};

export default Allcourses;