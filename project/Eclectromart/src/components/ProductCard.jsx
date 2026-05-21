import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

function ProductCard({ product }) {
  const { user, addToCart, addToWishlist, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  const handleCart = (e) => {
    e.preventDefault();
    if (!user) {
      addToast('Please login first', 'error');
      navigate('/login');
    } else {
      addToCart(product);
      addToast('Added to Cart', 'success');
    }
  };

  const handleWish = (e) => {
    e.preventDefault();
    if (!user) {
      addToast('Please login first!', 'error');
      navigate('/login');
    } else {
      addToWishlist(product);
      addToast('Added to Wishlist', 'success');
    }
  };

  const discount = product.discountPercentage || 0;
  const discountedPrice = discount ? product.price * (1 - discount / 100) : product.price;

  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden product-card">
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="position-relative">
          <img src={product.image} className="card-img-top" height="250" style={{ objectFit: 'cover' }} alt={product.name} />
          {product.badge && (
            <span className="position-absolute top-0 end-0 m-3 badge bg-primary">{product.badge}</span>
          )}
          {discount > 0 && (
            <span className="position-absolute top-0 start-0 m-3 badge bg-success">{discount}% OFF</span>
          )}
        </div>
        <div className="card-body">
          <p className="text-muted small mb-1">{product.category}</p>
          <h5 className="card-title text-truncate text-dark">{product.name}</h5>
          <div className="d-flex align-items-center mb-2">
            <i className="fas fa-star text-warning small me-1"></i>
            <span className="small text-muted fw-bold">{product.rating || '4.5'}</span>
            <span className="small text-muted ms-1">({product.reviews || '0'})</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              {discount > 0 ? (
                <>
                  <span className="text-muted me-2"><s>₹{product.price.toLocaleString('en-IN')}</s></span>
                  <span className="h5 fw-bold text-primary">₹{discountedPrice.toLocaleString('en-IN')}</span>
                </>
              ) : (
                <span className="h5 fw-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
              )}
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-outline-danger border-0" onClick={handleWish}>
                <i className="far fa-heart"></i>
              </button>
              <button className="btn btn-sm btn-primary rounded-circle p-2" onClick={handleCart}>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
