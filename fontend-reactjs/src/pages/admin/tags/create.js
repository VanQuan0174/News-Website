import { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../../helpers/api";
import Swal from "sweetalert2";

const CreateTag = () => {
    const navigate = useNavigate();

    const [newTag, setNewTag] = useState({
        name: ''
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTag(prevTag => ({
            ...prevTag,
            [name]: value
        }))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await requestApi('/tags', 'POST', newTag);
            navigate('/admin/tags');
            Swal.fire('Thêm thành công!', 'Danh mục đã được thêm thành công.', 'success');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    }
    return (
        <div>
            <h2>Thêm Thẻ Tag</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Tên thẻ tag</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={newTag.name}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    )
}
export default CreateTag