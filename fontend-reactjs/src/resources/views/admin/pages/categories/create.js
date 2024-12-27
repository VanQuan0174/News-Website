import { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../../../../helpers/api";
import Swal from "sweetalert2";

const CreateCategory = () => {
    const [newCategory, setNewCategory] = useState({
        name: '',
    })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory(prevCategory => ({
            ...prevCategory,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await requestApi('/categories', 'POST', newCategory);
            navigate('/admin/categories');
            Swal.fire('Thêm thành công!', 'Danh mục đã được thêm thành công.', 'success');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    }
    return (
        <div>
            <h2>Thêm Người Danh Mục</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên danh mục</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={newCategory.name}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    )
}

export default CreateCategory;