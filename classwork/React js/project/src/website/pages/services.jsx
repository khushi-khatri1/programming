import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function Services() {
    return (
        <>
        <Header/>
            <div className="container my-5">

                <h2 className="text-center mb-5 fw-bold" style={{ color: "#0d6efd" }}>
                    Our Services & Pricing
                </h2>

                <div className="row">

                    {/* LEFT SIDE SERVICES */}
                    <div className="col-md-8">

                        {/* Facial */}
                        <h4 className="fw-bold mb-3">Facial Treatments</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Gold Facial</span><span>₹1200</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Fruit Facial</span><span>₹800</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Hydra Facial</span><span>₹1800</span>
                            </li>
                        </ul>

                        {/* Hair */}
                        <h4 className="fw-bold mt-4 mb-3">Hair Services</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Hair Cut</span><span>₹300</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Hair Spa</span><span>₹1000</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Hair Styling</span><span>₹700</span>
                            </li>
                        </ul>

                        {/* Manicure / Pedicure */}
                        <h4 className="fw-bold mt-4 mb-3">Manicure & Pedicure</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Manicure</span><span>₹500</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Pedicure</span><span>₹700</span>
                            </li>
                        </ul>

                        {/* Threading */}
                        <h4 className="fw-bold mt-4 mb-3">Threading</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Eyebrows</span><span>₹50</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Upper Lip</span><span>₹30</span>
                            </li>
                        </ul>

                        {/* Waxing */}
                        <h4 className="fw-bold mt-4 mb-3">Waxing</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Full Arms</span><span>₹400</span>
                            </li>
                            <li className="d-flex justify-content-between border-bottom py-2">
                                <span>Full Legs</span><span>₹600</span>
                            </li>
                        </ul>

                    </div>

                    

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default Services;