import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config.js'
import { Route, Routes } from 'react-router-dom'

//App Components
import Nav from './components/Nav'
import Search from './components/Search'
import PhotoList from './components/PhotoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Nav />
      <Search />
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div> 
  )
}

export default App
