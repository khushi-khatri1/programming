import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Bookingmodel from '../pages/Bookingmodel';

function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("u_id");
        localStorage.removeItem("u_name");

        alert("Logout Successfully");
        navigate("/login");
    };

    const handleBookNow = () => {
    const user = localStorage.getItem("u_id");

        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        // login hoy to modal open
        const modal = new window.bootstrap.Modal(
            document.getElementById("myModal")
        );
        modal.show();
    };

    return (
        <div>
            <div className="p-2 bg-primary text-white text-center">
                <h1>
                    <img src="/logo.jpg" alt="" height="20%" width="20%"/>
                </h1>
            </div>

            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">Aboutus</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#" data-bs-toggle="modal" data-bs-target="#myModal" onClick={handleBookNow} >Book now</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={logout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

           <Bookingmodel/>
        </div>
    )
}

export default Header;