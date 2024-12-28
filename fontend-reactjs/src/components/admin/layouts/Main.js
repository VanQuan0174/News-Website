import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/admin/layouts/components/Sidebar/Sidebar';
import Navbar from '../../../components/admin/layouts/components/Nav/Navbar';
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
