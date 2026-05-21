import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">ElectroMart</h5>
            <p className="text-light opacity-75">
              Your trusted partner for the latest electronic gadgets and premium tech accessories in India. Experience innovation like never before.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Quick Links</h5>
            <p><Link to="/" className="text-light text-decoration-none opacity-75">Home</Link></p>
            <p><Link to="/products" className="text-light text-decoration-none opacity-75">Products</Link></p>
            <p><Link to="/cart" className="text-light text-decoration-none opacity-75">My Cart</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contact Us</h5>
            <p className="text-light opacity-75"><i className="fas fa-home me-3"></i> Mumbai, Maharashtra, India</p>
            <p className="text-light opacity-75"><i className="fas fa-envelope me-3"></i> info@electromart.com</p>
            <p className="text-light opacity-75"><i className="fas fa-phone me-3"></i> +91 98765 43210</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="btn btn-outline-light btn-floating m-1 rounded-circle"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="btn btn-outline-light btn-floating m-1 rounded-circle"><i className="fab fa-twitter"></i></a>
              <a href="#" className="btn btn-outline-light btn-floating m-1 rounded-circle"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>

        <hr className="mb-4 bg-white" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-light opacity-75"> © {new Date().getFullYear()} Copyright:
              <strong className="text-primary"> ElectroMart India</strong>
            </p>
          </div>
          <div className="col-md-5 col-lg-4 text-center text-md-end">
            <p className="text-light opacity-75">Made with <i className="fas fa-heart text-danger"></i> for Tech Lovers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
