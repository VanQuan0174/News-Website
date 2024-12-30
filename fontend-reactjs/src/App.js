import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AdminRoutes />
        <ClientRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
