import React from 'react';
import './CourseSummery.css';

const CourseSummery = ({ course }) => {
    return (
        <div className="card w-full flex mt-5 bg-base-100 shadow-xl">
            <figure><img className=' h-96' src={course.picture} alt="Courses" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {course.name}
                    <div className="badge badge-secondary">Premium</div>
                </h2>
                <p> {course.details.length > 100 ?
                    `${course.details.substring(0, 100)}...` : course.details
                }</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">Course_fee : ${course.Course_fee}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseSummery;