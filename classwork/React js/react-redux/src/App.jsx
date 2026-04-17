import { useState } from 'react'
import './App.css'
import Mytask from './feature/Mytask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mt-5'>
        <Mytask/>
      </div>
    </>
  )
}

export default App
