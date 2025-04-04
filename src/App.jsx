import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Chart from './components/Chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>EPICS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='bg-amber-500'>
          count is {count}
        </button>
      </div>
      <Chart />
    </>
  )
}

export default App
