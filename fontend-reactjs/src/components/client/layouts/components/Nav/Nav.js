import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestApi from '../../../../../helpers/api';

function Nav() {
    const [isCategoryVisible, setCategoryVisible] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false); // Để theo dõi khi chuột ra ngoài

    let timeoutId; // Biến để lưu timeout, tránh tạo nhiều timeout khi di chuột liên tục

    // Hàm xử lý khi di chuột vào
    const handleMouseEnter = () => {
        setCategoryVisible(true); // Khi di chuột vào, hiển thị category
        clearTimeout(timeoutId); // Hủy timeout nếu chuột vào
    };

    // Hàm xử lý khi chuột rời khỏi
    const handleMouseLeave = () => {
        setIsMouseOver(false); // Đặt trạng thái khi chuột rời khỏi
        timeoutId = setTimeout(() => {
            setCategoryVisible(false);
        }, 100); // Thời gian trì hoãn là 1 giây
    };

    // Hàm xử lý khi chuột vào category
    const handleCategoryEnter = () => {
        setIsMouseOver(true); // Đặt lại trạng thái khi chuột vào category
        clearTimeout(timeoutId); // Hủy timeout nếu chuột vào category
    };

    // Hàm xử lý khi chuột rời khỏi category
    const handleCategoryLeave = () => {
        setIsMouseOver(false);
        timeoutId = setTimeout(() => {
            setCategoryVisible(false);
        }, 100);
    };

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await requestApi('/categories/menu', 'GET'); // Gọi API danh mục
                setCategories(res.data); // Lưu dữ liệu vào state

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories(); // Gọi hàm fetchCategories khi component mount
    }, []); // Chạy chỉ một lần khi component mount

    return (
        <>
            <nav className="nav-desktop d-flex align-items-center">
                <div className="nav__content">
                    <div className="nav__content--list">
                        <ul>
                            <li>
                                <a><Link to="/">HOME</Link></a>
                            </li>
                            <li>
                                <a><Link to="/">HỘI NHẬP VÀ PHÁT TRIỂN</Link></a>
                            </li>
                            <li>
                                <a><Link to="/">CƠ QUAN ĐẠI DIỆN VÀ KIỀU BÀO</Link></a>
                            </li>
                            <li>
                                <a><Link to="/">BIÊN GIỚI - BIỂN, ĐẢO</Link></a>
                            </li>
                            <li>
                                <a><Link to="/">NGHIÊN CỨU - TRAO ĐỔI</Link></a>
                            </li>
                            <li>
                                <a><Link to="/">TỰ LIỆU - VĂN KIỆN</Link></a>
                            </li>
                            <li className="category__expand-btn"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                <a href="#">
                                    menu
                                    <i className="ti-menu" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="category"
                onMouseEnter={handleCategoryEnter} // Đặt sự kiện vào category
                onMouseLeave={handleCategoryLeave} // Đặt sự kiện ra ngoài category
                style={{
                    display: isCategoryVisible || isMouseOver ? 'block' : 'none',  // Hiển thị category khi chuột vào
                }}
            >
                <div className="category__list">
                    <div className="category__title">
                        <h3>TẤT CẢ CHUYÊN MỤC</h3>
                    </div>
                    <div className="category__items d-flex">
                        {categories.map(category => (
                            <ul key={category.id}>
                                <li className="category__items-title">{category.name}</li>
                                {category.children && category.children.length > 0 && (
                                    category.children.map(child => (
                                        <li key={child.id}>
                                            <a href={`#category${child.id}`}>{child.name}</a>
                                            {child.children && child.children.length > 0 && (
                                                child.children.map(grandChild => (
                                                    <li key={grandChild.id}>
                                                        <a href={`#category${grandChild.id}`}>{grandChild.name}</a>
                                                    </li>
                                                ))
                                            )}
                                        </li>
                                    ))
                                )}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
