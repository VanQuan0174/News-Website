import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import requestApi from "../../../helpers/api";
import BlogCardSmall from "../home/components/partials/BlogCardSmall";

const ListBlog = () => {
    const [blogs, setBlogs] = useState([]);  // Dữ liệu bài viết
    const { id } = useParams();  // Lấy id từ URL

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Gọi API để lấy danh sách bài viết theo category id
                const res = await requestApi(`/blogs/by-category/${id}`, 'GET');
                setBlogs(res.data);  // Cập nhật state với dữ liệu trả về
            } catch (error) {
                console.error('Lỗi khi lấy danh sách bài viết hoặc danh mục', error);
            }
        };

        fetchBlogs();
    }, [id]);  // Chạy lại khi `id` thay đổi

    const smallBlogs = blogs.slice(2, 6); // Lấy 4 blog tiếp theo

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
                    <div className="news-list__latest d-flex">
                        <div className="news-list__latest--left d-flex">
                            <div className="latest__left--img">
                                <img
                                    className="lazy"
                                    data-src="../image/news-list/image.png"
                                    alt=" Chủ tịch Hồ Chí Minh: 'Người là tình yêu thiết tha nhất...'"
                                />
                            </div>
                            <a className="latest__left--title" href="news-detail.html">
                                132 năm Ngày sinh Chủ tịch Hồ Chí Minh: 'Người là tình yêu thiết tha
                                nhất...'
                            </a>
                            <div className="latest__left--description">
                                (TTĐN) - “Bác Hồ, Người là tình yêu thiết tha nhất, trong lòng dân
                                và trong trái tim nhân loại”. Lời thơ, lời ca ấy đã phần nào nói lên
                                được mối liên hệ kỳ diệu giữa Chủ tịch Hồ Chí Minh và tình yêu
                                thương, niềm tự hào của nhân dân Việt Nam và của nhân loại tiến bộ.
                            </div>
                        </div>
                        <div className="news-list__latest--right d-flex">
                            <div className="latest__right--row d-flex">
                                <div className="latest__right--image">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/DNdao-tao-nghe.jpg"
                                        alt="triển khai Nghị quyết 06-NQ/TW của Bộ
                          Chính trị"
                                    />
                                </div>
                                <a href="#" className="latest__right--title">
                                    Quán triệt, triển khai Nghị quyết 06-NQ/TW của Bộ Chính trị
                                </a>
                            </div>
                            <div className="latest__right--row d-flex">
                                <div className="latest__right--image">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/hop-quoc-hoi.png"
                                        alt=">Việt Nam đặt mục tiêu đến 2025"
                                    />
                                </div>
                                <a href="#" className="latest__right--title">
                                    Việt Nam đặt mục tiêu đến 2025 có ít nhất 25 DNNN vốn hóa hơn 1 tỷ
                                    USD
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="news-detail__content  news-list__content d-flex">
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Bình đẳng giới giúp cải thiện năng suất cho ngành dệt may và da giày
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-1.jpg"
                                        alt=" Trao quyền cho phụ nữ có thể giúp ngành dệt may, da giày Việt Nam"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Trao quyền cho phụ nữ có thể giúp ngành dệt may, da giày
                                    Việt Nam phục hồi và phát triển mạnh mẽ hơn sau đại dịch COVID-19.
                                    Điều này đã được chứng minh từ thực tế của một chương trình của
                                    ILO.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Theo dấu chân thủa niên thiếu của Người ở xứ Huế
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-2.jpg"
                                        alt=" Thừa Thiên - Huế vinh "
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Thừa Thiên - Huế vinh dự là nơi Chủ tịch Hồ Chí Minh cùng
                                    gia đình sống, lao động, học tập và tham gia hoạt động yêu nước
                                    trong khoảng thời gian 10 năm với hai giai đoạn 1895 - 1901 và
                                    1906 - 1909.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Phát triển hợp tác xã kiểu mới trong hội nhập kinh tế
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-3.jpg"
                                        alt="Luật Hợp tác xã kiểu mới ra đời, các hợp tác xã bước đầu thể hiện chuyển biến về chất lượng,"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Luật Hợp tác xã kiểu mới ra đời, các hợp tác xã bước đầu
                                    thể hiện chuyển biến về chất lượng, hiệu quả, chứng tỏ vai trò
                                    quan trọng và có ý nghĩa toàn diện về kinh tế, chính trị, xã hội.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Chuyến công du của Thủ tướng mang thông điệp hòa bình, ổn định, chân
                                thành, trách nhiệm
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-4.jpg"
                                        alt=" Thủ tướng Phạm Minh Chính "
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Xuyên suốt trong chuyến thăm, làm việc tại Hoa Kỳ lần
                                    này, Thủ tướng Phạm Minh Chính luôn nhấn mạnh thông điệp hợp tác
                                    vì hoà bình, ổn định, tinh thần chân thành, tin cậy, trách nhiệm
                                    của Việt Nam.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Bác Hồ, người truyền cho tôi cảm hứng trong cuộc sống'
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/nguoi-truyen-cam-hung.jpg"
                                        alt="Trong căn phòng làm việc nhỏ xinh tại ngôi nhà nằm gần trung tâm thành phố Saint-Truiden"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Trong căn phòng làm việc nhỏ xinh tại ngôi nhà nằm gần
                                    trung tâm thành phố Saint-Truiden, cách thủ đô Brussels 80 km về
                                    phía Đông, anh Ahmet Yazar treo hình những lãnh tụ cách mạng trên
                                    thế giới mà anh quý trọng.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Vẹn nguyên ký ức về vị danh nhân vĩ đại của dân tộc Việt Nam
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-6.jpg"
                                        alt="(TTĐN) - Với những người nước ngoài từng may mắn có cơ hội gặp Chủ tịch Hồ Chí Minh"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Với những người nước ngoài từng may mắn có cơ hội gặp Chủ
                                    tịch Hồ Chí Minh, những ký ức về vị lãnh tụ kính yêu của dân tộc
                                    Việt Nam, với nhân cách cao đẹp và phong thái giản dị vẫn luôn vẹn
                                    nguyên sau bao năm tháng. Mỗi khi ôn lại kỷ niệm cũ, những người
                                    trong cuộc luôn kể lại với tâm trạng bồi hồi, dạt dào cảm xúc về
                                    một danh nhân vĩ đại.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Vẹn nguyên ký ức về vị danh nhân vĩ đại của dân tộc Việt Nam
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-7.jpg"
                                        alt=" (TTĐN) - Với những người nước ngoài từng may mắn có cơ hội gặp Chủ tịch Hồ Chí Minh"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Với những người nước ngoài từng may mắn có cơ hội gặp Chủ
                                    tịch Hồ Chí Minh, những ký ức về vị lãnh tụ kính yêu của dân tộc
                                    Việt Nam, với nhân cách cao đẹp và phong thái giản dị vẫn luôn vẹn
                                    nguyên sau bao năm tháng. Mỗi khi ôn lại kỷ niệm cũ, những người
                                    trong cuộc luôn kể lại với tâm trạng bồi hồi, dạt dào cảm xúc về
                                    một danh nhân vĩ đại.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Học giả Ấn Độ nêu bật tư tưởng của Chủ tịch Hồ Chí Minh về hòa bình
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-8.jpg"
                                        alt=" (TTĐN) - Chiến lược quân sự của Người là nhằm giành được độc lập và tự do khỏi sự cai trị của ngoại bang"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Chiến lược quân sự của Người là nhằm giành được độc lập
                                    và tự do khỏi sự cai trị của ngoại bang, nhưng mục tiêu lớn hơn cả
                                    là hòa bình và thiết lập quan hệ hữu nghị cùng có lợi giữa các
                                    quốc gia.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Học giả Ấn Độ nêu bật tư tưởng của Chủ tịch Hồ Chí Minh về hòa bình
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-9.jpg"
                                        alt="Thủ tướng Chính phủ Phạm Minh Chính "
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Chuyến công tác của Đoàn đại biểu cấp cao Việt Nam do Thủ
                                    tướng Chính phủ Phạm Minh Chính dẫn đầu, dự Hội nghị Cấp cao đặc
                                    biệt ASEAN – Hoa Kỳ, thăm, làm việc tại Hoa Kỳ và Liên hợp quốc
                                    (từ ngày 11-17/5),..
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                        <div className="news-list__content--row d-flex">
                            <a href="#" className="row__title">
                                Hoa Kỳ: ASEAN đóng vai trò trung tâm đối với an ninh khu vực
                            </a>
                            <div className="row__content d-flex">
                                <div className="row__content--img">
                                    <img
                                        className="lazy"
                                        data-src="../image/news-list/image-10.jpg"
                                        alt=" Hoa Kỳ đã nhiều lần tuyên bố rằng họ tôn trọng Hiệp ước Thân thiện và Hợp tác"
                                    />
                                </div>
                                <div className="row__content--description">
                                    (TTĐN) - Hoa Kỳ đã nhiều lần tuyên bố rằng họ tôn trọng Hiệp ước
                                    Thân thiện và Hợp tác, cũng như vai trò trung tâm của ASEAN trong
                                    kiến trúc khu vực Ấn Độ Dương-Thái Bình Dương.
                                </div>
                            </div>
                            <div className="line" />
                        </div>
                    </div>
                </div>
                <div className="news-detail__right">
                    <div className="news-detail__right--sidebar-image">
                        <img
                            className="lazy"
                            data-src="http://localhost:8080/uploads/banners/bua-liem-vang.jpg"
                            alt="búa liềm vàng biểu tượng"
                        />
                    </div>
                    <div className="sidebar-row d-flex">
                        <div className="sidebar-heading">
                            <div className="text-heading">
                                <a href="#">MỚI NHẤT</a>
                            </div>
                        </div>
                        <div className="sidebar-content d-flex">
                            {smallBlogs.map((blog, index) => (
                                <BlogCardSmall blog={blog} key={index} />
                            ))}
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
                                    poster="../image/news-list/cuoc-thi-bien-cuong-to-quoc.jpg"
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
                                        poster="../image/news-list/viet-nam-tai-nhat.jpg"
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
                                        poster="../image/news-list/wb-con-bo-bao-cao.jpg"
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
        </main>
    )

}

export default ListBlog