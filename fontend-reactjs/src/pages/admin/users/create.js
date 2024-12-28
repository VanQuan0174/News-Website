import React, { useState } from "react";
import requestApi from '../../../helpers/api'; // Đường dẫn đến file API của bạn
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        password: '',
        image: null,
    });
    const navigate = useNavigate(); // Để điều hướng sau khi thêm người dùng

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewUser(prevUser => ({
            ...prevUser,
            image: file
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn reload trang
        try {
            const formData = new FormData();
            formData.append('username', newUser.username);
            formData.append('email', newUser.email);
            formData.append('password', newUser.password);

            // Kiểm tra nếu có ảnh, thêm vào FormData
            if (newUser.image) {
                formData.append('image', newUser.image);
            }

            // Gọi API gửi dữ liệu lên backend
            await requestApi('/users', 'POST', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Đảm bảo gửi dữ liệu dưới dạng multipart/form-data
                },
            });

            // Nếu yêu cầu thành công
            navigate('/admin/users'); // Điều hướng về trang danh sách người dùng sau khi thêm thành công
            console.log('Người dùng đã được thêm thành công');
        } catch (error) {
            // Kiểm tra lỗi chi tiết hơn
            if (error.response) {
                console.error('Lỗi khi thêm người dùng:', error.response.data);
                alert(`Đã xảy ra lỗi: ${error.response.data.message || error.response.data}`);
            } else {
                console.error('Lỗi không xác định:', error);
                alert('Đã xảy ra lỗi không xác định');
            }
        }
    };

    return (
        <div>
            <h2>Thêm Người Dùng Mới</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Tên người dùng</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={newUser.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Ảnh người dùng</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    );
};

export default CreateUser;
