import React from 'react';
import './navbar.css'

export const Navbar = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src="../public/logo.jpg" alt="" height="60px" style={{borderRadius:"50px"}} className='pic'/>
            </div>

            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Services</li>
                </ul>
            </div>

            <div className="cart">
                <i class="fa-solid fa-cart-shopping"></i>   
            </div>
        </div>
    )
}

