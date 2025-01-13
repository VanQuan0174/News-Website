import React from 'react';
import { Link } from 'react-router-dom';

const BlogCardSmall = ({ blog }) => (
    <div className="row__item d-flex">
        <div className="row__item--img">
            <Link to={`/blog-detail/${blog.id}`}>
                <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}/uploads/blog/${blog.image}`}
                    alt={blog.title}
                    className="lazy"
                />
            </Link>
        </div>
        <div className="row__item--title">
            <Link to={`/blog-detail/${blog.id}`}>
                {blog.title}
            </Link>
        </div>
    </div>
);

export default BlogCardSmall;
