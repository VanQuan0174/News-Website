import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import requestApi from "../../../helpers/api";

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
                        <th scope="col">Loại</th>
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
                            <td>{blog.type}</td>
                            <td>{blog.categoryName || 'Chưa xác định'}</td> {/* Hiển thị tên danh mục từ state */}
                            <td>
                                <img
                                    src={`${process.env.REACT_APP_UPLOAD_URL}/uploads/blog/${blog.image}`}
                                    alt="image"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            </td>
                            <td>
                                {/* Thêm các hành động như sửa, xóa tại đây */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
