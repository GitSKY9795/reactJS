import React from 'react'
import { Link } from 'react-router-dom'
import Course from '../pages/Course'
const Navbar = () => {
  return (
    <div 
      className="flex py-4 px-8 justify-between items-center font-bold bg-cover bg-center bg-cyan-600" 
      
    >
   <h2
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1770954179401-c069cf539be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "120px",   
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center",  
  }}
  className="text-xl font-extrabold  p-4 rounded-full px-6"
>
  Sumeet
</h2>

      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to='/Course'>Course Details</Link>
        
      </div>
    </div>
  )
}

export default Navbar