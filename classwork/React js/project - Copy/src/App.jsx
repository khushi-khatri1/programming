import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Aboutus from './website/pages/aboutus'
import Services from './website/pages/services'
import Contactus from './website/pages/contactus'
import Home from './website/pages/home'
import Add_employee from './admin/pages/Add_employee'
import Manage_employee from './admin/pages/Manage_employee'
import Alogin from './admin/pages/Alogin'
import Booking_details from './admin/pages/Booking_details'
import Registration from './website/pages/registration'
import Login from './website/pages/login'
import Dashboard from './admin/pages/dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {
          <BrowserRouter>
            <Routes>
              {/* admin */}
             
              <Route path="/admin" element={<Alogin/>}></Route>   
              <Route path="/add_employee" element={<Add_employee/>}></Route>
              <Route path="/manage_employee" element={<Manage_employee/>}></Route>
              <Route path="/booking_details" element={<Booking_details/>}></Route>
              <Route path="/dashboard" element={<Dashboard/>}></Route>

              {/* website */}
              <Route path="/" element={<Home/>}></Route>
              <Route path="/aboutus" element={<Aboutus/>}></Route>
              <Route path="/services" element={<Services/>}></Route>
              <Route path="/contactus" element={<Contactus/>}></Route>
              <Route path="/register" element={<Registration/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              

            </Routes>
          </BrowserRouter>
        }

    </>
  )
}

export default App
  