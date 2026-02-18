import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mens from './pages/Mens'
import Women from './pages/Women'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Course from './pages/Course'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen font-bolder w-full'>
      <Navbar />
      <Navbar2 />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/home' element={<Home />} />
  <Route path='/product' element={<Product />} />
  <Route path='/product/men' element={<Mens />} />
  <Route path='/product/women' element={<Women />} />
  <Route path='/Course' element={<Course />} />
  <Route path='/Course/:id' element={<Course />} />
  <Route path='*' element={<Notfound />} />
</Routes>
      <Footer />
    </div>
  )
}

export default App
