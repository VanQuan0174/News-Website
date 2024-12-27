import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import RoutesList from './routes/web';

function App() {
  return (
    <AuthProvider>
      <Router>
        <RoutesList />
      </Router>
    </AuthProvider>
  );
}

export default App;
