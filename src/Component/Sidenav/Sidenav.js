import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidenav.css';

const Sidenav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => setCategories(data))

    })
    return (
        <div className='sidebar mt-5  bg-dark bg-opacity-70% ' >
            <h1 className='p-4 text-light'>All Catagories : {categories.length}</h1>
            <div className='p-4 '>
                {
                    categories.map(category => <p  key={category.id}>
                        <Link to={`catagory/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidenav;