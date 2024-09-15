import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name : "John",
    passion : "Web desginer",
    city : "New York"
  }
  let myObj2 = {
    name : "prince",
   
    city : "New York"
  }
  let  myArray = [1,2,3,4,5];


  return (
    <>

      <h1 className="mb-5 bg-green-500 text-black p-5 rounded-xl">Hello World</h1>
      <Card  person= {myObj}/>  
      <Card  person= {myObj2}/>  



    </>
  );
}

export default App;
