import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/admin/layouts/components/Sidebar/Sidebar';
import Navbar from '../../../components/admin/layouts/components/Nav/Navbar';

const AdminLayout = () => {
    useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css');
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
