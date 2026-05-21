import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: 'fa-users' },
    { number: '50+', label: 'Top Brands', icon: 'fa-tags' },
    { number: '24/7', label: 'Support Available', icon: 'fa-headset' },
    { number: '99%', label: 'Positive Feedback', icon: 'fa-star' }
  ];

  const brands = [
    { name: 'Apple', logo: 'https://www.vectorlogo.zone/logos/apple/apple-tile.svg' },
    { name: 'Samsung', logo: 'https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg' },
    { name: 'Sony', logo: 'https://www.vectorlogo.zone/logos/sony/sony-ar21.svg' },
    { name: 'Logitech', logo: 'https://www.vectorlogo.zone/logos/logitech/logitech-ar21.svg' },
    { name: 'Bose', logo: 'https://www.vectorlogo.zone/logos/bose/bose-ar21.svg' }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="hero-section py-5 shadow-sm" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', color: 'white', borderRadius: '0 0 40px 40px' }}>
        <div className="container py-4 text-center">
          <span className="badge bg-white text-primary mb-3 px-3 py-2 rounded-pill fw-bold shadow-sm">OUR STORY</span>
          <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>About ElectroMart</h1>
          <p className="lead opacity-75 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Empowering your digital life with premium gadgets, exceptional service, and unbeatable prices.
          </p>
        </div>
      </section>

      {/* Company Description & Mission */}
      <section className="py-5 bg-white shadow-sm mt-4">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h6 className="text-primary fw-bold mb-2">WHO WE ARE</h6>
              <h2 className="fw-bold mb-4">Your Ultimate Destination for Tech Innovation</h2>
              <p className="text-muted mb-4">
                Founded with a passion for technology, ElectroMart has grown to become a leading e-commerce platform for tech enthusiasts. We bridge the gap between cutting-edge innovation and everyday consumers, offering a curated selection of smartwatches, earbuds, accessories, and computing essentials.
              </p>
              <h6 className="text-primary fw-bold mb-2 mt-4">OUR MISSION</h6>
              <p className="text-muted mb-0">
                To provide seamless access to the world's most reliable tech brands, ensuring that every customer experiences top-tier performance, secure shopping, and fast delivery—every single time.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" alt="Team Working" className="img-fluid rounded-4 shadow-lg" />
                <div className="position-absolute bottom-0 start-0 translate-middle-x mb-5 ms-4 bg-white p-3 rounded-4 shadow-lg d-none d-md-block">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-trophy fa-lg"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">Award Winning</h5>
                      <span className="text-muted small">Tech Retailer 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, i) => (
              <div key={i} className="col-lg-3 col-6">
                <div className="card h-100 border-0 shadow-sm text-center p-4 rounded-4 bg-white" style={{ transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                  <i className={`fas ${stat.icon} fa-2x text-primary mb-3`}></i>
                  <h3 className="fw-bold text-dark mb-1">{stat.number}</h3>
                  <p className="text-muted small mb-0 fw-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white mt-2 shadow-sm">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose ElectroMart?</h2>
            <p className="text-muted">We go above and beyond to ensure the best shopping experience.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="text-center px-3 mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shipping-fast fa-2x text-primary"></i>
                </div>
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="text-muted small">We partner with top logistics networks to bring your orders directly to your doorstep in record time.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="text-center px-3 mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-award fa-2x text-primary"></i>
                </div>
                <h5 className="fw-bold">Premium Quality Products</h5>
                <p className="text-muted small">Every item is sourced directly from manufacturers, guaranteeing authenticity and warranty coverage.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="text-center px-3 mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-microchip fa-2x text-primary"></i>
                </div>
                <h5 className="fw-bold">Latest Tech Collection</h5>
                <p className="text-muted small">Explore our handpicked selection of top-tier smartwatches, premium earbuds, and computing gear.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="text-center px-3 mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-tags fa-2x text-primary"></i>
                </div>
                <h5 className="fw-bold">Affordable Prices</h5>
                <p className="text-muted small">Get high-performance, premium tech gadgets at extremely competitive and budget-friendly rates.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="text-center px-3 mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shopping-cart fa-2x text-primary"></i>
                </div>
                <h5 className="fw-bold">Easy Shopping Experience</h5>
                <p className="text-muted small">Enjoy a seamless checkout process, effortless navigation, and intuitive tools at every step.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="text-center px-3 mb-4">
                <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-users fa-2x text-primary"></i>
                </div>
                <h5 className="fw-bold">Trusted by Tech Lovers</h5>
                <p className="text-muted small">Join a community of tech lovers who rely on us for exceptional gadgets and quality support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-5 bg-white mt-2 shadow-sm">
        <div className="container text-center">
          <h5 className="fw-bold text-muted mb-4">TRUSTED BY GLOBAL BRANDS</h5>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 opacity-75">
            {brands.map((brand, i) => (
              <img key={i} src={brand.logo} alt={brand.name} style={{ height: '40px', filter: 'grayscale(100%)', transition: 'all 0.3s' }} onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'} onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'} />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-5 mt-2">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Customers Say</h2>
            <p className="text-muted">Thousands of happy customers trust ElectroMart.</p>
          </div>
          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-4">
                <div className="d-flex text-warning mb-3">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="fst-italic text-muted mb-4">"The customer service team helped me pick the perfect smartwatch. Delivery was super fast too!"</p>
                <div className="d-flex align-items-center mt-auto">
                  <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fw-bold me-3" style={{ width: '40px', height: '40px' }}>S</div>
                  <h6 className="fw-bold mb-0">Sarah Jenkins</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-4">
                <div className="d-flex text-warning mb-3">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="fst-italic text-muted mb-4">"Absolutely love the new earbuds I got from ElectroMart. The quality is unmatched and prices are great."</p>
                <div className="d-flex align-items-center mt-auto">
                  <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fw-bold me-3" style={{ width: '40px', height: '40px' }}>M</div>
                  <h6 className="fw-bold mb-0">Michael Chen</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 bg-white rounded-4">
                <div className="d-flex text-warning mb-3">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                </div>
                <p className="fst-italic text-muted mb-4">"A trustworthy site for electronics. Secure checkout and genuine products. Highly recommended."</p>
                <div className="d-flex align-items-center mt-auto">
                  <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fw-bold me-3" style={{ width: '40px', height: '40px' }}>D</div>
                  <h6 className="fw-bold mb-0">David Ramirez</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="container px-3">
        <section className="py-5 bg-primary text-white text-center my-5 rounded-4 shadow-sm">
          <div className="container py-4">
            <h2 className="fw-bold mb-3">Ready to Upgrade Your Setup?</h2>
            <p className="lead opacity-75 mb-4 mx-auto" style={{ maxWidth: '600px' }}>Join thousands of satisfied customers and discover the perfect tech gear for your lifestyle.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/products" className="btn btn-light rounded-pill px-5 py-3 fw-bold text-primary shadow-sm">Shop Products</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
