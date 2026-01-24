import Header from "../common/Header";
import Footer from "../common/Footer";

function Menu() {
    return (
        <div>
            <Header />
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
  <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: 700, margin: 'auto'}}>
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

<Footer />
        </div>

    )
}

export default Menu;