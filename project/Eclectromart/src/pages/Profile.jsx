import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function Profile() {
  const { user, setUser, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    // Populate form with user data, setting defaults for empty/null values
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      address: user.address || '',
      city: user.city || '',
      state: user.state || '',
      pincode: user.pincode || ''
    });
  }, [user, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct updated user object (keeping the user id and password)
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode
    };

    axios.put(`http://localhost:3000/users/${user.id}`, updatedUser)
      .then(res => {
        setUser(res.data);
        addToast('Profile updated successfully!', 'success');
      })
      .catch(err => {
        console.error(err);
        addToast('Failed to update profile. Please try again.', 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (!user) return null;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 bg-white">
            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3 shadow" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                {formData.name ? formData.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h3 className="fw-bold mb-0 text-dark">Manage Account</h3>
                <p className="text-muted mb-0 small">Update your personal details and shipping address.</p>
              </div>
            </div>

            <form onSubmit={handleUpdate}>
              <h5 className="fw-bold mb-3 text-primary">Personal Details</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold small text-muted">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    required 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small text-muted">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={formData.email} 
                    onChange={e => setFormData({...formData, email: e.target.value})} 
                    required 
                    disabled
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold small text-muted">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone} 
                    onChange={e => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
              </div>

              <h5 className="fw-bold mb-3 text-primary">Shipping Address</h5>
              <div className="row g-3 mb-4">
                <div className="col-12">
                  <label className="form-label fw-semibold small text-muted">Address (Street name, House/Apartment No.)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Flat 101, Shanti Niketan Apartments"
                    value={formData.address} 
                    onChange={e => setFormData({...formData, address: e.target.value})} 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold small text-muted">City</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Mumbai"
                    value={formData.city} 
                    onChange={e => setFormData({...formData, city: e.target.value})} 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold small text-muted">State</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Maharashtra"
                    value={formData.state} 
                    onChange={e => setFormData({...formData, state: e.target.value})} 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold small text-muted">Pincode</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. 400001"
                    value={formData.pincode} 
                    onChange={e => setFormData({...formData, pincode: e.target.value})} 
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary px-4 rounded-pill"
                  onClick={() => navigate('/')}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary px-5 rounded-pill fw-bold shadow-sm"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
