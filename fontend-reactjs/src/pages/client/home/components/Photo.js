const Photo = () => {
    return (
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
    )
}
export default Photo