import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

function Aboutus() {
    return (
        <>
            <Header />
            <div className="container py-5">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">About Bliss Beauty Parlour</h1>
                    <p className="text-muted">
                        Where beauty meets care, elegance, and perfection
                    </p>
                </div>

                {/* About Section */}
                <div className="row align-items-center mb-5">

                    {/* Image */}
                    <div className="col-md-6">
                        <img
                            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                            alt="beauty"
                            className="img-fluid rounded"
                        />
                    </div>

                    {/* Content */}
                    <div className="col-md-6">
                        <h3 className="fw-bold mb-3">Who We Are</h3>
                        <p>
                            At Bliss Beauty Parlour, we believe that every woman deserves to feel confident,
                            beautiful, and cared for. Our expert team is dedicated to enhancing your natural
                            beauty with personalized services and professional techniques.
                        </p>

                        <p>
                            From hair styling to skincare and makeup, we provide a relaxing and hygienic
                            environment where you can truly unwind and enjoy a premium beauty experience.
                        </p>
                    </div>
                </div>

                {/* Services Highlight */}
                <div className="row text-center mb-5">
                    <h3 className="fw-bold mb-4">Our Specialties</h3>

                    <div className="col-md-4">
                        <h5>💇‍♀️ Hair Styling</h5>
                        <p>Trendy cuts and styling tailored to your personality.</p>
                    </div>

                    <div className="col-md-4">
                        <h5>🧖‍♀️ Skincare</h5>
                        <p>Glow-enhancing facials and skin treatments.</p>
                    </div>

                    <div className="col-md-4">
                        <h5>💄 Makeup</h5>
                        <p>Flawless looks for every occasion.</p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-light p-4 rounded mb-5">
                    <h3 className="fw-bold text-center mb-3">Why Choose Us</h3>

                    <ul className="list-unstyled text-center">
                        <li>✔ Experienced & Professional Staff</li>
                        <li>✔ Hygienic & Safe Environment</li>
                        <li>✔ Premium Quality Products</li>
                        <li>✔ Personalized Beauty Solutions</li>
                    </ul>
                </div>

                {/* Call To Action */}
                <div className="text-center">
                    <h4 className="fw-bold">✨ Feel the Glow with Bliss ✨</h4>
                    <p>Book your appointment today and experience true beauty care.</p>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Aboutus;