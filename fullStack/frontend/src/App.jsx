import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from 'axios';
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get("/api/jokes").then((response) => {
      console.log(response.data);
      
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
        console.log("Error fetching jokes");
      });
  }, []); // Add an empty dependency array to prevent infinite re-renders

  return (
    <>
      <h1>My name is prince</h1>
      <p>Jokes Length : {jokes.length}</p>
      <ul>
       {
        jokes.map((joke) => (
          <pre  key={joke.id}>{joke.joke}</pre>
        ))
       }
      </ul>
    </>
  );
}

export default App;