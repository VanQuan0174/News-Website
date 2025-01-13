import React from 'react';
import { Link } from 'react-router-dom';

const BlogCardLarge = ({ blog }) => (
    <div className="section__article section__article--large">
        <div className="section__article--img">
            <Link to={`/blog-detail/${blog.id}`}>
                <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}/uploads/blog/${blog.image}`}
                    alt={blog.title}
                    className="lazy"
                />
            </Link>
        </div>
        <div className="section__article-title">
            <Link to={`/blog-detail/${blog.id}`}>
                {blog.title}
            </Link>
        </div>
        <p className="section__article-summary text-medium color-dark-gray">
            {blog.summary}
        </p>
    </div>
);

export default BlogCardLarge;
