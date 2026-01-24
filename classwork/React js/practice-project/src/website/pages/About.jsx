import Header from "../common/Header";
import Footer from "../common/Footer";

function About() {
    return (
        <div>
            <Header/>
            {/*--About Start-- &gt*/}
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


            {/* Team Start */}
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
            {/* Team End */}
            
{/* Instagram Start */}
<div className="container-fluid position-relative instagram p-0 mt-5">
  <a href className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle bg-white rounded-circle" style={{width: 100, height: 100, zIndex: 1}}>
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

<Footer/>

        </div>


    )
}

export default About;