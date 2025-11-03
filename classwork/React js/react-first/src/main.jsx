import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Doc from './Doc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Doc />
    <App />
    
  </StrictMode>,
)
