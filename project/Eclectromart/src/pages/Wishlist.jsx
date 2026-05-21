import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';

function Wishlist() {
  const { wishlist, setWishlist, user, addToCart, addToast } = useContext(MyContext);

  const remove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const moveToCart = (p) => {
    addToCart(p);
    remove(p.id);
    addToast('Moved to cart', 'success');
  };

  if (!user) {
    return <div className="container py-5 text-center"><h2>Please login to view wishlist</h2><Link to="/login" className="btn btn-primary mt-3">Login</Link></div>;
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className="text-center py-5"><h4>No items in wishlist</h4><Link to="/products" className="btn btn-primary">Browse</Link></div>
      ) : (
        <div className="row g-4">
          {wishlist.map(p => (
            <div key={p.id} className="col-lg-3 col-md-6">
              <div className="card shadow-sm h-100 border-0 rounded-4">
                <img src={p.image} className="card-img-top rounded-top-4" height="200" style={{objectFit:'cover'}} alt="" />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{p.name}</h5>
                  <p className="fw-bold text-primary">${p.price}</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" onClick={() => moveToCart(p)}>Add to Cart</button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => remove(p.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
