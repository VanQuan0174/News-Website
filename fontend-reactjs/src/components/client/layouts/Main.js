import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet từ react-router-dom
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import NewsTicker from './components/NewsTicker/NewsTicker';
import './../../../public/assets/client/assets/styles/layout.scss';
import './../../../public/assets/client/assets/styles/styles.scss';

import { ready } from '../../../utils/imgLazy'; // Import hàm ready để lazy load


const ClientLayout = () => {
    // Sử dụng useEffect để khởi chạy lazy loading khi component render
    useEffect(() => {
        ready(); // Gọi hàm lazy loading
    }, []); // Mảng rỗng đảm bảo chỉ chạy một lần khi component mount

    return (
        <React.Fragment>
            <Header />
            <Nav />
            <NewsTicker />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default ClientLayout;
