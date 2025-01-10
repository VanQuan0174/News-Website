import React, { useEffect, useState } from 'react';
import '../../../public/assets/client/assets/styles/page/home.scss';
import requestApi from '../../../helpers/api';

import FeaturedNew from './components/FeaturedNew'
import LatestNew from './components/LatestNew';
import Video from './components/Video';
import Photo from './components/Photo';
import MostViewed from './components/MostViewed';
import NewsEvent from './components/NewsEvent';
import HomeMenus from './components/HomeMenus';
import { Link } from 'react-router-dom';

function Home() {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const res = await requestApi('/categories/menu', 'GET'); // Gọi API danh mục
                setMenus(res.data); // Lưu dữ liệu vào state
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchMenus();
    }, []);

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

    // Lọc bài viết thuộc danh mục "HỘI NHẬP VÀ PHÁT TRIỂN"
    const integrationDevelopmentCategory = menus.find(menu => menu.name === "HỘI NHẬP VÀ PHÁT TRIỂN");
    const filteredBlogs = blogs.filter(blog =>
        blog.categoryId === integrationDevelopmentCategory?.id
    );
    const representativeCategory = menus.find(menu => menu.name === "CƠ QUAN ĐẠI DIỆN VÀ KIỀU BÀO");
    const filteredBlogss = blogs.filter(blog =>
        blog.categoryId === representativeCategory?.id
    );

    return (
        <main className="main d-flex">
            <FeaturedNew />

            <LatestNew />

            <section className="main__section--banner d-flex">
                <div className="banner__left">
                    <img data-src="http://localhost:8080/uploads/banners/banner-left.jpg" className="lazy" />
                </div>
                <div className="banner__right">
                    <img data-src="http://localhost:8080/uploads/banners/banner-right.jpg" className="lazy" />
                </div>
            </section>

            <section className="main__section--news-event d-flex">
                <div className="section__left d-flex">
                    <div className="section__nav d-flex">
                        <HomeMenus menus={menus} filterName="TIN TỨC - SỰ KIỆN" maxChildren={4} />
                        <div className="section__see-more">
                            <a href="#">Xem thêm</a>
                            <i className="ti-arrow-right" />
                        </div>
                    </div>
                    <NewsEvent />
                </div>
                <div className="section__right d-flex">
                    <img
                        className="lazy"
                        data-src="http://localhost:8080/uploads/banners/cong-dich-vu-quoc-gia.png"
                    />
                    <img
                        className="lazy"
                        data-src="http://localhost:8080/uploads/banners/bien-dao-viet-nam.png"
                    />
                    <img className="lazy" data-src="http://localhost:8080/uploads/banners/t63-tinh-thanh.png" />
                    <img className="lazy" data-src="http://localhost:8080/uploads/banners/chuyen-doi-ip6.png" />
                    <img
                        className="lazy"
                        data-src="http://localhost:8080/uploads/banners/co-so-du-lieu-quoc-gia.png"
                    />
                    <img className="lazy" data-src="http://localhost:8080/uploads/banners/pc-covi.png" />
                </div>
            </section>

            <section className="main__section main-desktop__section main__section--integration-development d-flex ">
                <div className="section__nav d-flex">
                    <HomeMenus menus={menus} filterName="HỘI NHẬP VÀ PHÁT TRIỂN" maxChildren={5} />
                    <div className="section__see-more">
                        <a href="#">Xem thêm</a>
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section__content d-flex">
                    <div className="section__content d-flex">
                        {filteredBlogs.slice(0, 2).map((blog, index) => (
                            <div className="section__row" key={index}>
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
                            </div>
                        ))}
                        <div className="section__row section__row--3">
                            <div className="section__row--content d-flex">
                                <div className="row__item--top">
                                    <img
                                        data-src="../image/integration-development/van-kien-dai-hoi-8.jpg"
                                        alt="Văn kiện đại hội lần thứ 8"
                                        className="lazy"
                                    />
                                </div>
                                <div className="row__item d-flex">
                                    <div className="row__item--img">
                                        <img
                                            data-src="../image/integration-development/viet-nam-tai-nhat.jpg"
                                            alt="Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14"
                                            className="lazy"
                                        />
                                    </div>
                                    <div className="row__item--title">
                                        <a href="#">
                                            Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14
                                        </a>
                                    </div>
                                </div>
                                <div className="row__item d-flex">
                                    <div className="row__item--img">
                                        <img
                                            data-src="../image/integration-development/wb-con-bo-bao-cao.jpg"
                                            alt="WB công bố báo cáo cập nhật đánh giá quốc gia năm 2021"
                                            className="lazy"
                                        />
                                    </div>
                                    <div className="row__item--title">
                                        <a href="#">
                                            WB công bố báo cáo cập nhật đánh giá quốc gia năm 2021
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main__section--banner d-flex">
                <div className="banner__left">
                    <img data-src="http://localhost:8080/uploads/banners/vinh-phuc-70-nam.jpg" className="lazy" />
                </div>
                <div className="banner__right">
                    <img
                        data-src="http://localhost:8080/uploads/banners/bao-hien-y-te-xa-hoi.jpg"
                        className="lazy"
                    />
                </div>
            </section>

            <section className="main__section main-desktop__section main__section--representative-agencies-overseas d-flex">
                <div className="section__nav d-flex">
                    <HomeMenus menus={menus} filterName="CƠ QUAN ĐẠI DIỆN VÀ KIỀU BÀO" maxChildren={5} />
                    <div className="section__see-more">
                        <a href="#">Xem thêm</a>
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section__content d-flex">
                    {filteredBlogss.slice(0, 2).map((blog, index) => (
                        <div className="section__row" key={index}>
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
                        </div>
                    ))}
                    <div className="section__row section__row--3">
                        <div className="section__row--content d-flex">
                            <div className="row__item d-flex">
                                <div className="row__item--img">
                                    <img
                                        data-src="../image/representative-agencies-overseas/sv-vietnam-tai-cong-hoa-sec.jpg"
                                        alt="inh viên Việt Nam tại Cộng hòa Tatarstan tổ chức cuộc thi 'Tiếng Việt giàu đẹp'"
                                        className="lazy"
                                    />
                                </div>
                                <div className="row__item--title">
                                    <a href="#">
                                        Sinh viên Việt Nam tại Cộng hòa Tatarstan tổ chức cuộc thi
                                        'Tiếng Việt giàu đẹp'
                                    </a>
                                </div>
                            </div>
                            <div className="row__item d-flex">
                                <div className="row__item--img">
                                    <img
                                        data-src="../image/representative-agencies-overseas/chu-tich-quoc-hoi-siggapo-tham-viet-nam.jpg"
                                        alt="Chủ tịch Quốc hội Singapore thăm Việt Nam: Cụ thể hóa những thỏa thuận cấp cao,.."
                                        className="lazy"
                                    />
                                </div>
                                <div className="row__item--title">
                                    <a href="#">
                                        Chủ tịch Quốc hội Singapore thăm Việt Nam: Cụ thể hóa những thỏa
                                        thuận cấp cao,..
                                    </a>
                                </div>
                            </div>
                            <div className="row__item d-flex">
                                <div className="row__item--img">
                                    <img
                                        data-src="../image/representative-agencies-overseas/tu-kolalata-nho-bac.jpg"
                                        alt="Từ Kolkata nhớ Bác"
                                        className="lazy"
                                    />
                                </div>
                                <div className="row__item--title">
                                    <a href="#">Từ Kolkata nhớ Bác</a>
                                </div>
                            </div>
                            <div className="row__item d-flex">
                                <div className="row__item--img">
                                    <img
                                        data-src="../image/representative-agencies-overseas/hinh-anh-viet-nam-o-nuoc-ngoai.jpg"
                                        alt="Mỗi người Việt Nam ở nước ngoài là hình ảnh sống động nhất đại diện cho đất
                            nước"
                                        className="lazy"
                                    />
                                </div>
                                <div className="row__item--title">
                                    <a href="#">
                                        Mỗi người Việt Nam ở nước ngoài là hình ảnh sống động nhất đại
                                        diện cho đất nước
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main__section--banner ">
                <div className="banner__img">
                    <img data-src="http://localhost:8080/uploads/banners/banner-2.jpg" className="lazy" />
                </div>
            </section>

            <Video />

            <Photo />

            <MostViewed />
        </main>
    );
}

export default Home;
