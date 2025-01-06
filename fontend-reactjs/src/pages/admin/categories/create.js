import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import requestApi from "../../../helpers/api";
import Input from "../../../components/form/input";
import useForm from "../../../components/form/useForm";
import { useEffect, useState } from "react";

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
    const [categories, setCategories] = useState([]);

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

    const { values, handleInputChange, handleSubmit } = useForm({ name: '', parent_id: null }, onSubmit);

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
                <div className="mb-3">
                    <label htmlFor="parent_id" className="form-label">Danh mục cha</label>
                    <select
                        className="form-control"
                        id="parent_id" name="parent_id"
                        onChange={handleInputChange}
                    >
                        <option value="">Chọn danh mục</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    );
};

export default CreateCategory;
