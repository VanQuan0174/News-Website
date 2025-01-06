import React, { useEffect, useState } from 'react';
import requestApi from '../../../helpers/api'; // Đường dẫn đến file requestApi.js
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2

const Index = () => {
    const [categories, setCategories] = useState([]); // State lưu danh sách sản phẩm
    const [categoryMap, setCategoryMap] = useState({}); // State lưu thông tin danh mục theo id
    const navigate = useNavigate(); // Hook điều hướng

    // Hàm lấy danh sách sản phẩm
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await requestApi('/categories', 'GET');
                setCategories(res.data);

                // Tạo một bản đồ các danh mục theo id để dễ dàng truy xuất
                const categoryMap = res.data.reduce((acc, category) => {
                    acc[category.id] = category;
                    return acc;
                }, {});
                setCategoryMap(categoryMap);
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
            Swal.fire('Kết thúc', 'Xóa danh mục đã bị hủy', 'error')
        }
    };

    // Hàm lấy tên danh mục cha từ parent_id
    const getParentName = (parentId) => {
        if (!parentId) return 'Không có';  // Nếu không có parent_id thì trả về 'Không có'
        return categoryMap[parentId]?.name || 'Không xác định';  // Trả về tên danh mục cha hoặc 'Không xác định' nếu không tìm thấy
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
                        <th scope="col">Danh mục cha</th> {/* Cột mới cho danh mục cha */}
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={category.id}>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>{getParentName(category.parent_id)}</td> {/* Hiển thị tên danh mục cha */}
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
