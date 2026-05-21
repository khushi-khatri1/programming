import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function UserRegister() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { addToast } = useContext(MyContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Check if email exists
    axios.get(`http://localhost:3000/users?email=${formData.email}`)
      .then(res => {
        if (res.data.length > 0) {
          addToast('User already exists', 'error');
        } else {
          // Register user
          axios.post('http://localhost:3000/users', formData)
            .then(() => {
              addToast('Registered Successfully', 'success');
              navigate('/login');
            });
        }
      });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow border-0 p-4 rounded-4">
            <h2 className="text-center fw-bold mb-4">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
              </div>
              <button className="btn btn-primary w-100 py-3">Register Now</button>
            </form>
            <p className="text-center mt-4">Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
