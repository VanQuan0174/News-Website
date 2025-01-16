import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm điều hướng
import requestApi from "../../../helpers/api"; // Đường dẫn API helper

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import CustomUploadAdapter from "../../../helpers/CustomUploadAdapter";
import Swal from "sweetalert2";

const CreateBlog = () => {

    const [newBlog, setNewBlog] = useState({
        title: '',
        summary: '',
        content: '',
        categoryId: '',
        priority: '',
        image: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const navigate = useNavigate();

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

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await requestApi('/tags', 'GET');
                setTags(res.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách tag', error);
            }
        };
        fetchTags();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBlog(prevBlog => ({
            ...prevBlog,
            [name]: value
        }));
    };

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

    const handleTagChange = (tagId) => {
        setSelectedTags((prevSelectedTags) => {
            if (prevSelectedTags.includes(tagId)) {
                return prevSelectedTags.filter((id) => id !== tagId);
            } else {
                return [...prevSelectedTags, tagId];
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('title', newBlog.title);
            formData.append('summary', newBlog.summary);
            formData.append('content', newBlog.content);
            formData.append('categoryId', newBlog.categoryId);
            formData.append('priority', newBlog.priority);
            formData.append('author', newBlog.author);
            formData.append('source', newBlog.source);

            if (newBlog.image) {
                formData.append('image', newBlog.image);
            }

            selectedTags.forEach(tagId => formData.append('tagIds[]', tagId));

            await requestApi('/blogs', 'POST', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            Swal.fire('Thêm thành công!', 'Bài viết đã được thêm thành công.', 'success');
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
                            licenseKey: "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzgyODE1OTksImp0aSI6IjM3MTZhODc4LWY4NGQtNGVkNS04YTY1LWMzMjkwYTdhZDgyOCIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImJkZjM1Y2Q3In0.i3O5wuPyWszwqxPhTQ_YFB38GBQ3DB9LvVFHB6bGV4Y03mGn9mLvhgumqFL-xc7ZYQd1D-SGd1Fjb7e-hBGC_A",
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
                    <label htmlFor="author" className="form-label">Tác giả bài viết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={newBlog.author}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Nguồn bài viết</label>
                    <input
                        type="text"
                        className="form-control"
                        id="source"
                        name="source"
                        value={newBlog.source}
                        onChange={handleInputChange}
                    />
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

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Chọn thẻ tags bài viết</label>
                    <div>
                        {tags.map((tag) => (
                            <div key={tag.id}>
                                <input
                                    type="checkbox"
                                    id={`tag-${tag.id}`}
                                    value={tag.id}
                                    checked={selectedTags.includes(tag.id)}
                                    onChange={() => handleTagChange(tag.id)}
                                />
                                <label htmlFor={`tag-${tag.id}`} className="ms-2">{tag.name}</label>
                            </div>
                        ))}
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Tạo bài viết</button>
            </form>
        </div>
    );
};

export default CreateBlog;
