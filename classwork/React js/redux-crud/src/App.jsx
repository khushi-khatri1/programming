import { useState } from 'react'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Login from './feature/pages/Login'
import Home from './feature/pages/Home'
import About from './feature/pages/About'
import Add_user from './feature/pages/Add_user'
import Manage_user from './feature/pages/Manage_user'
import Manage_contact from './feature/pages/Manage_contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/dashboard" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/add_user" element={<Add_user/>}></Route>
              <Route path="/manage_user" element={<Manage_user/>}></Route>
              <Route path="/manage_contact" element={<Manage_contact/>}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
