// src/components/ProtectedRoute.tsx

import React from 'react'; // ✅ ШАГ 1: Добавляем этот импорт
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// ✅ ШАГ 2: Меняем тип для children
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};
