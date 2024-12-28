import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <ul>
                            <li className="category__items-title">TIN TỨC - SỰ KIỆN</li>
                            <li>
                                <a href="#category2">Chuyên mục 2</a>
                            </li>
                            <li>
                                <a href="#category3">Chuyên mục 3</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="category__items-title">HỘI NHẬP VÀ PHÁT TRIỂN</li>
                            <li>
                                <a href="#category2">Chuyên mục 2</a>
                            </li>
                            <li>
                                <a href="#category3">Chuyên mục 3</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="category__items-title">CƠ QUAN ĐẠI DIỆN VÀ KIỀU BÀO</li>
                            <li>
                                <a href="#category2">Chuyên mục 2</a>
                            </li>
                            <li>
                                <a href="#category3">Chuyên mục 3</a>
                            </li>
                        </ul>
                        <ul>
                            <li className="category__items-title">NGHIÊN CỨU - TRAO ĐỔI</li>
                            <li>
                                <a href="#category2">Chuyên mục 2</a>
                            </li>
                            <li>
                                <a href="#category3">Chuyên mục 3</a>
                            </li>
                        </ul>
                    </div>
                    <div className="category__items d-flex">
                        <ul>
                            <li className="category__items-title">PHOTO</li>
                        </ul>
                        <ul>
                            <li className="category__items-title">VIDEO</li>
                        </ul>
                        <ul>
                            <li className="category__items-title">BIÊN GIỚI - BIỂN, ĐẢO</li>
                        </ul>
                        <ul>
                            <li className="category__items-title">TƯ LIỆU - VĂN KIỆN</li>
                        </ul>
                    </div>
                    <div className="category__items">
                        <ul>
                            <li className="category__items-title">DỰ THI ONLINE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
