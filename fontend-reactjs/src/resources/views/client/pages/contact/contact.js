import React from 'react';
import '../../../../../public/assets/client/assets/styles/page/contact.scss';
function Contact() {
    return (
        <main className="main d-flex">
            <section className="main-desktop__section main__Section--contact d-flex ">
                <div className="section__nav d-flex">
                    <div className="section__nav-list d-flex">
                        <ul>
                            <li className="text-heading">
                                <a href="#">LIÊN HỆ VỚI CHÚNG TÔI</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact__title">
                    <p>
                        Xin vui lòng điền đầy đủ thông tin có đánh dấu (*) ở form sau và gửi cho
                        chúng tôi. Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.
                    </p>
                </div>
                <form action="">
                    <div className="contact__form">
                        <div className="contact__form-content d-flex">
                            <div className="form__controller--left d-flex">
                                <div className="input-group d-flex flex-nowrap">
                                    <label className="form-label" htmlFor="">
                                        Họ và tên*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Họ và tên"
                                        id="name"
                                    />
                                </div>
                                <div className="input-group d-flex flex-nowrap">
                                    <label className="form-label" htmlFor="">
                                        Địa chỉ*{" "}
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Địa chỉ"
                                        id="address"
                                    />
                                </div>
                                <div className="input-group d-flex flex-nowrap">
                                    <label className="form-label" htmlFor="">
                                        Điện thoại*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Điện thoại"
                                        id="phone"
                                    />
                                </div>
                                <div className="input-group d-flex flex-nowrap">
                                    <label className="form-label" htmlFor="">
                                        Fax*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Fax"
                                        id="fax"
                                    />
                                </div>
                                <div className="input-group d-flex flex-nowrap">
                                    <label className="form-label" htmlFor="">
                                        Email*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email"
                                        id="email"
                                    />
                                </div>
                            </div>
                            <div className="form__controller--right">
                                <div className="input-group d-flex flex-nowrap">
                                    <label className="form-label" htmlFor="">
                                        Nội Dung*
                                    </label>
                                    <textarea
                                        className="form-controller__textarea"
                                        placeholder="Nhập nội dung"
                                        id="content"
                                        defaultValue={"                                "}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-feedback">
                            <button className="btn btn-danger" type="submit">
                                Gửi phản hồi
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>

    );
}

export default Contact;
