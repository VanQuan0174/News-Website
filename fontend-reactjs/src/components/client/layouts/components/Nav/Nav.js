import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    // chi tiết menu 
    const [menu, setMenus] = useState([]);
    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const res = await requestApi('/categories/get-category-with-children', 'GET'); // Gọi API danh mục
                setMenus(res.data); // Lưu dữ liệu vào state

            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchMenus(); // Gọi hàm fetchCategories khi component mount
    }, []); // Chạy chỉ một lần khi component mount

    // danh mục

    const [categories, setCategories] = useState([]); // State lưu danh sách sản phẩm
    // Hàm lấy danh sách sản phẩm
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await requestApi('/categories', 'GET');
                setCategories(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách danh mục', error);
            }
        };
        fetchCategories();
    }, []);


    const navigate = useNavigate();
    return (
        <>
            <nav className="nav-desktop d-flex align-items-center">
                <div className="nav__content">
                    <div className="nav__content--list">
                        <ul>
                            <li>
                                <a><Link to="/">TRANG CHỦ</Link></a>
                            </li>
                            {categories.slice(0, 5).map((category, index) => (
                                <li key={index}>
                                    <a>
                                        <Link to={`list-blog/category/${category.id}`}>
                                            {category.name}
                                        </Link>
                                    </a>
                                </li>
                            ))}
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
                        {menu.map(menu => (
                            <ul key={menu.id}>
                                <li className="category__items-title" onClick={() => navigate(`list-blog/category/${menu.id}`)}>{menu.name}</li>
                                {menu.children && menu.children.length > 0 && (
                                    menu.children.map(child => (
                                        <li key={child.id}>
                                            <a href={`list-blog/category/${child.id}`}>{child.name}</a>
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
