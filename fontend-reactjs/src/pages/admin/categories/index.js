import React, { useEffect, useState } from 'react';
import requestApi from '../../../helpers/api'; // Đường dẫn đến file requestApi.js
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2
const Index = () => {
    const [categories, setCategories] = useState([]); // State lưu danh sách sản phẩm

    const navigate = useNavigate(); // Hook điều hướng

    // Hàm lấy danh sách sản phẩm
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await requestApi('/categories', 'GET');
                setCategories(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách danh mục', error);
            }
        };
        fetchCategories();
    }, []);

    // Function xóa 
    const deleteCategory = async (id) => {
        // Hiển thị hộp thoại xác nhận với SweetAlert2
        const result = await Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa danh mục này?',
            text: 'Hành động này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        });

        if (result.isConfirmed) {
            try {
                await requestApi(`/categories/${id}`, 'DELETE'); // Gọi API xóa danh mục
                setCategories(prevCategories => prevCategories.filter(category => category.id !== id)); // Cập nhật state bằng cách loại bỏ danh mục đã xóa
                Swal.fire('Đã xóa!', 'Danh mục đã được xóa thành công.', 'success');
            } catch (error) {
                console.error('Có lỗi xảy ra khi xóa danh mục:', error);
                Swal.fire('Lỗi!', 'Có lỗi xảy ra khi xóa danh mục.', 'error');
            }
        } else {
            console.log('Xóa danh mục bị hủy');
        }
    };
    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate('/admin/add-category')} // Điều hướng khi bấm
            >
                Thêm mới
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={category.id}>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => navigate(`/admin/update-category/${category.id}`)}
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => deleteCategory(category.id)}
                                    className="btn btn-danger me-3">
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
