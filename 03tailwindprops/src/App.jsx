import { useState } from 'react'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  const myuser={
    username:"shubham kumar",
    age:20,

}

  return (
    <>
      <h1 className='bg-green-400 text-black' >helo world</h1>
      <Card name="shubham" />
      <Card obj={myuser} btntext="open me"/>
      <Card obj={myuser}/>
      
      
    </>
  )
}

export default App
