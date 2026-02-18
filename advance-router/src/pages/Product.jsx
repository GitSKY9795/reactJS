import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
     <div className='flex gap-10 justify-center font-bold text-2xl my-4'>
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      <h1>Product Page</h1>
    </div>
  )
}

export default Product
