import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


function Home() {
    return (
        <>
            <Header />

            <div>

                {/* 🔥 HERO SECTION WITH VIDEO */}
                <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    >
                        <source src="/video.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.5)"
                    }}></div>

                    {/* Text */}
                    <div className="d-flex flex-column justify-content-center align-items-center text-center"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            color: "white"
                        }}>
                        <h1 className="fw-bold">Bliss Beauty Parlour</h1>
                        <h4 className="mt-3">Enhancing your natural beauty with elegance & care</h4>
                        <p className="mt-2">✨ Feel the Glow ✨</p>
                    </div>

                </div>

                {/* 🔥 REVIEWS HEADING */}
                <h2 className="text-center mt-5 mb-4 fw-bold" style={{ color: "#0d6efd" }}>
                    Our Reviews
                </h2>

                {/* 🔥 REVIEWS SECTION */}
                <div className="container" style={{ marginBottom: "5rem" }}>
                    <div className="row g-4">

                        {/* CARD 1 */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 h-100 ">
                                <div className="card-body">
                                    <h5 className="fw-bold">Vishakha Rajput</h5>
                                    <p>Absolutely loved my haircut, perfectly styled. Staff understood exactly what I wanted.</p>
                                    ⭐⭐⭐⭐☆
                                </div>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body">
                                    <h5 className="fw-bold">Yashasvi Patel</h5>
                                    <p>My skin feels so fresh and glowing. Very relaxing and professional facial service.</p>
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body">
                                    <h5 className="fw-bold">Aastha Desai</h5>
                                    <p>Makeup was flawless and long-lasting. I felt confident and beautiful all day.</p>
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body">
                                    <h5 className="fw-bold">Rishika Bhatt</h5>
                                    <p>Quick, clean, and almost painless. Perfect shape and neat work.</p>
                                    ⭐⭐⭐☆☆
                                </div>
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body">
                                    <h5 className="fw-bold">Princy Nagar</h5>
                                    <p>Smooth finish with no irritation. Hygienic and comfortable experience.</p>
                                    ⭐⭐⭐⭐☆
                                </div>
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 h-100">
                                <div className="card-body">
                                    <h5 className="fw-bold">Khatri Khushi</h5>
                                    <p>My nails look so clean and pretty. Loved the detailing and care.</p>
                                    ⭐⭐⭐⭐⭐
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container my-5">
                    <h2 className="text-center fw-bold mb-4" style={{ color: "#0d6efd" }}>
                        Our Services
                    </h2>

                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="card shadow border-0 text-center h-100">

                                <img
                                    src="/public/hair.jpg"
                                    className="card-img-top"
                                    style={{ height: "180px", objectFit: "cover" }}
                                    alt="Hair Styling"
                                />

                                <div className="card-body">
                                    <h5>💇 Hair Styling</h5>
                                    <p>Modern cuts & styling</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow border-0 text-center h-100">

                                <img
                                    src="/public/facial.jpg"
                                    className="card-img-top"
                                    style={{ height: "180px", objectFit: "cover" }}
                                    alt="Facial"
                                />

                                <div className="card-body">
                                    <h5>💆 Facial</h5>
                                    <p>Glow & skin care treatment</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow border-0 text-center h-100">

                                <img
                                    src="/public/makeup.jpg"
                                    className="card-img-top"
                                    style={{ height: "180px", objectFit: "cover" }}
                                    alt="Makeup"
                                />

                                <div className="card-body">
                                    <h5>💄 Makeup</h5>
                                    <p>Bridal & party makeup</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card shadow border-0 text-center h-100">

                                <img
                                    src="/public/nail.jpg"
                                    className="card-img-top"
                                    style={{ height: "180px", objectFit: "cover" }}
                                    alt="Nail Art"
                                />

                                <div className="card-body">
                                    <h5>💅 Nail Art</h5>
                                    <p>Creative nail designs</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




            <Footer />
        </>
    )
}

export default Home;