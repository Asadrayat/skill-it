import React from 'react';
import './CourseSummery.css';
import { Button, Card } from 'react-bootstrap';

const CourseSummery = ({ course }) => {
    return (
        <div >
            <Card className='card' style={{ width: '53rem' }}>
                <Card.Img  variant="top" src={course.picture} />
                <Card.Body>
                    <Card.Title className='fs-1' >{course.name}</Card.Title>
                    <Card.Text className='fw-normal'>
                        {course.details}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummery;