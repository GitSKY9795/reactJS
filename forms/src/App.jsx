import React from 'react'

const App = () => {
  const submitHnadler=()=>{

   console.log
   ("Form submitted");
  }
  return (
    <div id='main'>
<form onSubmit={(e)=>{
 e.preventDefault();
 submitHnadler();
}}>
  <input type="text" placeholder='Enter your name' />
  <button>Submit</button>
</form>
    </div>
  )
}

export default App
