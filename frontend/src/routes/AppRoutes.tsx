
// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home';  // Direct import
import AdminPage from '../pages/Admin/Admin';  // Direct import

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default AppRoutes;