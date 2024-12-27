import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListUser from '../resources/views/admin/pages/users/index';
import CreateUser from '../resources/views/admin/pages/users/create';
import UpdateUser from '../resources/views/admin/pages/users/update';
import ListProduct from '../resources/views/admin/pages/products/index';
import CreateProduct from '../resources/views/admin/pages/products/create';


import Home from '../resources/views/client/pages/home/home';
import Contact from '../resources/views/client/pages/contact/contact';
import Stiemap from '../resources/views/client/pages/stiemap/stiemap';
import About from '../resources/views/client/pages/about/about';
import AdminLayout from '../resources/views/admin/Main';
import ClientLayout from '../resources/views/client/Main';
import ListCategory from '../resources/views/admin/pages/categories/index';
import ListBlog from '../resources/views/admin/pages/blogs/index';
import Login from '../resources/views/admin/pages/auth/login';
import ProtectedRoute from '../ProtectedRoute';
import CreateCategory from '../resources/views/admin/pages/categories/create';
import UpdateCategory from '../resources/views/admin/pages/categories/update';
import CreateBlog from '../resources/views/admin/pages/blogs/create';

const RoutesList = () => (
    <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route path="login" element={<Login />} />

            <Route path="users" element={<ProtectedRoute element={<ListUser />} />} />
            <Route path="add-user" element={<ProtectedRoute element={<CreateUser />} />} />
            <Route path="update-user/:id" element={<ProtectedRoute element={<UpdateUser />} />} />

            <Route path="products" element={<ProtectedRoute element={<ListProduct />} />} />
            <Route path="add-product" element={<ProtectedRoute element={<CreateProduct />} />} />

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
