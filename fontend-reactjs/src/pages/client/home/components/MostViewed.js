const MostViewed = () => {
    return (
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
                            data-src="http://localhost:8080/uploads/banners/anhcuoi.jpg"
                            className="lazy"
                            alt="Bầu cử quốc hội khóa 9 và hội đồng nhân dân cấp cao"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostViewed