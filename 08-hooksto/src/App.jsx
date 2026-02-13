import React from 'react'
import { useState } from 'react'
const App = () => {
/*  const [first, setfirst] = useState(0)
  const [one, second] = useState("Sumeet")
  function setNUM(){n
    setfirst(10)

    }
    function setName(){
      second("rahul");
    }*/
  /* const [first, setfirst] = useState(0)
   function increase(){
    setfirst(first+1);
   }
 const decrease=()=>{
       
    setfirst(first-1);
   }*/
  const [first, setfirst] = useState({name:"Sumeet",age:10})
  const btnclicketd =()=>{
    const newUser ={...first}
 newUser.name ='Rahul'
 setfirst(newUser)
  }
  return (
    
    <div>
      
      <h5>The name is {first.name} and age is {first.age}</h5>
   <button onClick={btnclicketd}>Click me</button>
   
    </div>
  )
}

export default App
