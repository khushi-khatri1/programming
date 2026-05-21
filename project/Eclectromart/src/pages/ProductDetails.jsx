import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const { user, addToCart, addToWishlist, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  // Fetch product details
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => navigate('/products'));
  }, [id, navigate]);

  // Fetch reviews for this product
  useEffect(() => {
    axios
      .get(`http://localhost:3000/reviews?productId=${id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Failed to load reviews', err));
  }, [id]);

  const handleCartClick = () => {
    if (!user) {
      addToast('Please login first', 'error');
      navigate('/login');
      return;
    }
    addToCart(product);
    addToast('Added to Cart', 'success');
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (!user) {
      addToast('Please login to submit a review', 'error');
      navigate('/login');
      return;
    }
    const reviewToSave = {
      ...newReview,
      productId: id,
      date: new Date().toISOString(),
    };
    axios
      .post('http://localhost:3000/reviews', reviewToSave)
      .then((res) => {
        setReviews((prev) => [...prev, res.data]);
        setNewReview({ name: '', rating: 5, text: '' });
        addToast('Review added', 'success');
      })
      .catch(() => addToast('Failed to add review', 'error'));
  };

  if (!product) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <img src={product.image} className="img-fluid" alt={product.name} />
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase">
            {product.category}
          </span>
          <h1 className="fw-bold mb-3 display-5">{product.name}</h1>
          <div className="d-flex align-items-center mb-4 text-warning">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={i < Math.round(product.rating) ? 'fas fa-star' : 'far fa-star'}></i>
            ))}
            <span className="ms-2 text-muted small">({product.reviews} customer reviews)</span>
          </div>
          <h2 className="text-primary fw-bold mb-4 display-6">
            ₹{product.price.toLocaleString('en-IN')}
          </h2>
          <p className="lead text-muted mb-5" style={{ lineHeight: '1.8' }}>
            {product.description}
          </p>
          <div className="d-flex gap-3 mb-5">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm" onClick={handleCartClick}>
              <i className="fas fa-shopping-cart me-2"></i>Add to Cart
            </button>
            <button
              className="btn btn-outline-danger btn-lg px-4 rounded-circle shadow-sm"
              onClick={() => {
                addToWishlist(product);
                addToast('Added to Wishlist!', 'success');
              }}
            >
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="bg-light p-4 rounded-4 border-0">
            <div className="row text-center g-3">
              <div className="col-4">
                <i className="fas fa-truck text-primary mb-2"></i>
                <p className="small mb-0 fw-bold">Free Delivery</p>
              </div>
              <div className="col-4">
                <i className="fas fa-undo text-primary mb-2"></i>
                <p className="small mb-0 fw-bold">7 Days Return</p>
              </div>
              <div className="col-4">
                <i className="fas fa-shield-alt text-primary mb-2"></i>
                <p className="small mb-0 fw-bold">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-5">
        <h4 className="fw-bold mb-3">Customer Reviews</h4>
        {reviews.length === 0 ? (
          <p className="text-muted">No reviews yet. Be the first to review!</p>
        ) : (
          <ul className="list-unstyled">
            {reviews.map((r) => (
              <li key={r.id} className="mb-4 border-bottom pb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{r.name}</strong>
                  <small className="text-muted" title={new Date(r.date).toLocaleString()}>{new Date(r.date).toLocaleDateString()}</small>
                </div>
                <div className="text-warning mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < r.rating ? 'fas fa-star' : 'far fa-star'}></i>
                  ))}
                </div>
                <p className="mb-0">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={submitReview} className="mt-4">
          <h5 className="mb-3">Add a Review</h5>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={newReview.name} onChange={handleReviewChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select className="form-select" name="rating" value={newReview.rating} onChange={handleReviewChange}>
              {[5, 4, 3, 2, 1].map((v) => (
                <option key={v} value={v}>
                  {v} Star{v > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea className="form-control" name="text" rows="3" value={newReview.text} onChange={handleReviewChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </section>
    </div>
  );
}

export default ProductDetails;

import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const { user, addToCart, addToWishlist, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  // Fetch product
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => navigate('/products'));
  }, [id, navigate]);

  // Fetch reviews for product
  useEffect(() => {
    axios.get(`http://localhost:3000/reviews?productId=${id}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error('Failed to load reviews', err));
  }, [id]);

  const handleCartClick = () => {
    if (!user) {
      addToast('Please login first', 'error');
      navigate('/login');
      return;
    }
    addToCart(product);
    addToast('Added to Cart', 'success');
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }));
  };

  const submitReview = (e) => {
    e.preventDefault();
    if (!user) {
      addToast('Please login to submit a review', 'error');
      navigate('/login');
      return;
    }
    const reviewToSave = { ...newReview, productId: id, date: new Date().toISOString() };
    axios.post('http://localhost:3000/reviews', reviewToSave)
      .then(res => {
        setReviews(prev => [...prev, res.data]);
        setNewReview({ name: '', rating: 5, text: '' });
        addToast('Review added', 'success');
      })
      .catch(() => addToast('Failed to add review', 'error'));
  };

  if (!product) return <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>;

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <img src={product.image} className="img-fluid" alt={product.name} />
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase">{product.category}</span>
          <h1 className="fw-bold mb-3 display-5">{product.name}</h1>
          <div className="d-flex align-items-center mb-4 text-warning">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={i < Math.round(product.rating) ? 'fas fa-star' : 'far fa-star'}></i>
            ))}
            <span className="ms-2 text-muted small">({product.reviews} customer reviews)</span>
          </div>
          <h2 className="text-primary fw-bold mb-4 display-6">₹{product.price.toLocaleString('en-IN')}</h2>
          <p className="lead text-muted mb-5" style={{ lineHeight: '1.8' }}>{product.description}</p>
          <div className="d-flex gap-3 mb-5">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm" onClick={handleCartClick}>
              <i className="fas fa-shopping-cart me-2"></i>Add to Cart
            </button>
            <button className="btn btn-outline-danger btn-lg px-4 rounded-circle shadow-sm" onClick={() => { addToWishlist(product); addToast('Added to Wishlist!', 'success'); }}>
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className="bg-light p-4 rounded-4 border-0">
            <div className="row text-center g-3">
              <div className="col-4"><i className="fas fa-truck text-primary mb-2"></i><p className="small mb-0 fw-bold">Free Delivery</p></div>
              <div className="col-4"><i className="fas fa-undo text-primary mb-2"></i><p className="small mb-0 fw-bold">7 Days Return</p></div>
              <div className="col-4"><i className="fas fa-shield-alt text-primary mb-2"></i><p className="small mb-0 fw-bold">Secure Payment</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-5">
        <h4 className="fw-bold mb-3">Customer Reviews</h4>
        {reviews.length === 0 ? (
          <p className="text-muted">No reviews yet. Be the first to review!</p>
        ) : (
          <ul className="list-unstyled">
            {reviews.map(r => (
              <li key={r.id} className="mb-4 border-bottom pb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{r.name}</strong>
                  <small className="text-muted" title={new Date(r.date).toLocaleString()}>{new Date(r.date).toLocaleDateString()}</small>
                </div>
                <div className="text-warning mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < r.rating ? 'fas fa-star' : 'far fa-star'}></i>
                  ))}
                </div>
                <p className="mb-0">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
        <form onSubmit={submitReview} className="mt-4">
          <h5 className="mb-3">Add a Review</h5>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={newReview.name} onChange={handleReviewChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select className="form-select" name="rating" value={newReview.rating} onChange={handleReviewChange}>
              {[5,4,3,2,1].map(v => (
                <option key={v} value={v}>{v} Star{v > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea className="form-control" name="text" rows="3" value={newReview.text} onChange={handleReviewChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </section>
    </div>
  );
}

export default ProductDetails;

import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const { user, addToCart, addToWishlist, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  // Fetch product
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => navigate('/products'));
  }, [id]);

  const handleCartClick = () => {
    if (!user) {
      addToast('Please login first', 'error');
      navigate('/login');
      return;
    }
    addToCart(product);
    addToast('Added to Cart', 'success');
  };

    // Reviews Section
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });

  useEffect(() => {
    // Fetch reviews for this product from json-server
    axios.get(`http://localhost:3000/reviews?productId=${id}`)
      .then(res => setReviews(res.data))
      .catch(err => console.error('Failed to load reviews', err));
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: name === 'rating' ? Number(value) : value }));
  };

  const submitReview = (e) => {
    e.preventDefault();
    const reviewToSave = {
      ...newReview,
      productId: id,
      date: new Date().toISOString()
    };
    axios.post('http://localhost:3000/reviews', reviewToSave)
      .then(res => {
        setReviews(prev => [...prev, res.data]);
        setNewReview({ name: '', rating: 5, text: '' });
        addToast('Review added', 'success');
      })
      .catch(err => {
        console.error('Failed to submit review', err);
        addToast('Failed to add review', 'error');
      });
  };

  return (
    <div className="container py-5">
      {/* Existing product detail markup ... */}
      {/* ... */}
      {/* Reviews List */}
      <section className="mt-5">
        <h4 className="fw-bold mb-3">Customer Reviews</h4>
        {reviews.length === 0 ? (
          <p className="text-muted">No reviews yet. Be the first to review!</p>
        ) : (
          <ul className="list-unstyled">
            {reviews.map(r => (
              <li key={r.id} className="mb-4 border-bottom pb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{r.name}</strong>
                  <small className="text-muted" title={new Date(r.date).toLocaleString()}> {new Date(r.date).toLocaleDateString()}</small>
                </div>
                <div className="text-warning mb-1">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={i < r.rating ? 'fas fa-star' : 'far fa-star'}></i>
                  ))}
                </div>
                <p className="mb-0">{r.text}</p>
              </li>
            ))}
          </ul>
        )}
        {/* Add Review Form */}
        <form onSubmit={submitReview} className="mt-4">
          <h5 className="mb-3">Add a Review</h5>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={newReview.name} onChange={handleReviewChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Rating</label>
            <select className="form-select" name="rating" value={newReview.rating} onChange={handleReviewChange}>
              {[5,4,3,2,1].map(v => (<option key={v} value={v}>{v} Star{v>1 && 's'}</option>))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Review</label>
            <textarea className="form-control" name="text" rows="3" value={newReview.text} onChange={handleReviewChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </section>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <img src={product.image} className="img-fluid" alt={product.name} />
          </div>
        </div>
        <div className="col-md-6">
          <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill fw-bold text-uppercase">{product.category}</span>
          <h1 className="fw-bold mb-3 display-5">{product.name}</h1>
          <div className="d-flex align-items-center mb-4 text-warning">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="ms-2 text-muted small">({product.reviews} customer reviews)</span>
          </div>
          <h2 className="text-primary fw-bold mb-4 display-6">₹{product.price.toLocaleString('en-IN')}</h2>
          <p className="lead text-muted mb-5" style={{ lineHeight: '1.8' }}>{product.description}</p>
          
          <div className="d-flex gap-3 mb-5">
            <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm" onClick={handleCartClick}>
              <i className="fas fa-shopping-cart me-2"></i>Add to Cart
            </button>
            <button className="btn btn-outline-danger btn-lg px-4 rounded-circle shadow-sm" onClick={() => { addToWishlist(product); addToast('Added to Wishlist!', 'success'); }}>
              <i className="far fa-heart"></i>
            </button>
          </div>

          <div className="bg-light p-4 rounded-4 border-0">
            <div className="row text-center g-3">
              <div className="col-4">
                <i className="fas fa-truck text-primary mb-2"></i>
                <p className="small mb-0 fw-bold">Free Delivery</p>
              </div>
              <div className="col-4">
                <i className="fas fa-undo text-primary mb-2"></i>
                <p className="small mb-0 fw-bold">7 Days Return</p>
              </div>
              <div className="col-4">
                <i className="fas fa-shield-alt text-primary mb-2"></i>
                <p className="small mb-0 fw-bold">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
