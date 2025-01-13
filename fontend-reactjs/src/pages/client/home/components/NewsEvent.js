import React from 'react';
import BlogCardLarge from './partials/BlogCardLarge';
import { Link } from 'react-router-dom';

const NewsEvent = ({ blogs }) => {
    const largeBlogs = blogs.slice(0, 2); // Lấy 2 blog đầu tiên
    const smallBlogs = blogs.slice(2, 6); // Lấy 4 blog tiếp theo

    return (
        <>
            <div className="section__content-top d-flex">
                {/* Hiển thị 2 bài viết lớn */}
                {largeBlogs.map((blog, index) => (
                    <div className="section__row" key={index}>
                        <BlogCardLarge blog={blog} />
                    </div>
                ))}
            </div>
            <div className="section__content-bottom d-flex">
                {smallBlogs.map((blog, index) => (
                    <div className="section__article section__article--small d-flex">
                        <div className="section__article--img">
                            <a href="#">
                                <img
                                    src={`${process.env.REACT_APP_UPLOAD_URL}/uploads/blog/${blog.image}`}
                                    alt={blog.title}
                                    className="lazy"
                                />
                            </a>
                        </div>
                        <div className="section__article-title">
                            <Link to={`/blog-detail/${blog.id}`}>
                                {blog.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}
export default NewsEvent