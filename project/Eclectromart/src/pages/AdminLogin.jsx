import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAdmin, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/admins?email=${email}&password=${password}`)
      .then(res => {
        if (res.data.length > 0) {
          setAdmin(res.data[0]);
          addToast('Admin Authorized', 'success');
          navigate('/admin-dashboard');
        } else {
          addToast('Invalid Admin credentials', 'error');
        }
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 p-4 bg-dark text-white rounded-4">
            <h2 className="text-center fw-bold mb-4">Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Admin Email</label>
                <input type="email" className="form-control bg-dark text-white border-secondary" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control bg-dark text-white border-secondary" onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="btn btn-primary w-100 py-3">Login as Admin</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
