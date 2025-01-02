import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../../helpers/api";
import Swal from "sweetalert2";

const Index = () => {
    const navigate = useNavigate(); // Hook điều hướng

    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await requestApi('/tags', 'GET');
                setTags(res.data);
            } catch (error) {
                console.error('Lỗi xẩy ra khi lấy danh sách tag', error);
            }
        };
        fetchTags();
    }, []);

    // xóa tag
    const deleteTag = async (id) => {
        const result = await Swal.fire({
            title: 'Bạn có chắc muốn xóa thẻ tag này không?',
            text: 'Hành động này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        });

        if (result.isConfirmed) {
            try {
                await requestApi(`/tags/${id}`, 'DELETE');
                setTags(prevTags => prevTags.filter(tag => tag.id !== id));
                Swal.fire('Đã xóa!', 'Thẻ tag đã xóa thành công', 'success');
            } catch (error) {
                console.error('Có lỗi xảy ra vui lòng kiểm tra lại', error);
                Swal.fire('Lỗi!', 'Có lỗi xảy ra khi xóa thẻ tag', 'error');
            }
        } else {
            Swal.fire('Kết thúc', 'Xóa thẻ tag đã bị hủy', 'error')
        }
    }
    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate('/admin/add-tag')} // Điều hướng khi bấm
            >
                Thêm mới
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Thẻ tag</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map((tag, index) => (
                        <tr key={tag.id}>
                            <td>{index + 1}</td>
                            <td>{tag.name}</td>
                            <td>
                                {/* <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => navigate(`/admin/update-category/${category.id}`)}
                                >
                                    Sửa
                                </button> */}
                                <button
                                    onClick={() => deleteTag(tag.id)}
                                    className="btn btn-danger me-3">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Index