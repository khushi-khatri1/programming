import Header from "../common/Header";
import Footer from "../common/Footer";

function Error() {
    return (
        <>
            <Header />
            {/* 404 Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary" />
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">Page Not Found</h1>
                            <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="index.html">Go Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 404 End */}

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

export default Error;