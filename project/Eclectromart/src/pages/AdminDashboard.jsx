import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MyContext } from '../App';
import './AdminDashboard.css';

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { setAdmin, addToast, admin } = useContext(MyContext);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [categoriesList, setCategoriesList] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);


  useEffect(() => { 
    fetchProducts();
    fetchUsers();
    fetchOrders();
  }, []);

  // Fetch categories
  const fetchCategories = () => {
    axios.get('http://localhost:3000/categories')
      .then(res => setCategoriesList(res.data))
      .catch(err => console.log(err));
  };

  // Fetch feedback
  const fetchFeedback = () => {
    axios.get('http://localhost:3000/feedback')
      .then(res => setFeedbackList(res.data))
      .catch(err => console.log(err));
  };

  // Handle Category Edit
  const handleCategoryEdit = (cat) => {
    setEditingCategory(cat);
    setCategoryName(cat.name);
    setShowCategoryModal(true);
  };

  const handleCategorySave = (e) => {
    e.preventDefault();
    if (editingCategory) {
      axios.put(`http://localhost:3000/categories/${editingCategory.id}`, { name: categoryName })
        .then(() => {
          addToast('Category updated', 'success');
          fetchCategories();
          setShowCategoryModal(false);
        })
        .catch(() => addToast('Failed to update category', 'error'));
    } else {
      const newCat = { id: Date.now().toString(), name: categoryName };
      axios.post('http://localhost:3000/categories', newCat)
        .then(() => {
          addToast('Category added', 'success');
          fetchCategories();
          setShowCategoryModal(false);
        })
        .catch(() => addToast('Failed to add category', 'error'));
    }
  };

  const handleCategoryDelete = (catId) => {
    if (window.confirm('Delete this category?')) {
      axios.delete(`http://localhost:3000/categories/${catId}`)
        .then(() => {
          addToast('Category deleted', 'success');
          fetchCategories();
        })
        .catch(() => addToast('Failed to delete category', 'error'));
    }
  };

  const fetchUsers = () => {
    axios.get('http://localhost:3000/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  const fetchOrders = () => {
    axios.get('http://localhost:3000/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this product?')) {
      axios.delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          addToast('Product Deleted Successfully', 'success');
          fetchProducts();
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      axios.put(`http://localhost:3000/products/${editingProduct.id}`, formData)
        .then(() => {
          addToast('Product Updated Successfully', 'success');
          setShowModal(false);
          fetchProducts();
        });
    } else {
      axios.post('http://localhost:3000/products', { ...formData, id: Date.now().toString() })
        .then(() => {
          addToast('New Product Added Successfully', 'success');
          setShowModal(false);
          fetchProducts();
        });
    }
  };

  const handleEdit = (p) => {
    setEditingProduct(p);
    setFormData(p);
    setShowModal(true);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    const orderToUpdate = orders.find(o => o.id === orderId);
    if (!orderToUpdate) return;
    
    axios.put(`http://localhost:3000/orders/${orderId}`, { ...orderToUpdate, status: newStatus })
      .then(() => {
        addToast(`Order status updated to ${newStatus}`, 'success');
        fetchOrders();
      })
      .catch(err => {
        console.error(err);
        addToast('Failed to update status', 'error');
      });
  };

  const handleUserDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost:3000/users/${userId}`)
        .then(() => {
          addToast('User deleted successfully', 'success');
          fetchUsers();
        })
        .catch(err => {
          console.error(err);
          addToast('Failed to delete user', 'error');
        });
    }
  };

  const categories = ['Laptop Accessories', 'Headphones', 'Smart Watches', 'Keyboards', 'Mouse', 'Speakers', 'Earbuds'];

  const renderDashboard = () => {
    const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'Cancelled' ? o.total : 0), 0);
    const recentOrders = [...orders]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    return (
      <div>
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 stat-card bg-white h-100">
              <div className="d-flex align-items-center">
                <div className="stat-icon bg-primary text-white bg-opacity-10 text-primary me-3">
                  <i className="fas fa-box text-primary"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 fw-bold small">Total Products</p>
                  <h3 className="fw-bold mb-0">{products.length}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 stat-card bg-white h-100">
              <div className="d-flex align-items-center">
                <div className="stat-icon bg-success text-white bg-opacity-10 text-success me-3">
                  <i className="fas fa-shopping-bag text-success"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 fw-bold small">Total Orders</p>
                  <h3 className="fw-bold mb-0">{orders.length}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 stat-card bg-white h-100">
              <div className="d-flex align-items-center">
                <div className="stat-icon bg-warning text-white bg-opacity-10 text-warning me-3">
                  <i className="fas fa-users text-warning"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 fw-bold small">Total Users</p>
                  <h3 className="fw-bold mb-0">{users.length}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0 shadow-sm rounded-4 p-3 stat-card bg-white h-100">
              <div className="d-flex align-items-center">
                <div className="stat-icon bg-danger text-white bg-opacity-10 text-danger me-3">
                  <i className="fas fa-wallet text-danger"></i>
                </div>
                <div>
                  <p className="text-muted mb-0 fw-bold small">Total Revenue</p>
                  <h3 className="fw-bold mb-0">₹{totalRevenue.toLocaleString('en-IN')}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 className="fw-bold mb-3">Recent Orders</h5>
        <div className="table-responsive bg-white shadow-sm rounded-4 p-3 border-0">
          {recentOrders.length === 0 ? (
            <p className="text-muted mb-0 py-3 text-center">No orders placed yet.</p>
          ) : (
            <table className="table table-hover align-middle mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map(o => (
                  <tr key={o.id}>
                    <td className="fw-bold text-primary">{o.id}</td>
                    <td>{o.shippingDetails.name}</td>
                    <td>{new Date(o.date).toLocaleDateString('en-IN')}</td>
                    <td className="fw-bold">₹{o.total.toLocaleString('en-IN')}</td>
                    <td>
                      <span className={`badge bg-${o.status === 'Delivered' ? 'success' : o.status === 'Cancelled' ? 'danger' : 'warning text-dark'}`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  };

  const renderProducts = () => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Inventory Management</h4>
        <button className="btn btn-primary px-4 rounded-pill shadow-sm fw-bold" onClick={() => { setEditingProduct(null); setFormData({name:'',category:'',price:'',image:'',description:'',badge:'New'}); setShowModal(true); }}>
          <i className="fas fa-plus me-2"></i>Add Product
        </button>
      </div>

      <div className="table-responsive bg-white shadow-sm rounded-4 p-3 border-0">
        <table className="table table-hover align-middle mb-0">
          <thead className="bg-light">
            <tr>
              <th className="px-3">Image</th>
              <th>Product Details</th>
              <th>Category</th>
              <th>Price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td className="px-3">
                  <img src={p.image} width="50" height="50" style={{objectFit:'cover'}} className="rounded-3 shadow-sm" alt="" />
                </td>
                <td>
                  <div className="fw-bold text-truncate" style={{maxWidth: '200px'}}>{p.name}</div>
                  <div className="text-muted small">ID: {p.id}</div>
                </td>
                <td><span className="badge bg-light text-dark border">{p.category}</span></td>
                <td className="fw-bold text-primary">₹{Number(p.price).toLocaleString('en-IN')}</td>
                <td className="text-center">
                  <button className="btn btn-sm btn-light text-primary me-2 rounded-circle" style={{width:'32px', height:'32px'}} onClick={() => handleEdit(p)}>
                    <i className="fas fa-pen"></i>
                  </button>
                  <button className="btn btn-sm btn-light text-danger rounded-circle" style={{width:'32px', height:'32px'}} onClick={() => handleDelete(p.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div>
      <h4 className="fw-bold mb-4">Customer Orders</h4>
      <div className="table-responsive bg-white shadow-sm rounded-4 p-3 border-0">
        {orders.length === 0 ? (
          <p className="text-muted mb-0 py-3 text-center">No orders have been placed yet.</p>
        ) : (
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td className="fw-bold text-primary">{o.id}</td>
                  <td>
                    <div className="fw-bold">{o.shippingDetails?.name}</div>
                    <div className="text-muted small">{o.shippingDetails?.phone}</div>
                    <div className="text-muted small text-truncate" style={{maxWidth: '200px'}}>
                      {o.shippingDetails?.address}, {o.shippingDetails?.city}
                    </div>
                  </td>
                  <td>{new Date(o.date).toLocaleDateString('en-IN')}</td>
                  <td>
                    {o.items?.map((item, idx) => (
                      <div key={idx} className="small text-muted">
                        • {item.name} (x{item.quantity})
                      </div>
                    ))}
                  </td>
                  <td className="fw-bold text-primary">₹{o.total.toLocaleString('en-IN')}</td>
                  <td>
                    <span className={`badge bg-${o.status === 'Delivered' ? 'success' : o.status === 'Cancelled' ? 'danger' : 'warning text-dark'}`}>
                      {o.status}
                    </span>
                  </td>
                  <td>
                    <select 
                      className="form-select form-select-sm bg-light border-0 animate-fade-in" 
                      value={o.status} 
                      onChange={e => handleUpdateStatus(o.id, e.target.value)}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  const renderUsers = () => (
    <div>
      <h4 className="fw-bold mb-4">Customer Accounts</h4>
      <div className="table-responsive bg-white shadow-sm rounded-4 p-3 border-0">
        {users.length === 0 ? (
          <p className="text-muted mb-0 py-3 text-center">No users registered yet.</p>
        ) : (
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td className="text-muted small">{u.id}</td>
                  <td className="fw-bold">{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone || 'N/A'}</td>
                  <td>
                    {u.address ? (
                      <div className="text-truncate small" style={{maxWidth: '250px'}}>
                        {u.address}, {u.city}, {u.state} - {u.pincode}
                      </div>
                    ) : (
                      <span className="text-muted small">No address saved</span>
                    )}
                  </td>
                  <td className="text-center">
                    <button 
                      className="btn btn-sm btn-light text-danger rounded-circle" 
                      style={{width:'32px', height:'32px'}} 
                      onClick={() => handleUserDelete(u.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  const renderFeedback = () => (
    <div>
      <h4 className="fw-bold mb-4">User Feedback & Complaints</h4>
      {feedbackList.length === 0 ? (
        <p className="text-muted">No feedback submitted yet.</p>
      ) : (
        <ul className="list-unstyled">
          {feedbackList.map(fb => (
            <li key={fb.id} className="mb-3 border-bottom pb-2">
              <strong>{fb.subject}</strong> by {fb.name} ({fb.email})<br/>
              <small className="text-muted">{new Date(fb.date).toLocaleString()}</small>
              <p className="mb-1">{fb.message}</p>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleFeedbackDelete(fb.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const handleFeedbackDelete = (fbId) => {
    if (window.confirm('Delete this feedback?')) {
      axios.delete(`http://localhost:3000/feedback/${fbId}`)
        .then(() => {
          addToast('Feedback deleted', 'success');
          fetchFeedback();
        })
        .catch(() => addToast('Failed to delete feedback', 'error'));
    }
  };

  const renderCategories = () => (
    <div>
      <h4 className="fw-bold mb-4">Categories Management</h4>
      <button className="btn btn-primary mb-3" onClick={() => { setEditingCategory(null); setCategoryName(''); setShowCategoryModal(true); }}>
        <i className="fas fa-plus me-2"></i>Add Category
      </button>
      <div className="row g-4">
        {categoriesList.map((cat) => (
          <div className="col-md-4 col-lg-3" key={cat.id}>
            <div className="card border-0 shadow-sm rounded-4 p-3 text-center bg-white h-100">
              <h6 className="fw-bold mb-0">{cat.name}</h6>
              <div className="d-flex justify-content-center gap-2 mt-2">
                <button className="btn btn-sm btn-outline-primary rounded-pill" onClick={() => handleCategoryEdit(cat)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-outline-danger rounded-pill" onClick={() => handleCategoryDelete(cat.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <i className="fas fa-bolt me-2"></i>ElectroAdmin
        </div>
        <ul className="sidebar-menu">
          <li className={`sidebar-item ${activeTab === 'Dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('Dashboard')}>
            <i className="fas fa-th-large"></i> Dashboard
          </li>
          <li className={`sidebar-item ${activeTab === 'Products' ? 'active' : ''}`} onClick={() => setActiveTab('Products')}>
            <i className="fas fa-box-open"></i> Products
          </li>
          <li className={`sidebar-item ${activeTab === 'Orders' ? 'active' : ''}`} onClick={() => setActiveTab('Orders')}>
            <i className="fas fa-shopping-cart"></i> Orders
          </li>
          <li className={`sidebar-item ${activeTab === 'Users' ? 'active' : ''}`} onClick={() => setActiveTab('Users')}>
            <i className="fas fa-users"></i> Users
          </li>
          <li className={`sidebar-item ${activeTab === 'Categories' ? 'active' : ''}`} onClick={() => setActiveTab('Categories')}>
            <i className="fas fa-tags"></i> Categories
          </li>
          <li className={`sidebar-item ${activeTab === 'Offers' ? 'active' : ''}`} onClick={() => setActiveTab('Offers')}>
            <i className="fas fa-percentage"></i> Offers
          </li>
          <li className={`sidebar-item ${activeTab === 'Feedback' ? 'active' : ''}`} onClick={() => setActiveTab('Feedback')}>
            <i className="fas fa-comments"></i> Feedback
          </li>
          <li className="sidebar-item mt-4 text-danger" onClick={() => setAdmin(null)}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className={`admin-main ${!sidebarOpen ? 'sidebar-closed' : ''}`}>
        {/* Header */}
        <header className="admin-header">
          <div className="d-flex align-items-center">
            <button className="btn btn-light d-lg-none me-3" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <i className="fas fa-bars"></i>
            </button>
            <h5 className="fw-bold mb-0 text-dark d-none d-sm-block">{activeTab}</h5>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <i className="fas fa-bell text-muted fa-lg"></i>
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
            </div>
            <div className="d-flex align-items-center gap-2 border-start ps-3 ms-2">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width:'36px', height:'36px'}}>
                A
              </div>
              <div className="d-none d-md-block">
                <p className="mb-0 fw-bold small text-dark">Admin User</p>
                <p className="mb-0 text-muted" style={{fontSize: '0.7rem'}}>Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="admin-content">
          {activeTab === 'Dashboard' && renderDashboard()}
          {activeTab === 'Products' && renderProducts()}
          {activeTab === 'Categories' && renderCategories()}
          {activeTab === 'Orders' && renderOrders()}
          {activeTab === 'Users' && renderUsers()}
          {activeTab === 'Offers' && renderPlaceholder('Offer', 'fa-percentage', 'Create and manage discount codes, flash sales, and featured deals.')}
          {activeTab === 'Feedback' && renderFeedback()}
          {activeTab === 'Reviews' && renderPlaceholder('Review', 'fa-star', 'Monitor customer feedback, approve ratings, and manage product reviews.')}
        </main>
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="modal show d-block" style={{background:'rgba(0,0,0,0.5)', zIndex: 10000}}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 pb-0">
                <h5 className="fw-bold">{editingProduct ? 'Update Product Details' : 'Add New Product'}</h5>
                <button type="button" className="btn-close" onClick={()=>setShowModal(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body pt-4">
                  <div className="row g-3">
                    <div className="col-md-8">
                      <label className="form-label small fw-bold text-muted">Product Name</label>
                      <input type="text" className="form-control bg-light border-0" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label small fw-bold text-muted">Price (₹)</label>
                      <input type="number" className="form-control bg-light border-0" value={formData.price} onChange={e=>setFormData({...formData, price: e.target.value})} required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Category</label>
                      <select className="form-select bg-light border-0" value={formData.category} onChange={e=>setFormData({...formData, category: e.target.value})} required>
                        <option value="">Select Category</option>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Badge/Tag</label>
                      <input type="text" className="form-control bg-light border-0" value={formData.badge} onChange={e=>setFormData({...formData, badge: e.target.value})} placeholder="e.g. Sale, New, Premium" />
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-bold text-muted">Image URL</label>
                      <input type="url" className="form-control bg-light border-0" value={formData.image} onChange={e=>setFormData({...formData, image: e.target.value})} required />
                      {formData.image && <img src={formData.image} alt="Preview" className="mt-2 rounded-3" style={{height: '80px', objectFit:'cover'}} />}
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-bold text-muted">Description</label>
                      <textarea className="form-control bg-light border-0" rows="3" value={formData.description} onChange={e=>setFormData({...formData, description: e.target.value})} required></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <button type="button" className="btn btn-light px-4 rounded-pill fw-bold text-muted" onClick={()=>setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary px-5 rounded-pill fw-bold shadow-sm">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <div className="modal show d-block" style={{background:'rgba(0,0,0,0.5)', zIndex: 10000}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 pb-0">
                <h5 className="fw-bold">{editingCategory ? 'Edit Category' : 'Add Category'}</h5>
                <button type="button" className="btn-close" onClick={() => setShowCategoryModal(false)}></button>
              </div>
              <form onSubmit={handleCategorySave}>
                <div className="modal-body pt-4">
                  <div className="mb-3">
                    <label className="form-label">Category Name</label>
                    <input type="text" className="form-control" value={categoryName} onChange={e => setCategoryName(e.target.value)} required />
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0">
                  <button type="button" className="btn btn-light" onClick={() => setShowCategoryModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
