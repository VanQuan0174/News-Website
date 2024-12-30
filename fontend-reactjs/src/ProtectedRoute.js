import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element, ...rest }) => {
//     const isAuthenticated = localStorage.getItem("access_token");

//     if (!isAuthenticated) {
//         return <Navigate to="/admin/login" />;
//     }

//     return element;
// };

// export default ProtectedRoute;


import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('access_token'); // Kiểm tra xác thực
    return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
