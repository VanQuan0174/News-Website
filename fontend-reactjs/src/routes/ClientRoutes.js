import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/client/home/home';
import Contact from '../pages/client/contact/contact';
import Stiemap from '../pages/client/stiemap/stiemap';
import About from '../pages/client/about/about';
import ClientLayout from '../components/client/layouts/Main';
import DetailBlog from '../pages/client/blog/detailBlog';
import ListBlog from '../pages/client/blog/ListBlog';

const ClientRoutes = () => (
    <Routes>
        <Route path="/" element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Stiemap />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog-detail/:id" element={< DetailBlog />} />
            <Route path="/list-blog/category/:id" element={< ListBlog />} />
        </Route>
    </Routes>
);

export default ClientRoutes;
