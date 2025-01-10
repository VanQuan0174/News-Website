import React, { useEffect, useState } from 'react';
import requestApi from '../../../../helpers/api';
const NewsEvent = () => {
    return (
        <>
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
        </>

    )
}
export default NewsEvent