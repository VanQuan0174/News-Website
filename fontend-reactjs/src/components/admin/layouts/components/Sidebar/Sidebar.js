import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '250px', background: '#333', color: '#fff', minHeight: '100vh' }}>
            <h2>Quản Lý</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '15px 20px' }}>
                <li style={{ marginTop: '10px' }}>
                    <Link to="/admin/users" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
                        Quản lý người dùng
                    </Link>
                </li>
                <li style={{ marginTop: '10px' }}>
                    <Link to="/admin/categories" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
                        Quản lý danh mục
                    </Link>
                </li>
                <li style={{ marginTop: '10px' }}>
                    <Link to="/admin/blogs" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
                        Quản lý bài viết
                    </Link>
                </li>
                <li style={{ marginTop: '10px' }}>
                    <Link to="/admin/tags" style={{ color: '#fff', textDecoration: 'none', fontSize: '20px' }}>
                        Quản lý thẻ tag
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
