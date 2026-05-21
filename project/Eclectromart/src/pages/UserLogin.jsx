import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from '../App';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, addToast } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/users?email=${email}`)
      .then(res => {
        if (res.data.length > 0) {
          if (res.data[0].password === password) {
            setUser(res.data[0]);
            addToast('Login Successful', 'success');
            navigate('/');
          } else {
            addToast('Invalid Email or Password', 'error');
          }
        } else {
          addToast('Account not found. Please register first.', 'error');
          navigate('/register');
        }
      })
      .catch(err => addToast('Login Error', 'error'));
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow border-0 p-4 rounded-4">
            <h2 className="text-center fw-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="btn btn-primary w-100 py-3">Login Now</button>
            </form>
            <p className="text-center mt-4">New here? <Link to="/register">Register</Link></p>
            <p className="text-center mt-2"><Link to="/admin-login" className="text-muted small">Admin Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
