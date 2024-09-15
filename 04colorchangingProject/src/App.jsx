import { useState } from "react";

function App() {
  // Rename the state to avoid conflict with the prop
  const [bgColor, setBgColor] = useState("red");

  return (
    <div className="h-screen w-full" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-wrap gap-3 justify-center rounded-lg shadow-lg bg-slate-100 px-5 py-4 w-11/12 fixed mx-10  bottom-5 ">
        <button
          className="shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-lg px-5"
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>
        <button
          className="shadow-lg bg-green-500 hover:bg-green-700 text-white font-bold py-4 rounded-lg px-5"
          onClick={() => setBgColor("green")}
        >
          Green
        </button>
        <button
          className="shadow-lg bg-red-500 hover:bg-red-700 text-white font-bold py-4 rounded-lg px-5"
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          className="shadow-lg bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 rounded-lg px-5"
          onClick={() => setBgColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="shadow-lg bg-pink-500 hover:bg-pink-700 text-white font-bold py-4 rounded-lg px-5"
          onClick={() => setBgColor("pink")}
        >
          PInk
        </button>
     

        <button
          className="shadow-lg bg-black hover:bg-black text-white font-bold py-4 rounded-lg px-5"
          onClick={() => setBgColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
