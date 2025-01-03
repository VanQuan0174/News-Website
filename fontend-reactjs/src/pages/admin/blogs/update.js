import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import requestApi from "../../../helpers/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UpdateBlog = () => {
    const navigate = useNavigate();

    const [blog, setBlog] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
        source: '',
    });

    const { id } = useParams(); // lấy id bài viết

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await requestApi(`/blogs/${id}`, 'GET');
                setBlog(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy thông tin bài viết:', error);
            }
        };
        fetchBlog();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlog(prevBlog => ({
            ...prevBlog,
            [name]: value,
        }));
    };

    const handleContentChange = (data) => {
        setBlog(prevBlog => ({
            ...prevBlog,
            content: data,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogDataToUpdate = {
            title: blog.title,
            summary: blog.summary,
            content: blog.content,
            author: blog.author,
            source: blog.source,
        };
        try {
            await requestApi(`/blogs/${id}`, 'PUT', blogDataToUpdate);
            navigate('/admin/blogs');
        } catch (error) {
            alert(`Đã xảy ra lỗi: ${error}`);
        }
    };

    return (
        <div>
            <h2>Cập nhật bài viết</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Tiêu đề bài viết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={blog.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="summary" className="form-label">Tóm tắt nội dung</label>
                    <input
                        type="text"
                        className="form-control"
                        id="summary"
                        name="summary"
                        value={blog.summary}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Nội dung bài viết</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={blog.content}
                        config={{
                            licenseKey: "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzY4MTI3OTksImp0aSI6ImQ1OWI5NzI2LTk1OWEtNDM0Ny1hNzFjLTY4NTFiMzBlZjdhOCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6Ijk5MzlhNDhjIn0.uIAWOhaLBa8QSFfO3QiHtTScndTl0lgfZQfyJobTg9s3qgsTd8qOGx1mTeSK_rxwuWXYQAgI5OOIDVVLpd9lSA",
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            handleContentChange(data);
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Tên tác giả</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={blog.author}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Nguồn bài viết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="source"
                        name="source"
                        value={blog.source}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success">Cập nhật</button>
            </form>
        </div>
    );
};

export default UpdateBlog;
