import React from 'react';
import BlogCardLarge from './partials/BlogCardLarge';
import BlogCardSmall from './partials/BlogCardSmall';

const IntegrationDevelopment = ({ blogs }) => {
    // Lấy các blog cho phần lớn và nhỏ
    const largeBlogs = blogs.slice(0, 2); // Lấy 2 blog đầu tiên
    const smallBlogs = blogs.slice(2, 4); // Lấy 4 blog tiếp theo

    return (
        <div className="section__content d-flex">
            {/* Hiển thị 2 bài viết lớn */}
            {largeBlogs.map((blog, index) => (
                <div className="section__row" key={index}>
                    <BlogCardLarge blog={blog} />
                </div>
            ))}

            <div className="section__row section__row--3">
                <div class="section__row--content d-flex">
                    <div className="row__item--top">
                        <img
                            src="http://localhost:8080/uploads/banners/van-kien-dai-hoi-8.jpg"
                            alt="Văn kiện đại hội lần thứ 8"
                        />
                    </div>

                    {/* Hiển thị các bài viết nhỏ */}
                    <div className="section__row--content d-flex">
                        {smallBlogs.map((blog, index) => (
                            <BlogCardSmall blog={blog} key={index} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default IntegrationDevelopment;
