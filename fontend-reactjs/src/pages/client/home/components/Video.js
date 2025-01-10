const Video = () => {
    return (
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
    )
}

export default Video