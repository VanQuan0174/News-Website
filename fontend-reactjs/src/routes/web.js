import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListUser from '../pages/admin/users/index';
import CreateUser from '../pages/admin/users/create';
import UpdateUser from '../pages/admin/users/update';


import Home from '../pages/client/home/home';
import Contact from '../pages/client/contact/contact';
import Stiemap from '../pages/client/stiemap/stiemap';
import About from '../pages/client/about/about';
import AdminLayout from './../components/admin/layouts/Main';
import ClientLayout from '../components/client/layouts/Main';
import ListCategory from '../pages/admin/categories/index';
import ListBlog from '../pages/admin/blogs/index';
import Login from '../pages/admin/auth/login';
import ProtectedRoute from '../ProtectedRoute';
import CreateCategory from '../pages/admin/categories/create';
import UpdateCategory from '../pages/admin/categories/update';
import CreateBlog from '../pages/admin/blogs/create';

const RoutesList = () => (
    <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route path="login" element={<Login />} />

            <Route path="users" element={<ProtectedRoute element={<ListUser />} />} />
            <Route path="add-user" element={<ProtectedRoute element={<CreateUser />} />} />
            <Route path="update-user/:id" element={<ProtectedRoute element={<UpdateUser />} />} />

            <Route path="categories" element={<ProtectedRoute element={<ListCategory />} />} />
            <Route path="add-category" element={<ProtectedRoute element={<CreateCategory />} />} />
            <Route path="update-category/:id" element={<ProtectedRoute element={<UpdateCategory />} />} />

            <Route path="blogs" element={<ProtectedRoute element={<ListBlog />} />} />
            <Route path="add-blog" element={<ProtectedRoute element={<CreateBlog />} />} />



        </Route>

        {/* Client Routes */}
        <Route path="/" element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Stiemap />} />
            <Route path="/about" element={<About />} />
        </Route>
    </Routes>
);

export default RoutesList;
