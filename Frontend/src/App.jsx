import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import axios from 'axios'
import HomePage from './components/home'
import Navbar from './components/navbar'

function App() {
  // const [count, setCount] = useState(0)
  // const [array, setArray] = useState([])

  // const fetchApi = async () => {
  //   const response = await axios.get('http://localhost:8080/api/users')
  //   console.log(response.data.users)
  //   setArray(response.data.users)
  // }
  // useEffect(() => {
  //   fetchApi()
  // }, [])

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <HomePage />
      </div>
    </div>
  )
}

export default App
