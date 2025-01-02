import { useEffect, useState } from "react";
import requestApi from "../../../helpers/api";

function DetailBlog() {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const fetchDetailBlog = async () => {
            try {
                const res = await requestApi(`/blogs/1`, 'GET'); // Gọi API với ID cố định
                setBlog(res.data); // Cập nhật state với dữ liệu từ API
            } catch (error) {
                console.error('Lỗi khi lấy thông tin bài viết:', error);
            }
        };

        fetchDetailBlog();
    }, []); // Mảng phụ thuộc rỗng để useEffect chỉ chạy một lần

    return (
        <main className="main d-flex">
            <section className="main__section--news-detail main-desktop__section d-flex ">
                <div className="news-detail__left d-flex">
                    <div className="news-detail__left--top">
                        <div className="text-heading">
                            <a href="#">NGHIÊN CỨU - TRAO ĐỔI </a>
                        </div>
                        <div className="news-detail__left--top-menu d-flex">
                            <ul>
                                <li>
                                    <a href="#">Lý luận - Thực tiễn</a>
                                </li>
                                <li>
                                    <a href="#">Sự kiện - Bình luận</a>
                                </li>
                                <li>
                                    <a href="#">Quyền con người</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="form-search" style={{ display: "none" }}>
                        <div className="text-heading">
                            <a href="#">TÌM KIẾM BÀI VIẾT</a>
                        </div>
                        <div className="row-search">
                            <div className="form-group">
                                <label className="form-label">Từ khóa</label>
                                <input className="form-input" type="text" />
                            </div>
                        </div>
                        <div className="row-search">
                            <div className="form-group">
                                <label className="form-label">Tìm theo</label>
                                <select className="form-input-select">
                                    <option value="">Tiêu đề bài viết</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Tùy chọn</label>
                                <select className="form-input-select">
                                    <option value="">Tìm chính xác</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <div className="row-search">
                            <div className="form-group">
                                <label className="form-label">Chuyên mục</label>
                                <select className="form-select">
                                    <option value="">Chọn tất cả</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                </select>
                            </div>
                        </div>
                        <div className="row-search">
                            <div className="form-group">
                                <label className="form-label">Từ ngày</label>
                                <input
                                    className="form-input-half"
                                    type="text"
                                    placeholder="Từ ngày"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Đến ngày</label>
                                <input
                                    className="form-input-half"
                                    type="text"
                                    placeholder="Đến ngày"
                                />
                            </div>
                        </div>
                        <div className="results-search">
                            <p>
                                Tìm thấy: <span>100</span> kết quả
                            </p>
                        </div>
                    </div>
                    <div className="news-detail__left--top-mobi">
                        <nav className="breadcrumb">
                            <a href="#">Nghiên cứu Trao đổi</a>
                            <i className="ti-angle-right" />
                            <span>Tin tức - Sự kiện</span>
                        </nav>
                    </div>
                    <div className="news-detail__date d-flex">
                        <div className="news-detail__date-left">
                            <div className="news-detail__text">
                                Thứ Năm, 19/5/2022 7:22'(GMT+7)
                            </div>
                        </div>
                        <div className="news-detail__date-right d-flex">
                            <i className="ti-facebook" />
                            <i className="ti-twitter-alt" />
                            <i className="ti-printer" />
                            <i className="ti-email" />
                        </div>
                    </div>
                    <h2 className="news-detail__title">{blog.title || 'Không có tiêu đề'}</h2>
                    <div className="news-detail__content d-flex">
                        <h2 className="news-detail__section-title title-italic">
                            {blog.summary}
                        </h2>
                        <div className="detail-blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        <div className="news__author">
                            <p className="author__name">{blog.author}(tổng hợp)</p>
                            <p className="author__source">Nguồn: {blog.source}</p>
                        </div>
                        <div className="author__social">
                            <i className="ti-facebook" />
                            <i className="ti-twitter-alt" />
                            <i className="ti-printer" />
                            <i className="ti-email" />
                        </div>
                        <div className="news__tag d-flex">
                            <h3>Tags:</h3>
                            <div className="news__tag-btn">Chính quyền</div>
                            <div className="news__tag-btn">CNTT</div>
                            <div className="news__tag-btn">Điện tử</div>
                        </div>
                        <div className="news__feedback d-flex">
                            <div className="base__header">
                                <div className="text-heading">
                                    <a href="#">Phản hồi</a>
                                </div>
                            </div>
                            <p className="news__feedback-text">
                                Ý kiến phản hồi của bạn:(Không quá 1000 ký tự)
                            </p>
                            <textarea
                                id="feedback__input"
                                placeholder="Nhập nội dung"
                                defaultValue={""}
                            />
                            <div className="feedback__footer d-flex">
                                <p id="char-count">Còn lại : 1000 ký tự</p>
                                <button className="feedback__send btn-danger">Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-detail__right">
                    <div className="news-detail__right--sidebar-image">
                        <img
                            className="lazy"
                            data-src="../image/news-detail/bua-liem-vang.jpg"
                            alt="búa liềm vàng"
                        />
                    </div>
                    <div className="sidebar-row d-flex">
                        <div className="sidebar-heading">
                            <div className="text-heading">
                                <a href="#">MỚI NHẤT</a>
                            </div>
                        </div>
                        <div className="sidebar-content d-flex">
                            <div className="item d-flex">
                                <div className="item-image">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-detail/viet-nam-tai-nhat.jpg"
                                        alt="Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14"
                                    />
                                </div>
                                <div className="item-text">
                                    <h4>
                                        Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14
                                    </h4>
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-image">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-detail/wb-con-bo-bao-cao.jpg"
                                        alt="WB công bố báo cáo cập nhật đánh giá quốc gia năm 2021"
                                    />
                                </div>
                                <div className="item-text">
                                    <h4>WB công bố báo cáo cập nhật đánh giá quốc gia năm 2021</h4>
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-image">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-detail/chu-tich-quoc-hoi-siggapo-tham-viet-nam.jpg"
                                        alt="Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14"
                                    />
                                </div>
                                <div className="item-text">
                                    <h4>
                                        Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14
                                    </h4>
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-image">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-detail/nguoi-truyen-cam-hung.jpg"
                                        alt="Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14"
                                    />
                                </div>
                                <div className="item-text">
                                    <h4>
                                        Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-row d-flex">
                        <div className="sidebar-heading">
                            <div className="text-heading">
                                <a href="#">VIDEO</a>
                            </div>
                        </div>
                        <div className="sidebar-content d-flex">
                            <div className="sidebar-content__video">
                                <video
                                    src=""
                                    poster="../image/news-detail/cuoc-thi-bien-cuong-to-quoc.jpg"
                                    alt="Cuộc thi Biên cương Tổ quốc tôi"
                                />
                            </div>
                            <div className="sidebar-content__title">
                                <h4>Cuộc thi Biên cương Tổ quốc tôi</h4>
                            </div>
                            <div className="item d-flex">
                                <div className="item-video">
                                    <video
                                        src=""
                                        poster="../image/news-detail/viet-nam-tai-nhat.jpg"
                                        alt="Cuộc thi Biên cương Tổ quốc tôi"
                                    />
                                </div>
                                <div className="item-text">
                                    <h4>
                                        Nỗ lực tổ chức an toàn lễ hội Việt Nam tại Nhật Bản lần 14
                                    </h4>
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-video">
                                    <video
                                        src=""
                                        poster="../image/news-detail/wb-con-bo-bao-cao.jpg"
                                        alt="Cuộc thi Biên cương Tổ quốc tôi"
                                    />
                                </div>
                                <div className="item-text">
                                    <h4>WB công bố báo cáo cập nhật đánh giá quốc gia năm 2021</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-row d-flex">
                        <div className="sidebar-heading">
                            <div className="text-heading">
                                <a href="#">XEM NHIỀU NHẤT</a>
                            </div>
                        </div>
                        <div className="sidebar-content d-flex">
                            <div className="item d-flex">
                                <div className="item-box">1</div>
                                <div className="item-comment">
                                    Đánh thức tiềm năng thương mại vùng biên
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">2</div>
                                <div className="item-comment">
                                    Chuyên gia Nga đề cao chính sách của Việt Nam nỗ lực tạo dựng
                                    môi...
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">3</div>
                                <div className="item-comment">
                                    Báo chí quốc tế: Việt Nam đóng vai trò chủ chốt trong định hình
                                    quan hệ...
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">4</div>
                                <div className="item-comment">
                                    Chủ tịch Quốc hội Lào: Chuyến thăm của Chủ tịch Quốc hội Vương...
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">5</div>
                                <div className="item-comment">
                                    Phát huy giá trị các di sản văn hóa phi vật thể
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">6</div>
                                <div className="item-comment">
                                    Đánh thức tiềm năng thương mại vùng biên
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">7</div>
                                <div className="item-comment">
                                    Đánh thức tiềm năng thương mại vùng biên
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">8</div>
                                <div className="item-comment">
                                    Đánh thức tiềm năng thương mại vùng biên
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">9</div>
                                <div className="item-comment">
                                    Đánh thức tiềm năng thương mại vùng biên
                                </div>
                            </div>
                            <div className="item d-flex">
                                <div className="item-box">10</div>
                                <div className="item-comment">
                                    Đánh thức tiềm năng thương mại vùng biên
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bottom-menu--mobi">
                <div className="bottom-menu--mobi-left d-flex">
                    <i className="bottom-menu__item ti-arrow-left" />
                </div>
                <div className="bottom-menu--mobi-right d-flex">
                    <i className="bottom-menu__item ti-comment-alt" />
                    <i className="bottom-menu__item ti-text" />
                    <i className="bottom-menu__item ti-share" />
                </div>
            </div>
        </main>

    )
}

export default DetailBlog