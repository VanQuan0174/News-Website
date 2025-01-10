const featuredNew = () => {
    return (
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
    )

}
export default featuredNew