import axios from "axios";

/**
 * Hàm `requestApi` để gọi API với token xác thực.
 * @param {string} endpoint - Endpoint của API (ví dụ: '/auth/login').
 * @param {string} method - Phương thức HTTP (ví dụ: 'GET', 'POST').
 * @param {object|FormData} body - Dữ liệu cần gửi (nếu có).
 * @param {string} responseType - Loại dữ liệu trả về (mặc định: 'json').
 * @returns {Promise} - Kết quả từ API hoặc lỗi.
 */
export default function requestApi(endpoint, method, body, responseType = 'json') {
    // 1. Cấu hình các header mặc định
    const headers = {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    };

    // 2. Thêm token xác thực vào header nếu tồn tại trong localStorage
    const token = localStorage.getItem("access_token");

    if (token) {
        // Nếu có token, thêm Authorization vào header
        headers["Authorization"] = `Bearer ${token}`;
    }

    // 3. Kiểm tra xem có phải gửi FormData (multipart/form-data) không
    // Nếu gửi FormData (thường là khi có file), cần để `axios` tự xử lý header Content-Type
    let config = {
        method: method,
        url: `${process.env.REACT_APP_API_URL}${endpoint}`, // URL đầy đủ từ biến môi trường
        headers: headers,
        responseType: responseType
    };

    // Nếu body là FormData, không cần set Content-Type vì axios sẽ tự động xử lý
    if (body instanceof FormData) {
        config.data = body; // Đảm bảo rằng data là FormData nếu có tệp
    } else {
        config.headers["Content-Type"] = "application/json"; // Đảm bảo gửi dữ liệu JSON
        config.data = body;
    }

    // 4. Tạo instance Axios và gửi yêu cầu
    return axios(config)
        .catch((error) => {
            // 5. Xử lý lỗi nếu có
            if (error.response) {
                // Nếu có lỗi từ server (mã lỗi 400, 500,...)
                console.error("Lỗi từ server:", error.response);
                if (error.response.status === 401) {
                    // Xử lý lỗi 401 (Unauthorized), ví dụ đăng xuất người dùng
                    localStorage.removeItem("access_token");
                    window.location.href = "/login";  // Chuyển hướng người dùng đến trang đăng nhập
                }
                // Ném lỗi với thông báo chi tiết hơn
                throw new Error(`Lỗi: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                // Nếu không có phản hồi từ server
                console.error("Không nhận được phản hồi từ server:", error.request);
                throw new Error("Không thể kết nối tới server. Vui lòng thử lại sau.");
            } else {
                // Nếu có lỗi trong quá trình thiết lập yêu cầu
                console.error("Lỗi yêu cầu API:", error.message);
                throw new Error(`Lỗi yêu cầu API: ${error.message}`);
            }
        });
}
