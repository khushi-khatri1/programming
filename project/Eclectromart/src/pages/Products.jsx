import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [brand, setBrand] = useState('All');
  const [sortBy, setSortBy] = useState('Default');
  const location = useLocation();

  useEffect(() => {
    // Port 3001 as previously identified
    axios.get('http://localhost:3000/products')
      .then(res => {
        const shuffled = [...res.data].sort(() => 0.5 - Math.random());
        setProducts(shuffled);
        setFilteredProducts(shuffled);
        
        const params = new URLSearchParams(location.search);
        const catParam = params.get('category');
        const brandParam = params.get('brand');
        const searchParam = params.get('search');
        
        if (catParam) setCategory(catParam);
        if (brandParam) setBrand(brandParam);
        if (searchParam) setSearchTerm(searchParam);
      })
      .catch(err => console.log(err));
  }, [location]);

  useEffect(() => {
    let result = [...products];

    // Filter by search
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    // Filter by brand
    if (brand !== 'All') {
      result = result.filter(p => p.brand === brand);
    }

    // Sort by price
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [searchTerm, category, brand, sortBy, products]);

  const categories = ['All', 'Laptop Accessories', 'Headphones', 'Smart Watches', 'Keyboards', 'Mouse', 'Speakers', 'Earbuds'];
  const brandsList = ['All', 'Apple', 'Samsung', 'Sony', 'Logitech'];

  return (
    <div className="container py-5">
      <div className="row mb-5 g-3 align-items-center">
        <div className="col-md-3">
          <h2 className="fw-bold mb-0">Collections</h2>
          <p className="text-muted small mb-0">Total {filteredProducts.length} items found</p>
        </div>
        <div className="col-md-3">
          <div className="input-group shadow-sm rounded-pill overflow-hidden">
            <span className="input-group-text bg-white border-0 ps-3"><i className="fas fa-search text-muted"></i></span>
            <input 
              type="text" 
              className="form-control border-0 shadow-none" 
              placeholder="Search gadgets..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>
        <div className="col-md-2">
          <select className="form-select rounded-pill shadow-sm" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All Categories</option>
            {categories.filter(c => c !== 'All').map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select rounded-pill shadow-sm" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="All">All Brands</option>
            {brandsList.filter(b => b !== 'All').map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select rounded-pill shadow-sm" onChange={(e) => setSortBy(e.target.value)}>
            <option value="Default">Sort By</option>
            <option value="Price: Low to High">Lowest Price</option>
            <option value="Price: High to Low">Highest Price</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="col-lg-3 col-md-6">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <i className="fas fa-search fa-3x text-muted mb-3 opacity-25"></i>
            <h4 className="text-muted">No gadgets found matching your selection.</h4>
            <button className="btn btn-link" onClick={() => {setCategory('All'); setBrand('All'); setSearchTerm('');}}>Clear All Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
