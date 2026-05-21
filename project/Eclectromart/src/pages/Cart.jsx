import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function Cart() {
  const { cart, setCart, user, addToast } = useContext(MyContext);
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    if (user) {
      setShippingDetails({
        name: user.name || '',
        phone: user.phone || '',
        address: user.address || '',
        city: user.city || '',
        state: user.state || '',
        pincode: user.pincode || ''
      });
    }
  }, [user]);

  // Calculate pricing details
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = 50; // Fixed delivery fee
  const total = subtotal + deliveryCharge;

  const updateQty = (id, q) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, q) } : item));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    addToast('Removed from Cart', 'info');
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!shippingDetails.name || !shippingDetails.phone || !shippingDetails.address || !shippingDetails.city || !shippingDetails.state || !shippingDetails.pincode) {
      addToast('Please fill in all shipping details.', 'error');
      return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryCharge = 50; // Fixed delivery fee
    const total = subtotal + deliveryCharge;

    const newOrder = {
      id: Date.now().toString(),
      userId: user.id,
      date: new Date().toISOString(),
      items: cart,
      shippingDetails,
      subtotal,
      deliveryCharge,
      total,
      status: 'Processing'
    };
    // Save order
    axios.post('http://localhost:3000/orders', newOrder)
      .then(() => {
        addToast('Order placed successfully', 'success');
        setCart([]);
        navigate('/orders');
      })
      .catch(err => {
        console.error(err);
        addToast('Failed to place order', 'error');
      });
  };

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <div className="py-5 bg-white rounded-4 shadow-sm border-0">
          <i className="fas fa-user-lock fa-4x text-muted mb-4 opacity-25"></i>
          <h2 className="fw-bold mb-3">Please login to view cart</h2>
          <Link to="/login" className="btn btn-primary px-5 py-3 rounded-pill mt-3">Login Now</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">{isCheckingOut ? 'Checkout & Shipping' : 'My Shopping Cart'}</h2>
      {cart.length === 0 ? (
        <div className="text-center py-5 bg-white rounded-4 shadow-sm border-0">
          <i className="fas fa-shopping-basket fa-4x text-muted mb-3 opacity-25"></i>
          <h4 className="text-muted mb-4">Your cart is currently empty</h4>
          <Link to="/products" className="btn btn-primary px-5 py-3 rounded-pill">Start Shopping</Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            {!isCheckingOut ? (
              <div className="card shadow-sm border-0 rounded-4 overflow-hidden bg-white">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr><th className="px-4">Product</th><th>Price</th><th>Qty</th><th>Total</th><th className="text-center">Action</th></tr>
                    </thead>
                    <tbody>
                      {cart.map(item => (
                        <tr key={item.id}>
                          <td className="px-4">
                            <div className="d-flex align-items-center">
                              <img src={item.image} width="60" height="60" className="rounded-3 me-3" style={{objectFit:'cover'}} alt="" /> 
                              <span className="fw-bold">{item.name}</span>
                            </div>
                          </td>
                          <td>₹{item.price.toLocaleString('en-IN')}</td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{width:'30px', height:'30px', padding:0}} onClick={() => updateQty(item.id, item.quantity - 1)}>-</button>
                              <span className="fw-bold mx-1">{item.quantity}</span>
                              <button className="btn btn-sm btn-outline-secondary rounded-circle" style={{width:'30px', height:'30px', padding:0}} onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                            </div>
                          </td>
                          <td className="fw-bold text-primary">₹{(item.price * item.quantity).toLocaleString('en-IN')}</td>
                          <td className="text-center">
                            <button className="btn btn-sm text-danger border-0" onClick={() => remove(item.id)}><i className="fas fa-trash"></i></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="card shadow-sm border-0 p-4 rounded-4 bg-white">
                <h5 className="fw-bold mb-3 text-primary">Shipping Address Details</h5>
                <form onSubmit={handlePlaceOrder}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-muted">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={shippingDetails.name}
                        onChange={e => setShippingDetails({...shippingDetails, name: e.target.value})}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-muted">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        required 
                        value={shippingDetails.phone}
                        onChange={e => setShippingDetails({...shippingDetails, phone: e.target.value})}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-muted">Address</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={shippingDetails.address}
                        onChange={e => setShippingDetails({...shippingDetails, address: e.target.value})}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-semibold text-muted">City</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={shippingDetails.city}
                        onChange={e => setShippingDetails({...shippingDetails, city: e.target.value})}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-semibold text-muted">State</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={shippingDetails.state}
                        onChange={e => setShippingDetails({...shippingDetails, state: e.target.value})}
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-semibold text-muted">Pincode</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        required 
                        value={shippingDetails.pincode}
                        onChange={e => setShippingDetails({...shippingDetails, pincode: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-top d-flex justify-content-between">
                    <button type="button" className="btn btn-outline-secondary px-4 rounded-pill" onClick={() => setIsCheckingOut(false)}>
                      Back to Cart
                    </button>
                    <button type="submit" className="btn btn-success px-5 rounded-pill fw-bold shadow-sm">
                      Place Order (COD)
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-4 rounded-4 sticky-top bg-white" style={{top:'100px'}}>
              <h4 className="fw-bold mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-bold">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Delivery</span>
                <span className="text-success fw-bold">₹{deliveryCharge.toLocaleString('en-IN')}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Payment Mode</span>
                <span className="text-primary fw-bold">Cash on Delivery</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">Total Payable:</h5>
                <h4 className="text-primary fw-bold">₹{total.toLocaleString('en-IN')}</h4>
              </div>
              {!isCheckingOut && (
                <button className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm" onClick={() => setIsCheckingOut(true)}>
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
