import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';
import Sidenav from '../Sidenav/Sidenav';
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='grid grid-flow-row-dense grid-cols-2 grid-rows-3  gap-4'>
            <div className='h-screen sticky top-0'>
                <Sidenav></Sidenav>
            </div>
            <div className='mt-5 grid grid-cols-1 w-full gap-4 fw-bolder'>
                {
                    courses.map(course => <CourseSummery
                        key={course.id}
                        course={course}
                    ></CourseSummery>)
                }
            </div>
        </div>

    );
};

export default Courses;