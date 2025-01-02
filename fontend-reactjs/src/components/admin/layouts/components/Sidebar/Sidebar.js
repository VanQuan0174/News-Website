import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ width: '250px', background: '#333', color: '#fff', minHeight: '100vh' }}>
            <h2>Quản Lý</h2>
            <ul>
                <li><Link to="/admin/users" style={{ color: '#fff' }}>Quản lý người dùng</Link></li>
                <li><Link to="/admin/categories" style={{ color: '#fff' }}>Quản lý danh mục</Link></li>
                <li><Link to="/admin/blogs" style={{ color: '#fff' }}>Quản lý bài viết</Link></li>
                <li><Link to="/admin/tags" style={{ color: '#fff' }}>Quản lý thẻ tag</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
