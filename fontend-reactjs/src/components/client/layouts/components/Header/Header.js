// import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className="header-desktop">
            <div className="header__top d-flex align-items-center">
                <div className="header__top--content d-flex">
                    <div className="header__top--calendar">
                        <p>Thứ tư, 18/5/2022</p>
                    </div>
                    <div className="header__top--nav">
                        <Link
                            className="header__top--nav-item"
                            to="/"
                            title="Trang chủ của chúng tôi"
                        >
                            Trang chủ
                        </Link>
                        <Link
                            className="header__top--nav-item"
                            to="/contact"
                            title="Liên hệ với chúng tôi"
                        >
                            Liên hệ
                        </Link>

                        <Link
                            className="header__top--nav-item"
                            to="/sitemap"
                            title="Sơ đồ website"
                        >
                            Sitemap
                        </Link>

                        <Link
                            className="header__top--nav-item"
                            to="/about"
                            title="Tìm hiểu về chúng tôi"
                        >
                            Giới thiệu
                        </Link>
                        <a className="search"
                            to="/"
                        >
                            <i className="ti-search" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="header__bottom d-flex">
                <div className="header__bottom--left">
                    <img
                        data-src=''
                        className="lazy"
                        alt="cơ quan ban chỉ đọa phòng chống đối ngoại"
                    />
                </div>
                <div className="header__bottom--right">
                    <img
                        src="/assets/images/banner/Cot-co-Ha-noi.jpg"
                        className="lazy"
                        alt=" cột cờ hà Nội"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
