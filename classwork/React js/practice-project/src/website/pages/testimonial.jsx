import Header from "../common/Header";
import Footer from "../common/Footer";

function Testimonial() {
    return (
        <>
            <Header />

            {/* Testimonial Start */}
            <div className="container-fluid p-0 py-5">
                <div className="row g-0">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 500 }}>
                        <div className="h-100 position-relative overflow-hidden" style={{ borderTopLeftRadius: '50%' }}>
                            <img className="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-6 bg-dark p-5 overflow-hidden wow fadeIn" data-wow-delay="0.3s" style={{ borderBottomRightRadius: '50%' }}>
                        <div className="mb-5">
                            <h5 className="section-title">Testimonial</h5>
                            <h1 className="display-3 text-secondary mb-0">Our Client Say</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item">
                                <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />Dolores sed duo clita tempor justo dolor
                                    et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                                    et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt />
                                    <div className="ps-4">
                                        <h5 className="text-secondary">Client Name</h5>
                                        <span className="small text-uppercase text-secondary" style={{ letterSpacing: 3 }}>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3" />Dolores sed duo clita tempor justo dolor
                                    et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                                    et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="img" />
                                    <div className="ps-4">
                                        <h5 className="text-secondary">Client Name</h5>
                                        <span className="small text-uppercase text-secondary" style={{ letterSpacing: 3 }}>Profession</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}

            {/* Instagram Start */}
            <div className="container-fluid position-relative instagram p-0 mt-5">
                <a href className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle bg-white rounded-circle" style={{ width: 100, height: 100, zIndex: 1 }}>
                    <i className="fab fa-instagram fa-2x text-secondary" />
                </a>
                <div className="row g-0">
                    <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid" src="img/menu-2.jpg" alt />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.2s">
                        <img className="img-fluid" src="img/menu-3.jpg" alt />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                        <img className="img-fluid" src="img/menu-4.jpg" alt />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                        <img className="img-fluid" src="img/menu-5.jpg" alt />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                        <img className="img-fluid" src="img/menu-6.jpg" alt />
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 wow fadeIn" data-wow-delay="0.6s">
                        <img className="img-fluid" src="img/menu-7.jpg" alt />
                    </div>
                </div>
            </div>
            {/* Instagram End */}

            <Footer />
        </>
    )
}

export default Testimonial;