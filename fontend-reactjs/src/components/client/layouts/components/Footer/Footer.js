import React from 'react';
function Footer() {
  return (
    <footer className="footer">
    <div className="footer__content d-flex">
        <div className="footer__title">
        TRANG THÔNG TIN ĐỐI NGOẠI ĐIỆN TỬ - BAN CHỈ ĐẠO CÔNG TÁC THÔNG TIN ĐỐI
        NGOẠI TRUNG ƯƠNG
        </div>
        <div className="footer__info d-flex">
        <p className="footer__info-item">
            <i className="footer__icon fa fa-map-marker" aria-hidden="true" />
            Địa chỉ: Số 68C Phan Đình Phùng, Quận Ba Đình, Hà Nội
        </p>
        <p className="footer__info-item">
            <i className="footer__icon fa fa-phone" aria-hidden="true" />
            Điện thoại: 080.45228 - 080.45542
        </p>
        <p className="footer__info-item">
            <i className="footer__icon fa fa-envelope" aria-hidden="true" />
            Email: bbt@ttdn.vn
        </p>
        <p className="footer__info-item">
            <i className="footer__icon fa fa-align-justify" aria-hidden="true" />
            Giấy phép số 243/GP-TTĐN do Cục Phát thanh, Truyền hình và Thông tin
            điện tử Bộ Thông tin và Truyên thông cấp ngày 24/12/2020
        </p>
        </div>
    </div>
    </footer>
  );
}

export default Footer;
