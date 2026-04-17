import React, {useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



function Header({title}) {
    const redirect=useNavigate();
    // // useEffect(()=>{
    // //     if(localStorage.getItem('s_id'))
    // //     {

    // //     }
    // //     else
    // //     {
    // //         redirect('/');
    // //     }
    // })
    
    const logout=()=>{
        localStorage.removeItem('s_id');
        localStorage.removeItem('s_name');
        redirect('/');
        alert('Logout Success');
        return false;
    }


    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>{title}</h1>
                <h2>Hi....{ localStorage.getItem('s_name')}</h2>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add_user">Add_user</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_user">Manage_user</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/manage_contact">Manage_contact</NavLink>
                        </li>
                         <li className="nav-item">
                            <a className="nav-link" href="#" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header