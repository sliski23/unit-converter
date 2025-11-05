import { useState, useEffect } from 'react'
import './App.css'
import Units from './components/Units'

function App() {
  const [current, setCurrent] = useState(null)
  const [error, setError] = useState(null)

  return (
    <>
      <h1>Unit converter</h1>

      <Units />

    </>
  )
}

export default App
