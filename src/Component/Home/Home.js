import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';
const Home = () => {
const courses = useLoaderData();
console.log(courses);
    return (
        <div className='mt-5 fw-bolder'> 
           {
            courses.map(course => <CourseSummery
            key={course.id}
            course ={course}
            ></CourseSummery>)
           }   
        </div>
    );
};

export default Home;