import React, { useEffect, useState } from 'react';
import requestApi from '../../../../../helpers/api';

function NewsTicker() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Lấy tất cả các bài viết và thông tin về danh mục trong một lần gọi API
                const res = await requestApi('/blogs', 'GET');

                setBlogs(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách bài viết hoặc danh mục', error);
            }
        };
        fetchBlogs();
    }, []);
    return (
        <div className="news-ticker">
            <div className="news-ticker__content d-flex ">
                <div className="news-ticker__left d-flex align-items-center">
                    <div className="news-ticker__left-box d-flex align-items-center ">
                        <i className="icon ti-control-play" />
                        <p className="news-ticker__text">Tin mới</p>
                    </div>
                    <div className="news-ticker__scroll d-flex align-items-center">
                        <marquee scrollamount="10" className="news-ticker__item">
                            {blogs.map((blog, index) => (
                                <span key={index} className="news-ticker__title">
                                    {blog.title}
                                    {index < blogs.length - 1 ? '   ' : ''}
                                </span>
                            ))}
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
