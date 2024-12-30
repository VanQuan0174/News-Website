import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm điều hướng
import requestApi from "../../../helpers/api"; // Đường dẫn API helper

import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CustomUploadAdapter from "../../../helpers/CustomUploadAdapter";

const CreateBlog = () => {
    // State lưu danh mục
    const [categories, setCategories] = useState([]);

    // State lưu thông tin bài viết mới
    const [newBlog, setNewBlog] = useState({
        title: '',
        type: '',
        summary: '',
        content: '',
        categoryId: '',
        priority: '',
        image: null,
    });

    // State để hiển thị ảnh xem trước
    const [imagePreview, setImagePreview] = useState(null);

    // Hook để điều hướng sau khi tạo thành công
    const navigate = useNavigate();

    // Lấy danh sách danh mục từ API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await requestApi('/categories', 'GET');
                setCategories(res.data); // Gán danh mục vào state
            } catch (error) {
                console.error('Lỗi khi lấy danh sách danh mục', error);
            }
        };

        fetchCategories();
    }, []);

    // Xử lý khi thay đổi dữ liệu input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog(prevBlog => ({
            ...prevBlog,
            [name]: value
        }));
    };

    // Xử lý khi thay đổi file ảnh
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewBlog(prevBlog => ({
            ...prevBlog,
            image: file
        }));
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Xử lý khi gửi form
    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn chặn reload trang

        try {
            const formData = new FormData();
            formData.append('title', newBlog.title);
            formData.append('type', newBlog.type);
            formData.append('summary', newBlog.summary);
            formData.append('content', newBlog.content);
            formData.append('categoryId', newBlog.categoryId);
            formData.append('priority', newBlog.priority);

            if (newBlog.image) {
                formData.append('image', newBlog.image);
            }

            // Gửi dữ liệu lên backend
            await requestApi('/blogs', 'POST', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Bài viết được thêm thành công');
            navigate('/admin/blogs');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error.message}`);
        }
    };

    function uploadPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new CustomUploadAdapter(loader);
        };
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Tiêu đề bài viết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Loại bài viết</label>
                    <select
                        className="form-control"
                        id="type"
                        name="type"
                        value={newBlog.type}
                        onChange={handleInputChange}
                    >
                        <option value="">Chọn loại bài viết</option>
                        <option value="Blog">BLOG</option>
                        <option value="Tin tức">TIN_TUC</option>
                        <option value="Hướng dẫn">HUONG_DAN</option>
                        <option value="Đánh giá">DANH_GIA</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="summary" className="form-label">Tóm tắt bài viết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="summary"
                        name="summary"
                        value={newBlog.summary}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Nội dung bài viết</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Nhập nội dung bài viết ...</p>"
                        config={{
                            licenseKey: "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzY4MTI3OTksImp0aSI6ImQ1OWI5NzI2LTk1OWEtNDM0Ny1hNzFjLTY4NTFiMzBlZjdhOCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6Ijk5MzlhNDhjIn0.uIAWOhaLBa8QSFfO3QiHtTScndTl0lgfZQfyJobTg9s3qgsTd8qOGx1mTeSK_rxwuWXYQAgI5OOIDVVLpd9lSA",
                            extraPlugins: [uploadPlugin],
                        }}
                        onReady={editor => {
                            console.log('Editor is ready to use', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setNewBlog(prevBlog => ({
                                ...prevBlog,
                                content: data
                            }));
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Danh mục</label>
                    <select
                        className="form-control"
                        id="category"
                        name="categoryId"
                        value={newBlog.categoryId}
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

                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Mức độ ưu tiên bài viết</label>
                    <select
                        className="form-control"
                        id="priority"
                        name="priority"
                        value={newBlog.priority}
                        onChange={handleInputChange}
                    >
                        <option value="">Chọn mức độ ưu tiên</option>
                        <option value="1">Ưu tiên đặc biệt</option>
                        <option value="2">Ưu tiên trước</option>
                        <option value="3">Ưu tiên bình thường</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Ảnh bài viết</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                    />
                    {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px' }} />}
                </div>

                <button type="submit" className="btn btn-primary">Tạo bài viết</button>
            </form>
        </div>
    );
};
//check git

export default CreateBlog;
