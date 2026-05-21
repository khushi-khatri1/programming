import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import About from './pages/About';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import './index.css';

// Simple Contexts defined right here in App.jsx (No more context folder)
export const MyContext = createContext();

function App() {
  // State for User Authentication
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('admin')) || null);

  // State for Cart and Wishlist
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('admin', JSON.stringify(admin));
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [user, admin, cart, wishlist]);

  // Helper functions using React Toastify
  const addToast = (message, type = 'info') => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    } else {
      toast.info(message);
    }
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <MyContext.Provider value={{ 
      user, setUser, 
      admin, setAdmin, 
      cart, setCart, 
      wishlist, setWishlist, 
      addToCart, addToWishlist,
      addToast 
    }}>
      <BrowserRouter>
        <Navbar />
        
        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />

        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/orders" element={user ? <Orders /> : <Navigate to="/login" />} />
            <Route 
              path="/admin-dashboard" 
              element={admin ? <AdminDashboard /> : <Navigate to="/admin-login" />} 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <Link to="/" className="btn btn-primary px-5 py-3 rounded-pill">Back to Home</Link>
    </div>
  );
}

export default App;
