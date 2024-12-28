import React, { useEffect, useState } from "react";
import requestApi from '../../../helpers/api'; // Đường dẫn đến file API của bạn
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategory = () => {
    const [category, setCategory] = useState({
        name: '',
    });
    const navigate = useNavigate();
    const { id } = useParams(); // Lấy ID từ URL

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await requestApi(`/categories/${id}`, 'GET'); // Gọi API để lấy thông tin người dùng
                setCategory(res.data); // Lưu dữ liệu người dùng vào state, thay đổi đây nếu cần
            } catch (error) {
                console.error('Lỗi khi lấy thông tin danh mục:', error);
            }
        };

        fetchCategory();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategory(prevCategory => ({
            ...prevCategory,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const categoryDataToUpdate = {
            name: category.name
        };
        try {
            await requestApi(`/categories/${id}`, 'PUT', categoryDataToUpdate);
            navigate('/admin/categories'); // Điều hướng về trang danh sách người dùng sau khi cập nhật thành công
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Cập Nhật Danh mục</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên danh mục</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={category.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Cập nhật</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
