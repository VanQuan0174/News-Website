import React from 'react';
import BlogCardLarge from './partials/BlogCardLarge';
import BlogCardSmall from './partials/BlogCardSmall';

const RepresentativeAgencies = ({ blogs }) => {
    const largeBlogs = blogs.slice(0, 2); // Lấy 2 blog đầu tiên
    const smallBlogs = blogs.slice(2, 6); // Lấy 4 blog tiếp theo

    return (
        <div className="section__content d-flex">
            {largeBlogs.map((blog, index) => (
                <div className="section__row" key={index}>
                    <BlogCardLarge blog={blog} />
                </div>
            ))}
            <div className="section__row section__row--3">
                <div className="section__row--content d-flex">
                    {smallBlogs.map((blog, index) => (
                        <BlogCardSmall blog={blog} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RepresentativeAgencies;
