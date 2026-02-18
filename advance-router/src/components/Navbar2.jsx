import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex p-5 gap-1.5 justify-center bg-amber-400'>
      <button className="active:scale-75 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate('/')}>Return to HomePage</button>
    <button  className=" active:scale-75 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2" onClick={() => navigate(-1)}>Back</button>
    <button className='bg-amber-800 px-4 py-2 rounded active:scale-50 ml-2' onClick={()=>navigate(+1)} >Next</button>
    </div>
  )
}

export default Navbar2
