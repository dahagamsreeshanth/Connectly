import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './frontend/HomePage'
import Register from './frontend/components/Register'
import Login from './frontend/components/Login'
import NavBar from './frontend/NavBar'
import Footer from './frontend/Footer'
import About from './frontend/components/About'

function App() {
  return (
    <BrowserRouter>
  <div className="app">
     <main className="main-content">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/about" element={<About />} />

      </Routes>
      </main>
      <Footer/>
      </div>

    </BrowserRouter>
  )
}

export default App