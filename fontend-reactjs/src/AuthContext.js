import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("access_token"));

    const login = () => setIsAuthenticated(true);
    // const logout = () => {
    //     setIsAuthenticated(false);
    //     localStorage.removeItem("access_token");
    // };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login }}>
            {children}
        </AuthContext.Provider>
    );
};
