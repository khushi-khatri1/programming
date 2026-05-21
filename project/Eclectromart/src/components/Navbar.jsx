import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import './Navbar.css';

function Navbar() {
  const { user, setUser, cart, wishlist } = useContext(MyContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Assuming you might have a search query parameter or a search page.
      // For now, redirecting to products page with search term if possible, or just to products.
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="fas fa-bolt me-2"></i>ElectroMart
        </Link>
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle fw-medium" to="/products" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </Link>
              <ul className="dropdown-menu border-0 shadow-sm">
                <li><Link className="dropdown-item" to="/products">All Products</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Laptop%20Accessories">Laptop Accessories</Link></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Headphones">Headphones</Link></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Smart%20Watches">Smart Watches</Link></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Keyboards">Keyboards</Link></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Mouse">Mouse</Link></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Speakers">Speakers</Link></li>
                <li><Link className="dropdown-item py-2" to="/products?category=Earbuds">Earbuds</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/about">About</Link>
            </li>
          </ul>

          <form className="d-flex mx-lg-3 my-2 my-lg-0 position-relative" onSubmit={handleSearch} style={{ flex: 1, maxWidth: '400px' }}>
            <input 
              className="form-control rounded-pill pe-5 bg-light border-0" 
              type="search" 
              placeholder="Search products..." 
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn position-absolute end-0 top-50 translate-middle-y text-muted rounded-circle border-0" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <div className="d-flex align-items-center gap-3 ms-lg-3">
            <Link to="/wishlist" className="text-secondary position-relative text-decoration-none">
              <i className="far fa-heart fa-lg"></i>
              {wishlist.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem' }}>
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-secondary position-relative text-decoration-none mx-2">
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cart.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '0.65rem' }}>
                  {cart.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="dropdown">
                <button className="btn btn-light rounded-pill border-0 shadow-sm dropdown-toggle d-flex align-items-center gap-2 px-3" type="button" data-bs-toggle="dropdown">
                  <i className="fas fa-user-circle text-primary fs-5"></i>
                  <span className="fw-medium d-none d-sm-inline">{user.name.split(' ')[0]}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                  <li><Link className="dropdown-item py-2" to="/profile"><i className="fas fa-user me-2 text-muted"></i>Profile</Link></li>
                  <li><Link className="dropdown-item py-2" to="/orders"><i className="fas fa-box me-2 text-muted"></i>My Orders</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger py-2" onClick={() => setUser(null)}><i className="fas fa-sign-out-alt me-2"></i>Sign Out</button></li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary px-4 rounded-pill fw-medium shadow-sm">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
