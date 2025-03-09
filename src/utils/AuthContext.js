import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase"; // Pastikan path ini benar

// Buat Context
const AuthContext = createContext();

// Provider untuk Context
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // true jika user ada, false jika tidak
    });

    return () => unsubscribe(); // Cleanup listener saat komponen di-unmount
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error saat logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan Context
export const useAuth = () => useContext(AuthContext);
