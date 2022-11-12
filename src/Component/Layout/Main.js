import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3  gap-4'>
                    <div >
                        <Sidenav></Sidenav>
                    </div>
                    <div className='col-span-2'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;