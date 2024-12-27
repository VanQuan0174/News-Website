import React from 'react';
import '../../../../../public/assets/client/assets/styles/page/home.scss';

function Home() {
    return (
        <main className="main d-flex">
            <section className="main__section--featured-news d-flex">
                <div className="featured-news__left">
                    <div className="featured-news__left-item">
                        <img
                            data-src="../image/featured-news/image.png"
                            alt="Chân dung Chủ tịch Hồ Chí Minh, lãnh tụ vĩ đại của dân tộc Việt Nam, người đã truyền cảm hứng và là niềm tự hào của dân tộc Việt Nam."
                            className="lazy"
                        />
                        <div className="featured-news__left-item-overlay d-flex">
                            <a href="news-detail.html">
                                132 năm Ngày sinh Chủ tịch Hồ Chí Minh: 'Người là tình yêu thiết tha
                                nhất...'
                            </a>
                            <p>
                                (TTĐN) - “Bác Hồ, Người là tình yêu thiết tha nhất, trong lòng dân
                                và trong trái tim nhân loại”. Lời thơ, lời ca ấy đã phần nào nói lên
                                được mối liên hệ kỳ diệu giữa Chủ tịch Hồ Chí Minh và tình yêu
                                thương, niềm tự hào của nhân dân Việt Nam và của nhân loại tiến bộ.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featured-news__right d-flex">
                    <div className="featured-news__right-item">
                        <a href="#">
                            <img
                                data-src="../image/featured-news/hop-quoc-hoi.png"
                                alt="Cuộc họp triển khai Nghị quyết 06-NQ/TW của Bộ Chính trị."
                                className="lazy"
                            />
                        </a>
                        <div className="featured-news__right-item-overlay ">
                            <a href="#">
                                Quán triệt, triển khai Nghị quyết 06-NQ/TW của Bộ Chính trị
                            </a>
                            <p>Tin tức - Sự kiện</p>
                        </div>
                    </div>
                    <div className="featured-news__right-item">
                        <img
                            data-src="../image/featured-news/DNdao-tao-nghe.jpg"
                            alt="Hình ảnh công nhân nhà máy sản xuất hàng hóa xuất khẩu"
                            className="lazy"
                        />
                        <div className="featured-news__right-item-overlay">
                            <a href="#">
                                Việt Nam đặt mục tiêu đến 2025 có ít nhất 25 DNNN vốn hóa hơn 1 tỷ
                            </a>
                            <p>Tin tức - Sự kiện</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main__section--latest-news d-flex">
                <div className="latest-news__left d-flex">
                    <div className="latest-news__left-item d-flex">
                        <div className="left-item__img">
                            <a href="#">
                                <img
                                    data-src="../image/latest-news/ttg17-5a5-450x2701.png"
                                    className="lazy"
                                />
                            </a>
                        </div>
                        <div className="left-item__title">
                            <a href="#">
                                Chuyến thăm của Thủ tướng khẳng định cam kết của Việt Nam với LHQ
                            </a>
                        </div>
                    </div>
                    <div className="latest-news__left-item d-flex">
                        <div className="left-item__img">
                            <a href="#">
                                <img
                                    data-src="../image/latest-news/ttgminh-chinh-16052022-450x2701.jpg"
                                    className="lazy"
                                />
                            </a>
                        </div>
                        <div className="left-item__title">
                            <a href="#">
                                Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại
                                LHQ
                            </a>
                        </div>
                    </div>
                    <div className="latest-news__left-item d-flex">
                        <div className="left-item__img">
                            <a href="#">
                                <img
                                    data-src="../image/latest-news/tong-bi-thu-npt-tiep-doan.png"
                                    className="lazy"
                                />
                            </a>
                        </div>
                        <div className="left-item__title">
                            <a href="#">
                                Tổng Bí thư Nguyễn Phú Trọng tiếp Tổng thống Hy Lạp Katerina
                                Sakellaropoulou
                            </a>
                        </div>
                    </div>
                </div>
                <div className="latest-news__right">
                    <div className="latest-news__right-item">
                        <a href="#">
                            <img data-src="../image/latest-news/tu-hao-vn.png" className="lazy" />
                        </a>
                    </div>
                </div>
            </section>
            <section className="main__section--banner d-flex">
                <div className="banner__left">
                    <img data-src="../image/banner/banner-left.jpg" className="lazy" />
                </div>
                <div className="banner__right">
                    <img data-src="../image/banner/banner-right.jpg" className="lazy" />
                </div>
            </section>
            <section className="main__section--news-event d-flex">
                <div className="section__left d-flex">
                    <div className="section__nav d-flex">
                        <div className="section__nav-list d-flex">
                            <ul>
                                <li className="text-heading">
                                    <a href="#">TIN TỨC - SỰ KIỆN</a>
                                </li>
                                <li className="section__nav-item">
                                    <a href="#">Thời sự chính trị</a>
                                </li>
                                <li className="section__nav-item">
                                    <a href="#">Chính sách - Pháp luật</a>
                                </li>
                            </ul>
                        </div>
                        <div className="section__see-more">
                            <a href="#">Xem thêm</a>
                            <i className="ti-arrow-right" />
                        </div>
                    </div>
                    <div className="section__content-top d-flex">
                        <div className="section__article section__article--large">
                            <div className="section__article--img">
                                <a href="#">
                                    <img
                                        data-src="../image/news-event/dong-chi-nguyen-xuan-thang.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Đồng chí Nguyễn Xuân Thắng thăm và làm việc tại CHLB Đức
                                </a>
                            </div>
                            <p className="section__article-summary">
                                (TTĐN) - Thực hiện Kế hoạch Hoạt động đối ngoại năm 2022, đồng chí
                                Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị, Giám đốc Học viện Chính trị
                                Quốc gia Hồ Chí Minh, Chủ tịch Hội đồng Lý luận Trung ương đã dẫn
                                đầu Đoàn đại biểu Đảng Cộng sản Việt Nam thăm và làm việc tại Cộng
                                hòa Liên bang Đức từ ngày 14-19/5.
                            </p>
                        </div>
                        <div className="section__article section__article--large">
                            <div className="section__article--img">
                                <a href="#">
                                    <img
                                        data-src="../image/news-event/chu-tich-cuoc-hoi-vuong-dinh-hue.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Chủ tịch Quốc hội Vương Đình Huệ đón, hội đàm với Chủ tịch Quốc
                                    hội Singapore
                                </a>
                            </div>
                            <p className="section__article-summary">
                                (TTĐN) - Nhận lời mời của Chủ tịch Quốc hội Vương Đình Huệ, Chủ tịch
                                Quốc hội Singapore Tan Chuan-Jin và Phu nhân dẫn đầu Đoàn đại biểu
                                Quốc hội Cộng hòa Singapore thăm chính thức Việt Nam từ ngày 18 -
                                20/5/2022.
                            </p>
                        </div>
                    </div>
                    <div className="section__content-bottom d-flex">
                        <div className="section__article section__article--small d-flex">
                            <div className="section__article--img">
                                <a href="#">
                                    {" "}
                                    <img
                                        data-src="../image/news-event/chuyen-tham-lao.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Chuyến thăm Lào của Chủ tịch Quốc hội thành công tốt đẹp
                                </a>
                            </div>
                        </div>
                        <div className="section__article section__article--small d-flex">
                            <div className="section__article--img">
                                <a href="#">
                                    {" "}
                                    <img
                                        data-src="../image/news-event/thuc-day-manh.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Thúc đẩy mạnh mẽ hơn nữa quan hệ hữu nghị truyền thống Việt Nam-Hy
                                    Lạp
                                </a>
                            </div>
                        </div>
                        <div className="section__article section__article--small d-flex">
                            <div className="section__article--img">
                                <a href="#">
                                    {" "}
                                    <img
                                        data-src="../image/news-event/hop-tac-voi-phia-hoa-ky.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Thủ tướng Phạm Minh Chính: Hợp tác với phía Hoa Kỳ để thúc đẩy
                                    khởi nghiệp toàn dân
                                </a>
                            </div>
                        </div>
                        <div className="section__article section__article--small d-flex">
                            <div className="section__article--img">
                                <a href="#">
                                    {" "}
                                    <img
                                        data-src="../image/news-event/ky-vong-vao-vn.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">Los Angeles kỳ vọng tăng cường hợp tác với Việt Nam</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__right d-flex">
                    <img
                        className="lazy"
                        data-src="../image/news-event/cong-dich-vu-quoc-gia.png"
                    />
                    <img
                        className="lazy"
                        data-src="../image/news-event/bien-dao-viet-nam.png"
                    />
                    <img className="lazy" data-src="../image/news-event/t63-tinh-thanh.png" />
                    <img className="lazy" data-src="../image/news-event/chuyen-doi-ip6.png" />
                    <img
                        className="lazy"
                        data-src="../image/news-event/co-so-du-lieu-quoc-gia.png"
                    />
                    <img className="lazy" data-src="../image/news-event/pc-covi.png" />
                </div>
            </section>
            <section className="main__section main-desktop__section main__section--integration-development d-flex ">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">HỘI NHẬP VÀ PHÁT TRIỂN</a>
                            </li>
                            <li className="section__nav-item">
                                <a href="#">Kinh tế - Đầu tư</a>
                            </li>
                            <li className="section__nav-item">
                                <a href="#">Văn hóa - Xã hội</a>
                            </li>
                            <li className="section__nav-item">
                                <a href="#">Thế giới - Việt Nam</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section__see-more">
                        <a href="#">Xem thêm</a>
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section__content d-flex">
                    <div className="section__row section__row--1">
                        <div className="section__article section__article--large">
                            <div className="section__article--img">
                                <a href="#">
                                    {" "}
                                    <img
                                        data-src="../image/integration-development/nha-bao-an-do.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Nhà báo Ấn Độ và ấn tượng sâu đậm từ những tấm áp phích in ảnh Bác
                                    Hồ
                                </a>
                            </div>
                            <p className="section__article-summary text-medium color-dark-gray">
                                (TTĐN) - Nhà báo Sandip Hor lần đầu biết đến Chủ tịch Hồ Chí Minh
                                vào cuối những năm 1960 và đầu những năm 1970, khi tại quê hương
                                ông, thành phố Kolkata, bang Tây Bengal, Ấn Độ, diễn ra các cuộc
                                tuần hành, biểu tình ủng hộ cuộc đấu tranh chống Mỹ và thống nhất
                                đất nước của nhân dân Việt Nam.
                            </p>
                        </div>
                    </div>
                    <div className="section__row section__row--2">
                        <div className="section__article section__article--large">
                            <div className="section__article--img">
                                <a href="#">
                                    <img
                                        data-src="../image/integration-development/bao-tang.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Bảo tàng Bản Đông Hồ Chí Minh - Biểu tượng của mối quan hệ hữu
                                    nghị Việt Nam - Thái Lan
                                </a>
                            </div>
                            <p className="section__article-summary">
                                (TTĐN) - Nhân dịp kỷ niệm 132 năm ngày sinh Chủ tịch Hồ Chí Minh,
                                Đoàn Đại sứ quán Việt Nam tại Thái Lan do Đại sứ Phan Chí Thành dẫn
                                đầu đã đến thăm tỉnh Phichit, nơi có Bảo tàng Bản Đông Hồ Chí Minh.
                            </p>
                        </div>
                    </div>
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
            </section>
            <section className="main__section--banner d-flex">
                <div className="banner__left">
                    <img data-src="../image/banner/vinh-phuc-70-nam.jpg" className="lazy" />
                </div>
                <div className="banner__right">
                    <img
                        data-src="../image/banner/bao-hien-y-te-xa-hoi.jpg"
                        className="lazy"
                    />
                </div>
            </section>
            <section className="main__section main-desktop__section main__section--representative-agencies-overseas d-flex">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">CƠ QUAN ĐẠI DIỆN VÀ KIỀU BÀO</a>
                            </li>
                            <li className="section__nav-item">
                                <a href="#">Cơ quan đại diện</a>
                            </li>
                            <li className="section__nav-item">
                                <a href="#">Công tác ngoại vụ</a>
                            </li>
                            <li className="section__nav-item">
                                <a href="#">Kiều bào</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section__see-more">
                        <a href="#">Xem thêm</a>
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section__content d-flex">
                    <div className="section__row section__row--1">
                        <div className="section__article section__article--large">
                            <div className="section__article--img">
                                <a href="#">
                                    {" "}
                                    <img
                                        data-src="../image/representative-agencies-overseas/viet-nam-cam-ket-manh-me-voi-che-do-da-phuong.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Thủ tướng Phạm Minh Chính: Việt Nam cam kết mạnh mẽ đối với chủ
                                    nghĩa đa phương
                                </a>
                            </div>
                            <p className="section__article-summary text-medium color-dark-gray">
                                (TTĐN) - Tiếp tục chuyến công tác dự Hội nghị Cấp cao đặc biệt
                                ASEAN-Mỹ, thăm, làm việc tại Mỹ và Liên Hợp Quốc (LHQ), sáng ngày
                                16/5, tại trụ sở LHQ thành phố New York Thủ tướng Chính phủ Phạm
                                Minh Chính đã có cuộc gặp với Phó Tổng Thư ký LHQ, Chủ tịch Đại hội
                                đồng LHQ.
                            </p>
                        </div>
                    </div>
                    <div className="section__row section__row--2">
                        <div className="section__article section__article--large">
                            <div className="section__article--img">
                                <a href="#">
                                    <img
                                        data-src="../image/representative-agencies-overseas/viet-nam-dat-muc-tieu-den-nam-2025.jpg"
                                        className="lazy"
                                    />
                                </a>
                            </div>
                            <div className="section__article-title">
                                <a href="#">
                                    Việt Nam đặt mục tiêu đến 2025 có ít nhất 25 DNNN vốn hóa hơn 1 tỷ
                                    USD
                                </a>
                            </div>
                            <p className="section__article-summary">
                                (TTĐN) - Chính phủ đăt mục tiêu đến 2025 có ít nhất 25 doanh nghiệp
                                nhà nước có vốn chủ sở hữu hoặc vốn hóa trên thị trường chứng khoán
                                đạt hơn 1 tỷ USD, trong đó ít nhất 10 doanh nghiệp đạt mức hơn 5 tỷ
                                USD.
                            </p>
                        </div>
                    </div>
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
                    <img data-src="../image/banner/banner-2.jpg" className="lazy" />
                </div>
            </section>
            <section className="main-mobi__section--news-event ">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">TIN TỨC - SỰ KIỆN</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section__see-more">
                        <a href="#" />
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section--news-event__highlight d-flex">
                    <div className="news-section__highlight-title">
                        <a href="#">Đồng chí Nguyễn Xuân Thắng thăm và làm việc tại CHLB Đức</a>
                    </div>
                    <img
                        data-src="../image/news-event/dong-chi-nguyen-xuan-thang.jpg"
                        alt="Hoạt động đối ngoại năm 2022, đồng
            chí Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị"
                        className="news-section__highlight-image lazy"
                    />
                    <p className="news-section__highlight-text">
                        (TTĐN) - Thực hiện Kế hoạch Hoạt động đối ngoại năm 2022, đồng chí
                        Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị
                    </p>
                </div>
                <div className="news-section__list d-flex">
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/chuyen-tham-lao.jpg"
                                alt=">Chuyến thăm của Thủ tướng khẳng định cam kết của Việt Nam với LHQ"
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Chuyến thăm của Thủ tướng khẳng định cam kết của Việt Nam với LHQ
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/hop-tac-voi-phia-hoa-ky.jpg"
                                alt="Thủ tướng làm việc với Phái đoàn đại diện"
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại
                                LHQ
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/hop-tac-voi-phia-hoa-ky.jpg"
                                alt="Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại LHQ"
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại
                                LHQ
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/chu-tich-cuoc-hoi-vuong-dinh-hue.jpg"
                                alt="Tổng Bí thư Nguyễn Phú Trọng tiếp Tổng thống Hy Lạp Katerina Sakellaro..."
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Tổng Bí thư Nguyễn Phú Trọng tiếp Tổng thống Hy Lạp Katerina
                                Sakellaro...
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className="main__section main__section--video d-flex">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="video__text-heading">
                                <a href="video.html">VIDEO</a>
                            </li>
                        </ul>
                    </div>
                    <div className="video__see-more d-flex">
                        <a href="#">Xem thêm</a>
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section__content section__content--video d-flex">
                    <div className="main-video d-flex">
                        <video
                            src=""
                            poster="../image/video/cuoc-thi-bien-cuong-to-quoc.jpg"
                            alt="Cuộc thi Biên cương Tổ quốc tôi"
                        ></video>
                        <div className="main-video__title">
                            <h2>Cuộc thi Biên cương Tổ quốc tôi</h2>
                        </div>
                    </div>
                    <div className="video-list__items d-flex">
                        <div className="video-item d-flex">
                            <video
                                src=""
                                poster="../image/video/bien-cuong-to-quoc-toi.jpg"
                                alt="Cuộc thi Biên cương Tổ quốc tôi"
                            ></video>
                            <div className="video-item__title">
                                <a href="#">Biên cương Tổ quốc tôi</a>
                            </div>
                        </div>
                        <div className="video-item d-flex">
                            <video
                                src=""
                                poster="../image/video/giai-thuong-8.jpg"
                                alt="Cuộc thi Biên cương Tổ quốc tôi"
                            ></video>
                            <div className="video-item__title">
                                <a href="#">
                                    Giới thiệu Giải thưởng Thông tin đối ngoại lần thứ VII
                                </a>
                            </div>
                        </div>
                        <div className="video-item d-flex">
                            <video
                                src=""
                                poster="../image/video/dang-danh-to-quoc.jpg"
                                alt="Cuộc thi Biên cương Tổ quốc tôi"
                            ></video>
                            <div className="video-item__title">
                                <a href="#">
                                    Giới thiệu Sổ tay tuyên truyền đối ngoại “Rạng danh Tổ quốc, Cơ đồ
                                    Việt Nam
                                </a>
                            </div>
                        </div>
                        <div className="video-item d-flex">
                            <video
                                src=""
                                poster="../image/video/cuoc-thi-sang-tac.jpg"
                                alt="Cuộc thi Biên cương Tổ quốc tôi"
                            ></video>
                            <div className="video-item__title">
                                <a href="#">
                                    Cuộc thi sáng tác ảnh nghệ thuật về chủ đề “Tự hào một giải biên
                                    cương”
                                </a>
                            </div>
                        </div>
                        <div className="video-item d-flex">
                            <video
                                src=""
                                poster="../image/video/video6.jpg"
                                alt="Cuộc thi Biên cương Tổ quốc tôi"
                            ></video>
                            <div className="video-item__title">
                                <a href="#">
                                    Lễ trao Giải thưởng Cuộc thi sáng tác ảnh nghệ thuật "Tự hào một
                                    dải biên cương"
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main__section main__section--photo d-flex">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">PHOTO</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section__see-more">
                        <a href="#">Xem thêm</a>
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section__content--photo d-flex">
                    <div className="section__row--photo-1">
                        <img
                            data-src="../image/photo/anh1.jpg"
                            alt="Chủ tịch Quốc hội Vương Đình Huệ bắt đầu thăm chính thức nước Cộng hòa Dân chủ Nhân dân Lào"
                            className="lazy"
                        />
                    </div>
                    <div className="section__row--photo-2">
                        <div className="row__photo-content d-flex">
                            <div className="row__photo--item d-flex">
                                <div className="photo-item__title">
                                    <a href="#">
                                        Chủ tịch Quốc hội Vương Đình Huệ bắt đầu thăm chính thức nước
                                        Cộng hòa Dân chủ Nhân dân Lào
                                    </a>
                                </div>
                                <div className="row__description">
                                    <p>
                                        (TTĐN) - Sáng 15/5/2022, Chủ tịch Quốc hội Vương Đình Huệ dẫn
                                        đầu Đoàn Đại biểu cấp cao Quốc hội nước Cộng hòa Xã hội Chủ
                                        nghĩa Việt Nam đến Thủ đô Vientiane, bắt đầu chuyến thăm chính
                                        thức nước Cộng hòa Dân chủ Nhân dân Lào.
                                    </p>
                                </div>
                            </div>
                            <div className="row__photo--item overlay-content d-flex">
                                <div className="photo-item__title">
                                    <a href="#">Sức sống mới trên huyện đảo Trường Sa</a>
                                </div>
                                <div className="row__description">
                                    <p>
                                        (TTĐN) - Quần đảo Trường Sa được giải phóng hoàn toàn ngày
                                        29/4/1975. Sau 47 năm xây dựng và phát triển, huyện đảo Trường
                                        Sa (Khánh Hòa) hôm nay mang trong mình diện mạo mới; đời sống
                                        của nhân dân, cán bộ chiến sĩ ngày càng tốt hơn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main__section main__section--most-viewed d-flex">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">XEM NHIỀU NHẤT</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="section__content main__section--most-viewed d-flex">
                    <div className="section__row section__row--most-viewed">
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">1</div>
                            <div className="most-viewed-comment">
                                Đánh thức tiềm năng thương mại vùng biên
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">2</div>
                            <div className="most-viewed-comment">
                                Chuyên gia Nga đề cao chính sách của Việt Nam nỗ lực tạo dựng môi...
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">3</div>
                            <div className="most-viewed-comment">
                                Báo chí quốc tế: Việt Nam đóng vai trò chủ chốt trong định hình quan
                                hệ...
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">4</div>
                            <div className="most-viewed-comment">
                                Chủ tịch Quốc hội Lào: Chuyến thăm của Chủ tịch Quốc hội Vương...
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">5</div>
                            <div className="most-viewed-comment">
                                Phát huy giá trị các di sản văn hóa phi vật thể
                            </div>
                        </div>
                    </div>
                    <div className="section__row section__row--most-viewed">
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">6</div>
                            <div className="most-viewed-comment">
                                Đánh thức tiềm năng thương mại vùng biên
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">7</div>
                            <div className="most-viewed-comment">
                                Đánh thức tiềm năng thương mại vùng biên
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">8</div>
                            <div className="most-viewed-comment">
                                Đánh thức tiềm năng thương mại vùng biên
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">9</div>
                            <div className="most-viewed-comment">
                                Đánh thức tiềm năng thương mại vùng biên
                            </div>
                        </div>
                        <div className="most-viewed-item d-flex">
                            <div className="most-viewed-box">10</div>
                            <div className="most-viewed-comment">
                                Đánh thức tiềm năng thương mại vùng biên
                            </div>
                        </div>
                    </div>
                    <div className="section__row section__row--3">
                        <div className="most-viewed-image">
                            <img
                                data-src="../image/most-viewed/anhcuoi.jpg"
                                className="lazy"
                                alt="Bầu cử quốc hội khóa 9 và hội đồng nhân dân cấp cao"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="main-mobi__section--news-event ">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">TIN TỨC - SỰ KIỆN</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section__see-more">
                        <a href="#" />
                        <i className="ti-arrow-right" />
                    </div>
                </div>
                <div className="section--news-event__highlight d-flex">
                    <div className="news-section__highlight-title">
                        <a href="#">Đồng chí Nguyễn Xuân Thắng thăm và làm việc tại CHLB Đức</a>
                    </div>
                    <img
                        data-src="../image/news-event/dong-chi-nguyen-xuan-thang.jpg"
                        alt="Hoạt động đối ngoại năm 2022, đồng
            chí Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị"
                        className="news-section__highlight-image lazy"
                    />
                    <p className="news-section__highlight-text">
                        (TTĐN) - Thực hiện Kế hoạch Hoạt động đối ngoại năm 2022, đồng chí
                        Nguyễn Xuân Thắng, Ủy viên Bộ Chính trị
                    </p>
                </div>
                <div className="news-section__list d-flex">
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/chuyen-tham-lao.jpg"
                                alt=">Chuyến thăm của Thủ tướng khẳng định cam kết của Việt Nam với LHQ"
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Chuyến thăm của Thủ tướng khẳng định cam kết của Việt Nam với LHQ
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/hop-tac-voi-phia-hoa-ky.jpg"
                                alt="Tin 1"
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại
                                LHQ
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/hop-tac-voi-phia-hoa-ky.jpg"
                                alt="Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại LHQ"
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Thủ tướng làm việc với Phái đoàn đại diện thường trực Việt Nam tại
                                LHQ
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                    <article className="news-section__item  d-flex">
                        <div className="news-section__item-image">
                            <img
                                data-src="../image/news-event/chu-tich-cuoc-hoi-vuong-dinh-hue.jpg"
                                alt="Tổng Bí thư Nguyễn Phú Trọng tiếp Tổng thống Hy Lạp Katerina Sakellaro..."
                                className="lazy"
                            />
                        </div>
                        <div className="news-section__item-content">
                            <a href="#" className="news-section__item-title">
                                Tổng Bí thư Nguyễn Phú Trọng tiếp Tổng thống Hy Lạp Katerina
                                Sakellaro...
                            </a>
                            <p className="news-section__item-text">
                                <span className="news-section__item-time">12 giờ</span>
                                <span className="news-section__item-category">
                                    Kinh tế - Đầu tư
                                </span>
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Home;
