import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidenav.css';

const Sidenav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://skill-it-server.vercel.app/catagory')
            .then(res => res.json())
            .then(data => setCategories(data))

    })
    return (
        <div className='sidebar mt-10  ' >
            <h1 className='text-2xl  font-bold'>All Catagories : {categories.length}</h1>
            <div className='text-2xl font-semibold grid grid-cols-1 align-middle '>
                {
                    categories.map(category => <p className='mt-5 text-blue-600/100' key={category.id}>
                        <Link to={`catagory/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidenav;