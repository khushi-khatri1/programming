import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Aheader from './admin/components/Aheader'
import Afooter from './admin/components/Afooter'
import Manage_products from './admin/manage_products'
import Add_products from './admin/add_products'
import Dashboard from './admin/dashboard'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/manage' element={<Manage_products/>}></Route>
          <Route path='/add' element={<Add_products/>}></Route>
          <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App
