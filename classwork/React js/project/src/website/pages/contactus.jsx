import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Contactus() {
    return (
        <>
            <Header/>
            <div className="container my-5">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: "#0d6efd" }}>
                        Contact Us
                    </h2>
                    <p className="text-muted">We’d love to hear from you 💄✨</p>
                </div>

                <div className="row">

                    {/* LEFT SIDE - FORM */}
                    <div className="col-md-7">
                        <div className="card shadow p-4 border-0">

                            <h4 className="mb-3">Send a Message</h4>

                            <form>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>

                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>

                                <div className="mb-3">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="Enter your phone number" />
                                </div>

                                <div className="mb-3">
                                    <label>Message</label>
                                    <textarea rows="4" className="form-control" placeholder="Write your message"></textarea>
                                </div>

                                <button className="btn btn-primary w-100">
                                    Send Message
                                </button>
                            </form>

                        </div>
                    </div>

                    {/* RIGHT SIDE - CONTACT INFO */}
                    <div className="col-md-5">
                        <div className="card shadow p-4 border-0 h-100" style={{ background: "#0f172a", color: "white" }}>

                            <h4 className="mb-4">Get in Touch</h4>

                            <p>📍 Ahmedabad, Gujarat</p>
                            <p>📞 +91 98765 43210</p>
                            <p>📧 blissbeauty@gmail.com</p>

                            <hr />

                            <h5>Opening Hours</h5>
                            <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                            <p>Sunday: Closed</p>

                            <hr />

                            <h5>Follow Us</h5>
                            <div>
                                <a href="#" className="text-white me-3">Instagram</a>
                                <a href="#" className="text-white me-3">Facebook</a>
                                <a href="#" className="text-white">WhatsApp</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Contactus;