import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './website/common/Header.jsx'
import Footer from './website/common/Footer.jsx'
import About from './website/pages/About.jsx'
import Menu from './website/pages/Menu.jsx'
import Chefs from './website/pages/Chefs.jsx'
import Contact from './website/pages/Contact.jsx'
import Home from './website/pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header />

  </StrictMode>
)
