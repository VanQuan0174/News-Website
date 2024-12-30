import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/client/home/home';
import Contact from '../pages/client/contact/contact';
import Stiemap from '../pages/client/stiemap/stiemap';
import About from '../pages/client/about/about';
import ClientLayout from '../components/client/layouts/Main';
import DetailBlog from '../pages/client/blog/detailBlog';

const ClientRoutes = () => (
    <Routes>
        <Route path="/" element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Stiemap />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog-detail" element={< DetailBlog />} />
        </Route>
    </Routes>
);

export default ClientRoutes;
