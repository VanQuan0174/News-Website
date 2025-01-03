import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import requestApi from "../../../helpers/api";
import Input from "../../../components/form/input";
import useForm from "../../../components/form/useForm";

const CreateUser = () => {
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            await requestApi('/users', 'POST', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            navigate('/admin/users');
            Swal.fire('Thêm thành công!', 'Người dùng đã được thêm thành công.', 'success');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    };

    const { values, handleInputChange, handleFileChange, handleSubmit } = useForm(
        { username: '', email: '', password: '', image: null },
        onSubmit
    );

    return (
        <div>
            <h2>Thêm Người Dùng Mới</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Tên người dùng"
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={handleInputChange}
                />
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                <Input
                    label="Mật khẩu"
                    id="password"
                    name="password"
                    value={values.password}
                    type="password"
                    onChange={handleInputChange}
                />
                <Input
                    label="Ảnh người dùng"
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleFileChange}
                />
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    );
};

export default CreateUser;
