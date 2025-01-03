import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import requestApi from "../../../helpers/api";
import Input from "../../../components/form/input";
import useForm from "../../../components/form/useForm";

const CreateCategory = () => {
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            await requestApi('/categories', 'POST', formData);
            navigate('/admin/categories');
            Swal.fire('Thêm thành công!', 'Danh mục đã được thêm thành công.', 'success');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    };

    const { values, handleInputChange, handleSubmit } = useForm({ name: '' }, onSubmit);

    return (
        <div>
            <h2>Thêm Danh Mục</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Tên danh mục"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    );
};

export default CreateCategory;
