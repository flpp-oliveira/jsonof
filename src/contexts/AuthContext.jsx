import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthChange, signInWithGoogle, signOut } from '../firebase/auth';

// Criando o contexto de autenticação
const AuthContext = createContext();

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configurar o listener de mudança de estado de autenticação
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  // Funções de autenticação expostas pelo contexto
  const login = async () => {
    return await signInWithGoogle();
  };

  const logout = async () => {
    return await signOut();
  };

  // Valor que será disponibilizado pelo contexto
  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};