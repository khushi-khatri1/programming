import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reference from './useref.jsx'
import Previous from './useref2.jsx'
import Example from './useMemo.jsx'
import {Navbar} from './navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)
