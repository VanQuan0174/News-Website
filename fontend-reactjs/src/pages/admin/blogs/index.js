import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../../helpers/api";
import Swal from 'sweetalert2';  // Import SweetAlert2

const Index = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Lấy tất cả các bài viết và thông tin về danh mục trong một lần gọi API
                const res = await requestApi('/blogs', 'GET');

                // Map danh mục theo categoryId trong mỗi bài viết
                const blogsWithCategoryNames = await Promise.all(res.data.map(async (blog) => {
                    const categoryRes = await requestApi(`/categories/${blog.categoryId}`, 'GET');
                    blog.categoryName = categoryRes.data.name;  // Gán tên danh mục vào mỗi bài viết
                    return blog;
                }));

                setBlogs(blogsWithCategoryNames);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách bài viết hoặc danh mục', error);
            }
        };

        fetchBlogs();
    }, []);
    const deleteBlog = async (id) => {
        // Hiển thị hộp thoại xác nhận với SweetAlert2
        const result = await Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa bài viết này?',
            text: 'Hành động này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        });

        if (result.isConfirmed) {
            try {
                await requestApi(`/blogs/${id}`, 'DELETE'); // Gọi API xóa danh mục
                setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id)); // Cập nhật state bằng cách loại bỏ danh mục đã xóa
                Swal.fire('Đã xóa!', 'Bài viết đã được xóa thành công.', 'success');
            } catch (error) {
                console.error('Có lỗi xảy ra khi xóa bài viết:', error);
                Swal.fire('Lỗi!', 'Có lỗi xảy ra khi xóa bài viết.', 'error');
            }
        } else {
            Swal.fire('Kết thúc', 'Xóa bài viết đã bị hủy', 'error')

        }
    }
    return (
        <div>
            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate('/admin/add-blog')} // Điều hướng khi bấm
            >
                Thêm mới
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tiêu đề bài viết</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">Image</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={blog.id}>
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.categoryName || 'Chưa xác định'}</td> {/* Hiển thị tên danh mục từ state */}
                            <td>
                                <img
                                    src={`${process.env.REACT_APP_UPLOAD_URL}/uploads/blog/${blog.image}`}
                                    alt="image"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-warning me-2"
                                    onClick={() => navigate(`/admin/update-blog/${blog.id}`)}
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => deleteBlog(blog.id)}
                                    className="btn btn-danger me-3"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
