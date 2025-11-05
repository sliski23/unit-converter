import { useState, useEffect } from 'react'
import './App.css'
import Selection from './components/Selection'

function App() {
  const [current, setCurrent] = useState(null)
  const [error, setError] = useState(null)

  return (
    <>
      <h1>Unit converter</h1>

      <Selection />

    </>
  )
}

export default App
