import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]


  return (
    <>
      <h1 className='bg-orange-400 text-black
      p-4 rounded-xl' >Tailwind </h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="Ashish" />
    </>
  )
}

export default App
