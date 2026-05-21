import React from "react";
import Aheader from "./components/Aheader";
import Afooter from "./components/Afooter";


function Dashboard() {
    return (
        <>
            <div>
                {/* Header */}
                <div className="bg-primary text-white text-center py-3">
                    <h2>Admin Dashboard</h2>
                </div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="#">Admin Panel</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" href="add">Add_products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="manage">manage_products</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Cards */}
                <div className="container mt-5">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h1>➕</h1>
                                <h4>Add Product</h4>
                                <p>Add new products</p>
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h1>📦</h1>
                                <h4>Manage Products</h4>
                                <p>Update or delete products</p>
                                <button className="btn btn-primary">Manage</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow text-center p-4">
                                <h1>📊</h1>
                                <h4>Total Products</h4>
                                <h2 className="text-primary">128</h2>
                                <p>Available products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Afooter />
        </>
    )
}

export default Dashboard;