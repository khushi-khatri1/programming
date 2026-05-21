import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Aheader({ title }) {
    const redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('s_id'))
        {

        }
        else
        {
            redirect('/admin');
        }
    },[])

//     useEffect(()=>{
//     if(!localStorage.getItem('s_id')){
//         redirect('/');
//     }
// },[]);

    const logout = () => {
        localStorage.removeItem('s_id');
        localStorage.removeItem('s_name');
        redirect('/');
        alert('Logout Success');
        return false;
    }

    return (
        <div>
            <div className="p-4 bg-primary text-white text-center">
                <h1>{title}</h1>
                <h2>Hi....{localStorage.getItem('s_name')}</h2>

            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_employee">Add_employee</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_employee">Manage_employee</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/booking_details">Booking_details</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>


    );
}

export default Aheader