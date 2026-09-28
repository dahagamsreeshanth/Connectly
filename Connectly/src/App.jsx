import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './frontend/HomePage'
import Register from './frontend/components/Register'
import Login from './frontend/components/Login'

function App() {
   
  return (
    <>
      <h1>Connectly</h1>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
