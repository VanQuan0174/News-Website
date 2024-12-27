import React, { useEffect, useState } from "react";
import requestApi from '../../../../../helpers/api'; // Đường dẫn đến file API của bạn
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({
        username: '',
    });
    const navigate = useNavigate();
    const { id } = useParams(); // Lấy ID từ URL

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await requestApi(`/users/${id}`, 'GET'); // Gọi API để lấy thông tin người dùng
                setUser(res.data); // Lưu dữ liệu người dùng vào state, thay đổi đây nếu cần
            } catch (error) {
                console.error('Lỗi khi lấy thông tin người dùng:', error);
            }
        };

        fetchUser();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userDataToUpdate = {
            username: user.username 
        };
        try {
            await requestApi(`/users/${id}`, 'PUT', userDataToUpdate);
            navigate('/admin/users'); // Điều hướng về trang danh sách người dùng sau khi cập nhật thành công
        } catch (error) {
            console.error('Lỗi khi cập nhật người dùng:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Cập Nhật Người Dùng</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Tên người dùng</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Cập nhật</button>
            </form>
        </div>
    );
};

export default UpdateUser;
