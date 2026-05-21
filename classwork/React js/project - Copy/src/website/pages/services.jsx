import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Services() {
    return (
        <>
            <Header />
            <div className="container my-5">

                <h2 className="text-center mb-5 fw-bold" style={{ color: "#0d6efd" }}>
                    Our Services & Pricing
                </h2>

                <div className="row">

                    {/* LEFT COLUMN */}
                    <div className="col-md-6 border-end pe-4">

                        {/* Facial */}
                        <h4 className="fw-bold mb-3">Facial Treatments</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Gold Facial</span><span>₹1200</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Fruit Facial</span><span>₹800</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Hydra Facial</span><span>₹1800</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Diamond Facial</span><span>₹1500</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Cleanup</span><span>₹600</span></li>
                        </ul>

                        {/* Hair */}
                        <h4 className="fw-bold mt-4 mb-3">Hair Services</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Basic Hair Cut</span><span>₹300</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Layer Cut</span><span>₹500</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Step Cut</span><span>₹600</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Hair Spa</span><span>₹1000</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Hair Smoothening</span><span>₹3000</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Hair Coloring</span><span>₹1500</span></li>
                        </ul>

                        {/* Threading */}
                        <h4 className="fw-bold mt-4 mb-3">Threading</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Eyebrows</span><span>₹50</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Upper Lip</span><span>₹30</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Forehead</span><span>₹40</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Full Face</span><span>₹150</span></li>
                        </ul>

                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="col-md-6 col-md-6 ps-4">

                        {/* Waxing */}
                        <h4 className="fw-bold mb-3">Waxing</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Full Arms (Normal)</span><span>₹400</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Full Arms (Rica)</span><span>₹700</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Full Legs (Normal)</span><span>₹600</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Full Legs (Rica)</span><span>₹900</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Underarms</span><span>₹200</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Full Body Wax</span><span>₹2500</span></li>
                        </ul>

                        {/* Manicure / Pedicure */}
                        <h4 className="fw-bold mt-4 mb-3">Manicure & Pedicure</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Basic Manicure</span><span>₹500</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Spa Manicure</span><span>₹800</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Basic Pedicure</span><span>₹700</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Spa Pedicure</span><span>₹1000</span></li>
                        </ul>

                        {/* Bridal / Special */}
                        <h4 className="fw-bold mt-4 mb-3">Bridal & Special</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Bridal Makeup</span><span>₹8000</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Party Makeup</span><span>₹2500</span></li>
                            <li className="d-flex justify-content-between border-bottom py-2"><span>Saree Draping</span><span>₹700</span></li>
                        </ul>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Services;