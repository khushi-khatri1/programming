import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function Orders() {
  const { user, addToast } = useContext(MyContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    axios.get(`http://localhost:3000/orders`)
      .then(res => {
        // Filter orders by userId (ensuring comparison matches string or number format)
        const filtered = res.data.filter(o => String(o.userId) === String(user.id));
        // Sort orders by date descending
        const sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOrders(sorted);
      })
      .catch(err => {
        console.error(err);
        addToast('Error fetching orders.', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">My Orders</h2>
      
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-5 bg-white rounded-4 shadow-sm border-0">
          <i className="fas fa-shopping-bag fa-4x text-muted mb-3 opacity-25"></i>
          <h4 className="text-muted mb-4">You have not placed any orders yet</h4>
          <Link to="/products" className="btn btn-primary px-5 py-3 rounded-pill">Start Shopping</Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-12">
            {orders.map(order => (
              <div className="card shadow-sm border-0 rounded-4 mb-4 overflow-hidden bg-white" key={order.id}>
                {/* Order Header Info */}
                <div className="bg-light p-3 border-bottom d-flex flex-wrap justify-content-between align-items-center gap-3">
                  <div>
                    <span className="text-muted small">ORDER PLACED</span>
                    <p className="mb-0 fw-semibold">{new Date(order.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <div>
                    <span className="text-muted small">TOTAL PRICE</span>
                    <p className="mb-0 fw-semibold text-primary">₹{order.total.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <span className="text-muted small">PAYMENT METHOD</span>
                    <p className="mb-0 fw-semibold">Cash on Delivery</p>
                  </div>
                  <div>
                    <span className="text-muted small">STATUS</span>
                    <p className="mb-0">
                      <span className={`badge rounded-pill bg-${order.status === 'Delivered' ? 'success' : order.status === 'Cancelled' ? 'danger' : 'warning text-dark'}`}>
                        {order.status}
                      </span>
                    </p>
                  </div>
                  <div>
                    <span className="text-muted small">ORDER ID</span>
                    <p className="mb-0 fw-mono text-muted small">{order.id}</p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="card-body p-4">
                  {order.items.map(item => (
                    <div className="d-flex align-items-center mb-3 pb-3 border-bottom last-border-none" key={item.id}>
                      <img src={item.image} width="80" height="80" className="rounded-3 me-3" style={{objectFit:'cover'}} alt={item.name} />
                      <div className="flex-grow-1">
                        <h6 className="fw-bold mb-1 text-dark">{item.name}</h6>
                        <p className="text-muted small mb-0">Category: {item.category}</p>
                        <p className="text-muted small mb-0">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-end">
                        <span className="fw-bold text-dark">₹{item.price.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  ))}

                  {/* Delivery Info */}
                  <div className="bg-light p-3 rounded-3 mt-3">
                    <h6 className="fw-bold mb-2 small text-muted text-uppercase">Delivery Details</h6>
                    <p className="mb-0 text-dark small fw-semibold">{order.shippingDetails.name}</p>
                    <p className="mb-0 text-muted small">{order.shippingDetails.address}, {order.shippingDetails.city}, {order.shippingDetails.state} - {order.shippingDetails.pincode}</p>
                    {order.shippingDetails.phone && <p className="mb-0 text-muted small">Phone: {order.shippingDetails.phone}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
