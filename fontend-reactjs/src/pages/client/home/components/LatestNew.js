const LatestNew = () => {
    return (
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
    )
}
export default LatestNew