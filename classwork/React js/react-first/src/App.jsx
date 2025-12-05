import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React js</h1>
    </>
  )
}

 export function App1(){
   let n1 = 10
  let n2 = 20
  return(
      <>
      <h1>{n1+n2}</h1>
      </>
    )
}

export function App2(){
  let n = 50
  return(
    <>
    <h2>value of n :{n}</h2>
    </>
  )
}
export default App
