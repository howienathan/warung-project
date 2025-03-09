import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductCarousel from './components/ProductCarousel';
import Sejarah from './components/Sejarah';
import Login from './components/login';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import { auth } from './firebase';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import './app.css'



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in:", user);
        setIsLoggedIn(true);
      } else {
        console.log("User not logged in");
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="scrollbar-hidden text-white">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="/menu" element={
          <ProtectedRoute requiredRole="admin"> 
            <ProductCarousel />
            
          </ProtectedRoute>
        }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<ProductCarousel />} />
        <Route path="/sejarah" element={<Sejarah />} />
      </Routes>
    </div>
  );
};

export default App;