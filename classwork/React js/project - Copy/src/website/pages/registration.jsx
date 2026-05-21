import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/Header";

function Registration() {
    const redirect = useNavigate();

    const [formvalue, Setformvalue] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeHandle = (e) => {
        Setformvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const validation = () => {
        var result = true;
        if (formvalue.name == "") {
            result = false;
            alert('Name field is required')
            return false;
        }
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
            const userData = {
                id: new Date().getTime(),
                ...formvalue
            };
            // Step 1: old data levu
            let oldData = JSON.parse(localStorage.getItem("userData")) || [];

            // Step 2: new user add karvo
            oldData.push(userData);

            // Step 3: pacha save karvu
            localStorage.setItem("userData", JSON.stringify(oldData));
            
            alert("registration succesfully");
            Setformvalue({ name: "", email: "", password: "" });
            redirect("/login");
            return false;
        }
    }

    return (
        <div>
            <div>
                <Header />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Registration Form</h2>
                            <form action="" method="post" onSubmit={submitHandle}>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Name:</label>
                                    <input type="name" onChange={changeHandle} value={formvalue.name} className="form-control" placeholder="Enter name" name="name" />
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control" placeholder="Enter password" name="password" />
                                </div>

                                <button type="submit" className="btn btn-primary mb-5">Registration</button>
                            </form>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
export default Registration;