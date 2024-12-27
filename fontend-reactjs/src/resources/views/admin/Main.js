import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import Navbar from './layouts/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLayout = () => {
    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css'); // Chỉ tải Bootstrap khi AdminLayout được render
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Navbar />
                <div style={{ padding: '20px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};


export default AdminLayout;
