import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aheader from "../components/Aheader";
import Afooter from "../components/Afooter";


function Add_employee() {

    const [formvalue, Setformvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    })

    const changeHandle = (e) => {
        Setformvalue({ ...formvalue, id: new Date().getTime().toString(), status: "unblock", [e.target.name]: e.target.value })
    }

    const submitHandle = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/employee`, formvalue);
        Setformvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
        alert('employee added succesfully');
        return false;
    }

        return (    
            <div>
                <Aheader title={""}/>

                <div className="container mt-5 mb-5 d-flex justify-content-center">
                    <div className="col-md-6">

                        <div className="card shadow p-4 border-0 mb-5">

                            <h3 className="text-center mb-4 fw-bold" style={{ color: "#0d6efd" }}>
                                Add Employee
                            </h3>

                            <form method="post" onSubmit={submitHandle}>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Name:</label>
                                    <input type="text" onChange={changeHandle} value={formvalue.name} className="form-control" placeholder="Enter Name" name="name" />
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Email:</label>
                                    <input type="email" onChange={changeHandle} value={formvalue.email} className="form-control" placeholder="Enter Email" name="email" />
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Password:</label>
                                    <input type="password" onChange={changeHandle} value={formvalue.password} className="form-control" placeholder="Enter Password" name="password" />
                                </div>

                                <div className="mb-3 d-flex align-items-center">
                                    <label className="me-3" style={{ width: "120px" }}>Mobile:</label>
                                    <input type="number" onChange={changeHandle} value={formvalue.mobile} className="form-control" placeholder="Enter Mobile" name="mobile" />
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mt-2">
                                    Submit
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
        <Afooter />


              
            </div>
        )
    }

    
export default Add_employee