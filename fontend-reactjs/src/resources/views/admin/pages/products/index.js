import React, { useEffect, useState } from 'react';
import requestApi from '../../../../../helpers/api'; // Đường dẫn đến file requestApi.js
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const [products, setProducts] = useState([]); // State lưu danh sách sản phẩm
    const navigate = useNavigate(); // Hook điều hướng

    // Hàm lấy danh sách sản phẩm
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await requestApi('/products', 'GET');
                setProducts(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách sản phẩm', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate('/add-product')} // Điều hướng khi bấm
            >
                Thêm mới
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Mã</th>
                        <th scope="col">Giá nhập</th>
                        <th scope="col">Giá bán</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.code}</td>
                            <td>{product.price_in}</td>
                            <td>{product.price_out}</td>
                            <td>{product.description}</td>
                            <td>{product.status ? 'Hoạt động' : 'Ngừng hoạt động'}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => navigate(`/edit-product/${product.id}`)}
                                >
                                    Sửa
                                </button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => console.log(`Xóa sản phẩm: ${product.id}`)}
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
