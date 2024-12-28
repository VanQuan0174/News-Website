import React from 'react';

function NewsTicker() {
    return (
        <div className="news-ticker">
            <div className="news-ticker__content d-flex ">
                <div className="news-ticker__left d-flex align-items-center">
                    <div className="news-ticker__left-box d-flex align-items-center ">
                        <i className="icon ti-control-play" />
                        <p className="news-ticker__text">Tin mới</p>
                    </div>
                    <div className="news-ticker__scroll">
                        <marquee className="news-ticker__item">
                            Giới chuyên gia thế giới khẩn trương nghiên cứu bệnh viêm gan bí ẩn ở
                            trẻ em
                        </marquee>
                    </div>
                </div>
                <div className="news-ticker__right d-flex align-items-center">
                    <p className="news-ticker__link">Liên kết website</p>
                    <i className="ti-angle-down" />
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#">Liên kết 1</a>
                        </li>
                        <li>
                            <a href="#">Liên kết 2</a>
                        </li>
                        <li>
                            <a href="#">Liên kết 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default NewsTicker;
