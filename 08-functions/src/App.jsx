import React from 'react'

const App = () => {
   function clickedbtn(){
    alert("You have clicked the button")
   }
   function mouseentered(){
    console.log("Mous aagya hai sale");
    
   }
  return (
    <div>

      <h5>Here are you</h5>
      <button className='button ' onMouseEnter={mouseentered} onDoubleClick={clickedbtn} >CLicke here</button>
      <button  className='button'>Explore this</button>
    </div>
  )
}

export default App
