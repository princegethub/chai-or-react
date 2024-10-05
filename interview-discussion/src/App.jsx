import { useState } from 'react'

import './App.css'

function App() {
  console.log("App Render", Math.random());
  
  const [value ,setValue] =  useState({
    value:  0,
  })
  const clickme = () => {
    // console.log("cliked me");
    setValue({
      value: 0
    })
    
  }
  return (
    <>
     <h1>Mian value : {value.value}</h1>
     <button onClick={clickme}>Click to Multiplied by 5</button>
     {/* <h4>Multiplied Value : {multiply} </h4> */}
    </>
  )
}

export default App
