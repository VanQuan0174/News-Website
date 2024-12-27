import React, { useState } from "react";
import requestApi from '../../../../../helpers/api'; // Đường dẫn đến file API của bạn
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        code: '',
        price_in: '',
        price_out: '',
        description: '',
    });

    const navigate = useNavigate(); // điều hướng sau khi thêm sản phẩm mới thành công
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // ngăn chặn việc load trang
        try {
            await requestApi('/products', 'POST', newProduct);
            navigate('/products');
            alert('thêm sản phẩm thành công');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }

    }
    return (
        <div>
            <h2>Thêm Sản phẩm Mới</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="code" className="form-label">Mã sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        id="code"
                        name="code"
                        value={newProduct.code}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price_in" className="form-label">Giá sản phẩm nhập vào</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price_in"
                        name="price_in"
                        value={newProduct.price_in}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price_out" className="form-label">Giá sản phẩm bán ra</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price_out"
                        name="price_out"
                        value={newProduct.price_out}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Mô tả sản phẩm</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}

                    />
                </div>
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    );
}
export default CreateProduct