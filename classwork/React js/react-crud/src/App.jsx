import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './website/pages/Home'
import About from './website/pages/About'
import Add_user from './website/pages/Add_user'
import Manage_user from './website/pages/Manage_user'
import Manage_contact from './website/pages/Manage_contact'
import Edit_contact from './website/pages/Edit_contact'
import Login from './website/pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path="/dashboard" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/add_user" element={<Add_user/>}></Route>
              <Route path="/manage_user" element={<Manage_user/>}></Route>
              <Route path="/manage_contact" element={<Manage_contact/>}></Route>
              <Route path="/edit_contact/:id" element={<Edit_contact/>}></Route>
            </Routes>
          </BrowserRouter>
        }
    </>
  )
}

export default App
