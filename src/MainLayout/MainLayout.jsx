import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;