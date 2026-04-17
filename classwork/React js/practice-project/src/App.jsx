import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './website/common/Header.jsx'
import Footer from './website/common/Footer.jsx'
import About from './website/pages/About.jsx'
import Menu from './website/pages/Menu.jsx'
import Chefs from './website/pages/Chefs.jsx'
import Contact from './website/pages/Contact.jsx'
import Home from './website/pages/Home.jsx'
import Postlist from './website/pages/blog.jsx';
import Feature from './website/pages/features.jsx';
import Testimonial from './website/pages/testimonial.jsx';
import Error from './website/pages/Error.jsx';
import Aheader from './admin/Acomman/Aheader.jsx';
import Blogadd from './admin/Apages/blogadd.jsx';
import Dashboard from './admin/Apages/dashboard.jsx';
import BlogsMan from './admin/Apages/blogsman.jsx';
import Register from './website/pages/Register.jsx';
import Login from './website/pages/Login.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Postlist />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/blogadd" element={<Blogadd />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/blogmanager" element={<BlogsMan />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
