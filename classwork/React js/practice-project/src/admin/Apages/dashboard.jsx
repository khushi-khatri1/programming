import React from "react";
import Aheader from "../Acomman/Aheader";

function Dashboard() {
  return (
    <div>

      <Aheader />

      <h1 className="text-center mt-3">Welcome, this is dashboard</h1>

      <div className="container-fluid mt-4">

        {/* Top Stats */}
        <div className="row g-4">

          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3 text-center">
              <h6>Total Orders</h6>
              <h2 className="fw-bold text-primary">128</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3 text-center">
              <h6>Today Revenue</h6>
              <h2 className="fw-bold text-success">₹9,240</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3 text-center">
              <h6>Pending Orders</h6>
              <h2 className="fw-bold text-warning">12</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm p-3 text-center">
              <h6>Customers</h6>
              <h2 className="fw-bold text-danger">305</h2>
            </div>
          </div>

        </div>

        {/* Recent Orders */}
        <div className="card border-0 shadow-sm mt-5">
          <div className="card-header bg-white fw-bold">
            Recent Orders
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#101</td>
                  <td>Rahul</td>
                  <td>Paneer Pizza</td>
                  <td><span className="badge bg-warning">Preparing</span></td>
                  <td>₹320</td>
                </tr>

                <tr>
                  <td>#102</td>
                  <td>Neha</td>
                  <td>Burger Combo</td>
                  <td><span className="badge bg-success">Delivered</span></td>
                  <td>₹250</td>
                </tr>

                <tr>
                  <td>#103</td>
                  <td>Amit</td>
                  <td>Pasta</td>
                  <td><span className="badge bg-danger">Cancelled</span></td>
                  <td>₹190</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="row mt-5 g-4">

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h5>Add New Item</h5>
              <p className="text-muted">Add dishes to your menu</p>
              <button className="btn btn-primary">Add Item</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h5>View Orders</h5>
              <p className="text-muted">Manage incoming orders</p>
              <button className="btn btn-success">View Orders</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 p-4 text-center">
              <h5>Manage Menu</h5>
              <p className="text-muted">Edit or remove items</p>
              <button className="btn btn-dark">Manage Menu</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
