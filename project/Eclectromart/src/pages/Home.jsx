import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import OfferBanner from '../components/OfferBanner';
import ProductCard from '../components/ProductCard';

function Home() {
  // State for product sections
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestDeals, setBestDeals] = useState([]);

  // Static data for categories and brands
  const categories = [
    { name: 'Headphones', icon: 'fa-headphones', color: '#6366f1' },
    { name: 'Keyboards', icon: 'fa-keyboard', color: '#10b981' },
    { name: 'Mouse', icon: 'fa-mouse-pointer', color: '#f59e0b' },
    { name: 'Smart Watches', icon: 'fa-clock', color: '#ec4899' },
    { name: 'Speakers', icon: 'fa-volume-up', color: '#8b5cf6' },
    { name: 'Laptop Accessories', icon: 'fa-plug', color: '#3b82f6' },
  ];

  const brands = [
    { name: 'Apple', logo: 'https://www.vectorlogo.zone/logos/apple/apple-tile.svg', icon: 'fa-apple', color: '#000000', desc: 'Premium Innovation' },
    { name: 'Samsung', logo: 'https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg', icon: 'fa-mobile-alt', color: '#0067B2', desc: 'Next-Gen Tech' },
    { name: 'Sony', logo: 'https://www.vectorlogo.zone/logos/sony/sony-ar21.svg', icon: 'fa-headphones-alt', color: '#000000', desc: 'Superior Audio' },
    { name: 'Logitech', logo: 'https://www.vectorlogo.zone/logos/logitech/logitech-ar21.svg', icon: 'fa-mouse', color: '#000000', desc: 'Performance Gear' },
  ];

  // Sample reviews
  const reviews = [
    { name: 'Alex Johnson', text: 'ElectroMart has the best gadgets! The shipping was incredibly fast and the quality is top-notch.', rating: 5 },
    { name: 'Sarah Williams', text: 'I bought a smartwatch and it works perfectly. Customer service was also very helpful.', rating: 5 },
    { name: 'Michael Brown', text: 'Great prices on premium accessories. I am highly satisfied with my purchase and will return.', rating: 4 },
  ];

  // Fetch products once on mount
  useEffect(() => {
    axios
      .get('http://localhost:3000/products')
      .then((res) => {
        const shuffled = [...res.data].sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.filter((p) => p.featured).slice(0, 4));
        setTrendingProducts(shuffled.filter((p) => p.trending).slice(0, 4));
        setNewArrivals(shuffled.slice(0, 4));
        setBestDeals([...shuffled].sort((a, b) => a.price - b.price).slice(0, 4));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section
        className="hero-section py-5 mb-4 shadow-sm"
        style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', borderRadius: '0 0 40px 40px' }}
      >
        <div className="container text-center text-lg-start">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <span className="badge bg-primary text-white mb-3 px-3 py-2 rounded-pill fw-bold shadow-sm">
                NEW COLLECTION
              </span>
              <h1 className="display-4 fw-bold mb-3" style={{ color: '#0f172a', letterSpacing: '-1px' }}>
                Discover Next-Gen Technology
              </h1>
              <p className="lead text-secondary mb-4" style={{ maxWidth: '500px' }}>
                Explore the finest electronics at unbeatable prices. Elevate your tech lifestyle with our premium curated gadgets.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Link to="/products" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow">
                  Shop Collection
                </Link>
                <Link
                  to="/products?category=Smart%20Watches"
                  className="btn btn-outline-primary bg-white px-4 py-2 rounded-pill fw-bold shadow-sm"
                >
                  View Wearables
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"
                alt="Tech Gadgets"
                className="img-fluid rounded-4 shadow-lg hero-img"
                style={{ transform: 'rotate(-2deg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <OfferBanner />

      {/* Top Brands Section */}
      <section className="py-4">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold mb-1">Featured Brands</h3>
            <p className="text-muted small">Partnering with the best in the industry</p>
          </div>
          <div className="row g-3 justify-content-center">
            {brands.map((brand, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <Link to={`/products?brand=${brand.name}`} className="text-decoration-none">
                  <div
                    className="card h-100 border-0 shadow-sm text-center p-3 rounded-4 bg-white brand-card"
                    style={{ transition: 'all 0.3s' }}
                  >
                    <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: '50px' }}>
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <i className={`fab ${brand.icon} fa-2x`} style={{ color: brand.color, display: 'none' }} />
                    </div>
                    <h6 className="fw-bold text-dark mb-1">{brand.name}</h6>
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>{brand.desc}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 bg-white mt-4 shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">Browse Categories</h3>
            <Link to="/products" className="btn btn-sm btn-link text-decoration-none fw-bold">
              View All <i className="fas fa-arrow-right ms-1" />
            </Link>
          </div>
          <div className="row g-3">
            {categories.map((cat, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-6">
                <Link to={`/products?category=${cat.name}`} className="text-decoration-none">
                  <div
                    className="card border shadow-sm p-3 h-100 rounded-4 text-center bg-light"
                    style={{ transition: 'transform 0.2s', borderColor: '#e2e8f0' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <i className={`fas ${cat.icon} fa-2x mb-2`} style={{ color: cat.color }} />
                    <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.85rem' }}>
                      {cat.name}
                    </h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className="py-4 mt-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0 text-danger">
              <i className="fas fa-fire me-2" />Best Deals
            </h3>
            <Link to="/products" className="btn btn-sm btn-outline-danger rounded-pill fw-bold px-3">
              See More
            </Link>
          </div>
          <div className="row g-4">
            {bestDeals.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6">
                <ProductCard product={{ ...product, badge: 'SALE' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-4 bg-white mt-4 shadow-sm">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">New Arrivals</h3>
          </div>
          <div className="row g-4">
            {newArrivals.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6">
                <ProductCard product={{ ...product, badge: 'NEW' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-4 mt-2 mb-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">Trending Now</h3>
          </div>
          <div className="row g-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-6">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <div className="container px-3">
        <section className="py-5 bg-primary text-white my-5 rounded-4 shadow-sm">
          <div className="container px-4">
            <div className="text-center mb-5">
              <h3 className="fw-bold">What Our Customers Say</h3>
              <p className="opacity-75">Trusted by thousands of tech enthusiasts worldwide.</p>
            </div>
            <div className="row g-4">
              {reviews.map((review, i) => (
                <div key={i} className="col-lg-4">
                  <div
                    className="card h-100 border-0 shadow bg-white text-dark p-4 rounded-4"
                    style={{ transition: 'transform 0.3s' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    <div className="d-flex mb-3">
                      {[...Array(review.rating)].map((_, index) => (
                        <i key={index} className="fas fa-star text-warning me-1" />
                      ))}
                    </div>
                    <p className="mb-4 fst-italic text-muted">{review.text}</p>
                    <div className="d-flex align-items-center mt-auto">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                        style={{ width: '40px', height: '40px' }}
                      >
                        {review.name.charAt(0)}
                      </div>
                      <h6 className="fw-bold mb-0">{review.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
