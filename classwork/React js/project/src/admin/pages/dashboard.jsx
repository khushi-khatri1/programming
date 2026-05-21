import React, { useEffect, useState } from "react";
import Aheader from "../components/Aheader";
import Afooter from "../components/Afooter";
import axios from "axios";

function Dashboard() {

    const [employees, setEmployees] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // LocalStorage mathi data levu user nu 
        const custData = JSON.parse(localStorage.getItem("userData")) || [];
        setCustomers(custData);

        const fetchData = async () => {

            const empRes = await axios.get("http://localhost:3000/employee");
            setEmployees(empRes.data);

            const bookRes = await axios.get("http://localhost:3000/booking");
            setBookings(bookRes.data);
        };
        fetchData();

    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">

            {/* HEADER */}
            <Aheader />

            {/* CONTENT */}
            <div className="flex-grow-1">
                <div className="container mt-5">
                    {/* <h4>Welcome back, {localStorage.getItem("s_name")}</h4>
                    <p>Here’s what’s happening today</p> */}
                    <h2 className="fw-bold text-dark">
                        Welcome back, <span className="text-success">{localStorage.getItem("s_name")}</span>
                    </h2>
                    <h3 className="text-secondary fs-5 mb-4">
                        Here’s what’s happening today
                    </h3>


                    <div className="row text-center">

                        {/* Employees */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow border-0 p-4 bg-primary text-white">
                                <h5>Total Employees</h5>
                                <h2>{employees.length}</h2>
                            </div>
                        </div>

                        {/* Customers */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow border-0 p-4 bg-success text-white">
                                <h5>Total Customers</h5>
                                <h2>{customers.length}</h2>
                            </div>
                        </div>

                        {/* Bookings */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow border-0 p-4 bg-warning text-dark">
                                <h5>Total Bookings</h5>
                                <h2>{bookings.length}</h2>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


            {/* FOOTER */}
            <Afooter />

        </div>
    );
}

export default Dashboard;