import React, { useEffect, useState } from 'react';
import requestApi from '../../../../../helpers/api'; /// Đường dẫn đến file requestApi.js
import { useNavigate } from 'react-router-dom'
const Index = () => {
    const [users, setUsers] = useState([]); // useState lưu danh sách người dùng

    // Hàm lấy tất cả người dùng
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await requestApi('/users', 'GET'); // API hiển thị ra danh sách người dùng
                setUsers(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách người dùng:', error);
            }
        };
        fetchUsers();
    }, []);

    // Function xóa người dùng
    const deleteUser = async (id) => {
        try {
            await requestApi(`/users/${id}`, 'DELETE'); // Gọi API xóa người dùng
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id)); // Cập nhật state bằng cách loại bỏ người dùng đã xóa
        } catch (error) {
            console.error('Có lỗi xảy ra khi xóa người dùng:', error);
        }
    };

    const navigate = useNavigate(); // Khởi tạo navigate trong component

    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate('/admin/add-user')} // Điều hướng khi bấm
            >
                Thêm mới
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.password}</td> */}
                            <td>{user.status ? 'Hoạt động' : 'Ngừng hoạt động'}</td>
                            <td>
                                <img
                                    src={`${process.env.REACT_APP_UPLOAD_URL}/uploads/user/${user.image}`}
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="btn btn-danger me-3">
                                    Xóa
                                </button>
                                <button
                                    onClick={() => navigate(`/admin/update-user/${user.id}`)} // Điều hướng đến trang cập nhật
                                    className="btn btn-warning">
                                    Cập nhật
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default Index;
