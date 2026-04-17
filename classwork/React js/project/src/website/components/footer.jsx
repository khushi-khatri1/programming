import React from 'react'

function Footer() {
    return (
        <div>
            <div className="bg-dark text-white pt-5 pb-3">
                <div className="container">
                    <div className="row">

                        {/* Brand */}
                        <div className="col-md-3">
                            <h4 className="fw-bold">Bliss Beauty Parlour</h4>
                            <p>
                                Enhancing your natural beauty with care, elegance, and perfection.
                                Feel confident. Feel beautiful. Feel Bliss.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Services</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-md-3">
                            <h5>Our Services</h5>
                            <ul className="list-unstyled">
                                <li>Hair Styling</li>
                                <li>Facial & Skincare</li>
                                <li>Makeup</li>
                                <li>Waxing</li>
                                <li>Threading</li>
                                <li>Manicure & Pedicure</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-md-3">
                            <h5>Contact</h5>
                            <p>📍 Ahmedabad, Gujarat</p>
                            <p>📞 +91 98765 43210</p>
                            <p>📧 blissbeauty@gmail.com</p>

                            {/* Social */}
                            <div>
                                <a href="#" className="text-white me-3">Instagram</a>
                                <a href="#" className="text-white me-3">Facebook</a>
                                <a href="#" className="text-white">WhatsApp</a>
                            </div>
                        </div>

                    </div>

                    <hr className="border-light" />

                    {/* Bottom */}
                    <div className="text-center">
                        <p className="mb-0">
                            © 2026 Bliss Beauty Parlour. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer