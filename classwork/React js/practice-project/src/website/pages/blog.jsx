import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";

function Postlist() {
    const [blog, setblog] = useState([]);

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blog")
        console.log(res.data)
        setblog(res.data)
    }

    return (
        <>
            <Header />
            <div className="container-fluid p-5">
                <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 700, margin: 'auto' }}>
                    <h5 className="section-title">Our Blog</h5>
                    <h1 className="display-3 mb-0">Latest Articles From Food Blog</h1>
                </div>
                <div className="row g-5">
                    {
                        blog && blog.map((data) => {
                            console.log(data)
                            return (
                                <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="blog-item">
                                        <div className="position-relative overflow-hidden rounded-top">
                                            <img className="img-fluid" src={data.img} alt="blog" />
                                        </div>
                                        <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                                            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                                                <span>{data.date}</span>
                                                <h6 className="text-primary text-uppercase mb-0">January</h6>
                                                <span>{data.year}</span>
                                            </div>
                                            <a className="h5 lh-base text-light" href="#">{data.desc}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

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


                    <Footer/>
        </>
    )
}

export default Postlist;