import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import About from './pages/About'

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/sign-up" element={ <Signup/> }/>
      <Route path="/sign-in" element={ <Signin/> }/>
    
    </Routes>
    </BrowserRouter>
  )
}
