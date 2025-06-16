// src/context/authContextBase.jsx
import { createContext, useContext } from 'react';

// 1. Crear el Contexto de Autenticación
export const AuthContext = createContext(null);

// 2. Crear un Hook personalizado para usar el contexto fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  // Opcional: para asegurar que useAuth se use dentro de un AuthProvider
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
