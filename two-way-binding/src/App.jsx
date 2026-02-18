import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState('');
  return (
    <div id='main'>
      <form onSubmit={(e)=>{
        e.preventDefault();
        alert("form submitted by " + first)
        setfirst('')
      }} >
        <input type="text" placeholder='Enter the details' value={first} onChange={(e) => setfirst(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
