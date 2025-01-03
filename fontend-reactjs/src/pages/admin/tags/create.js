import { useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../../helpers/api";
import Swal from "sweetalert2";
import useForm from "../../../components/form/useForm";
import Input from "../../../components/form/input";

const CreateTag = () => {
    const navigate = useNavigate();

    const onSubmit = async (formData) => {
        try {
            await requestApi('/tags', 'POST', formData);
            navigate('/admin/tags');
            Swal.fire('Thêm thành công', 'Thẻ tag được thêm thành công', 'success');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    }
    const { values, handleInputChange, handleSubmit } = useForm({ name: '' }, onSubmit);
    return (
        <div>
            <h2>Thêm Thẻ Tag</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Input
                        label="Tên thẻ tag"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">Xác nhận</button>
            </form>
        </div>
    )
}
export default CreateTag