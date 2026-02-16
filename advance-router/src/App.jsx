import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div className='bg-black text-white h-screen font-bolder w-full'>
      <Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/home' element={<Home />} />
  <Route path='/product' element={<Product />} />
<Route path='*' element={<Notfound />} />
</Routes>
      <Footer />
    </div>
  )
}

export default App
