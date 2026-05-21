import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";

function Login() {
    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('u_id')) {
            redirect('/');
        }
    }, []);

    const [formvalue, Setformvalue] = useState({
        email: "",
        password: ""
    });

    const changeHandle = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const validation = () => {
        var result = true;
        if (formvalue.email == "") {
            result = false;
            alert('Email field is required')
            return false;
        }
        if (formvalue.password == "") {
            result = false;
            alert('password field is required')
            return false;
        }
        return result;
    }

    const submitHandle = (e) => {
        e.preventDefault();

        if (validation()) {
            const storedUser = JSON.parse(localStorage.getItem("userData")) || [];

            const user = storedUser.find(
                (u) => u.email == formvalue.email && u.password == formvalue.password
            );

            if (user) {
                localStorage.setItem('u_id', user.id);
                localStorage.setItem('u_name', user.name);

                alert('login successfully');
                redirect('/');
            }
            else {
                alert('Invalid email or password');
                redirect('/register');
            }
        }
    }

    return (
        <div>
            <div>
                <Header />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Login Form</h2>
                            <form action="" method="post" onSubmit={submitHandle}>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control" placeholder="Enter password" name="password" />
                                </div>

                                <button type="submit" className="btn btn-primary mb-5">Login</button>
                            </form>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Login;