import Header from "../common/Header";
import Footer from "../common/Footer";

function Home() {
    return (
        <div>
            <Header/>
            {/*--Hero Start-- &gt*/}
            <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
                <div className="row g-5 py-5">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-1 text-secondary text-center mb-0">John Doe</h1>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                        <img className="img-fluid rounded mb-3" src="img/hero-2.jpg" />
                        <p>
                            <i className="bi bi-arrow-down animate-up-down" style={{ fontSize: '3rem' }} />
                        </p>
                        <p className="mb-0">
                            Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos
                            sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                            justo et tempor consetetur takimata eirmod.
                        </p>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded" src="img/hero-1.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                        <p>
                            Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos
                            sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                            justo et tempor consetetur takimata eirmod.
                        </p>
                        <p>
                            <i className="bi bi-arrow-up animate-up-down" style={{ fontSize: '3rem' }} />
                        </p>
                        <img className="img-fluid rounded" src="img/hero-3.jpg" />
                    </div>
                </div>
            </div>
            {/*Hero End-- >*/}

            {/*--About Start--*/}
            <div className="container-fluid p-5">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <div className="position-absolute top-0 start-0 animate-rotate" style={{ width: 160, height: 160 }}>
                                <img className="img-fluid" src="img/about-round.jpg" alt />
                            </div>
                            <img className="position-absolute w-100 h-100 rounded-circle rounded-bottom rounded-end" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4 wow fadeIn" data-wow-delay="0.2s">
                            <h5 className="section-title">About Us</h5>
                            <h1 className="display-3 mb-0">Cooking Together With The Expert</h1>
                        </div>
                        <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit
                            lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est
                            ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
                        <div className="row">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div className="bg-light rounded p-4">
                                    <img className="img-fluid bg-primary rounded-circle mb-3" src="img/feature-1.png" style={{ width: 80, height: 80 }} />
                                    <h4>Master Chefs</h4>
                                    <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam
                                        ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing
                                        labore.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-light rounded p-4">
                                    <img className="img-fluid bg-primary rounded-circle mb-3" src="img/feature-3.png" style={{ width: 80, height: 80 }} />
                                    <h4>Quality Food</h4>
                                    <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam
                                        ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing
                                        labore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*About End-- >*/}

            {/* Facts Start */}
            <div className="container-fluid bg-dark facts p-5 my-5">
                <div className="row gx-5 gy-4 py-5">
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#111111' }}>
                                <i className="fa fa-star fs-4 text-primary" />
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Years</h5>
                                <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.2s">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#111111' }}>
                                <i className="fa fa-users fs-4 text-primary" />
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Clients</h5>
                                <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#111111' }}>
                                <i className="fa fa-check fs-4 text-primary" />
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Awards</h5>
                                <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.4s">
                        <div className="d-flex">
                            <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, background: '#111111' }}>
                                <i className="fa fa-mug-hot fs-4 text-primary" />
                            </div>
                            <div className="ps-4">
                                <h5 className="text-white">Events</h5>
                                <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}


            {/*!--Feature Start-- &gt*/}
            <div className="container-fluid feature position-relative p-5 pb-0 mt-5">
                <div className="row g-5 gb-5">
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="feature-item rounded text-center p-5">
                            <img className="img-fluid bg-white rounded-circle" src="img/feature-1.png" style={{ width: 150, height: 150 }} />
                            <h3 className="my-4">Best Chef</h3>
                            <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
                                elitr duo vero amet amet stet</p>
                            <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="feature-item rounded text-center p-5">
                            <img className="img-fluid bg-white rounded-circle" src="img/feature-2.png" style={{ width: 150, height: 150 }} />
                            <h3 className="my-4">Menu Variations</h3>
                            <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
                                elitr duo vero amet amet stet</p>
                            <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="feature-item rounded text-center p-5">
                            <img className="img-fluid bg-white rounded-circle" src="img/feature-3.png" style={{ width: 150, height: 150 }} />
                            <h3 className="my-4">Healthy Food</h3>
                            <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
                                elitr duo vero amet amet stet</p>
                            <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-4 text-secondary mb-4"><span className="text-primary">30% Discount</span><br /> For This Summer</h1>
                        <a href className="btn btn-primary py-3 px-5">Order Now</a>
                    </div>
                </div>
            </div>
            {/*Feature End-- >*/}


            {/* Menu Start */}
            <div className="container-fluid menu py-5 px-0">
                <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 700, margin: 'auto' }}>
                    <h5 className="section-title">Our Menu</h5>
                    <h1 className="display-3 mb-0">Hands Craft More Than Meals</h1>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5 wow fadeIn" data-wow-delay="0.2s">
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white active" data-bs-toggle="pill" href="#tab-1">Breakfast</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-2">Launch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-3">Dinner</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-0">
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-1.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-2.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-3.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-4.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-5.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.6s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-6.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-7.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.8s">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-8.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade p-0">
                            <div className="row g-0">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-2.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-3.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-4.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-5.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-6.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-7.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-8.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-1.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade p-0">
                            <div className="row g-0">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-3.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-4.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-5.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-6.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-7.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-8.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-1.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/menu-2.jpg" alt />
                                        <div className="position-absolute bottom-0 end-0 mb-4 me-4 py-1 px-3 bg-dark rounded-pill text-primary">
                                            BBQ Chicken</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu End */}

            {/*!--Team Start-- &gt*/}
            <div className="container-fluid p-5">
                <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 700, margin: 'auto' }}>
                    <h5 className="section-title">Expert Chefs</h5>
                    <h1 className="display-3 mb-0">Let's Meet The Expert</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="team-item position-relative">
                            <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
                                <h5 className="text-light">John Deo</h5>
                                <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Master Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="team-item position-relative">
                            <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
                                <h5 className="text-light">John Deo</h5>
                                <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="team-item position-relative">
                            <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                                <div className="team-overlay">
                                    <div className="d-flex align-items-center justify-content-start">
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
                                <h5 className="text-light">John Deo</h5>
                                <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Assistant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Team End-- >*/}

            {/* Testimonial Start */}
            <div className="container-fluid p-0 my-5">
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
                                    <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt />
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

            <div>
  {/* Blog Start */}
  <div className="container-fluid p-5">
    <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: 700, margin: 'auto'}}>
      <h5 className="section-title">Our Blog</h5>
      <h1 className="display-3 mb-0">Latest Articles From Food Blog</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/menu-3.jpg" alt />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-primary text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 lh-base text-light" href>Sed amet tempor amet sit kasd sea lorem</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/menu-5.jpg" alt />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-primary text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 lh-base text-light" href>Sed amet tempor amet sit kasd sea lorem</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/menu-7.jpg" alt />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-primary text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 lh-base text-light" href>Sed amet tempor amet sit kasd sea lorem</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*!--Blog End-- &gt*/}
</div>


        {/* Instagram Start */ }
        < div className = "container-fluid position-relative instagram p-0 mt-5" >
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
            </div >
        {/* Instagram End */ }

        <Footer/>
        </div >


    )
}

export default Home;