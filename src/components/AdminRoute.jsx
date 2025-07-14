import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const location = useLocation();
    const isAdmin = localStorage.getItem('isAdmin');  // Assuming isAdmin is stored in localStorage after login

    if (isAdmin !== 'true') {
        // Redirect to login page if not an admin
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children; // Render protected content (admin dashboard)
}

export default AdminRoute;
