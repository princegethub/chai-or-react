import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 12;
  let [counter, setCounter] = useState(12);

  const addValue = () =>{
    if (counter === 20) {
      alert("You can't add more than 20");
      return ;
    }

    setCounter(pervCounter =>  pervCounter + 1);
    setCounter(pervCounter =>  pervCounter + 1);
    setCounter(pervCounter =>  pervCounter + 1);
    setCounter(pervCounter =>  pervCounter + 1);
    setCounter(pervCounter =>  pervCounter + 1);
    console.log("Clicked Button ",  counter);
    
  }

  const removeValue = ()=>{
    if (counter === 0) {
      alert("You can't decrese  less than 0");
      return ;
    }
  setCounter(counter-1);
    console.log("Clicked Button ",  counter);
  }
  return (
    <>
      <h1>Prince Mishra</h1>
      <h1>Conter Value is : {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
