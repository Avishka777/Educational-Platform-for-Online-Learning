import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import About from './pages/About'
import Header from './components/Header'
import Footers from './components/Footer'
import AllCourse from './pages/AllCourse'
import MyCourse from './pages/MyCourse'

export default function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    
      <Route path="/" element={ <Home/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path="/sign-up" element={ <Signup/> }/>
      <Route path="/sign-in" element={ <Signin/> }/>
      <Route path="/allcourses" element={ <AllCourse/> }/>
      <Route path="/mycourses" element={ <MyCourse/> }/>
    
    </Routes>
    <Footers/>
    </BrowserRouter>
  )
}
