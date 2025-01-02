import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './../components/admin/layouts/Main';
import ListUser from '../pages/admin/users/index';
import CreateUser from '../pages/admin/users/create';
import UpdateUser from '../pages/admin/users/update';
import ListCategory from '../pages/admin/categories/index';
import CreateCategory from '../pages/admin/categories/create';
import UpdateCategory from '../pages/admin/categories/update';
import ListBlog from '../pages/admin/blogs/index';
import CreateBlog from '../pages/admin/blogs/create';
import Login from '../pages/admin/auth/login';
import ProtectedRoute from '../ProtectedRoute';
import CreateTag from '../pages/admin/tags/create';
import ListTag from '../pages/admin/tags/index';


const AdminRoutes = () => (
    <Routes>
        {/* Đường dẫn không yêu cầu đăng nhập */}
        <Route path="/admin/login" element={<Login />} />

        {/* Đường dẫn yêu cầu đăng nhập */}
        <Route path="/admin" element={<ProtectedRoute element={<AdminLayout />} />}>
            {/* Dashboard mặc định
            <Route index element={<div>Dashboard</div>} /> */}

            {/* Quản lý người dùng */}
            <Route path="users" element={<ListUser />} />
            <Route path="add-user" element={<CreateUser />} />
            <Route path="update-user/:id" element={<UpdateUser />} />

            {/* Quản lý danh mục */}
            <Route path="categories" element={<ListCategory />} />
            <Route path="add-category" element={<CreateCategory />} />
            <Route path="update-category/:id" element={<UpdateCategory />} />

            {/* Quản lý bài viết */}
            <Route path="blogs" element={<ListBlog />} />
            <Route path="add-blog" element={<CreateBlog />} />


            {/* Quản lý thẻ tag của bài viết */}
            <Route path="tags" element={<ListTag />} />
            <Route path="add-tag" element={<CreateTag />} />
        </Route>
    </Routes>
);

export default AdminRoutes;
