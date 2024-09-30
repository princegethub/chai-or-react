import { useCallback , useEffect,  useState , useRef} from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerate = useCallback(() => {
    console.log(numberAllowed);
    console.log(charAllowed);
    
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    
      for (let i = 1; i <= length; i++) {
        password += str.charAt(Math.floor(Math.random() * str.length +1));
      }
  
    setpassword(password);
  }, [length, numberAllowed, charAllowed, setpassword]);
  
  //UseRef 
  let passRef =  useRef(null);

  const copyPasswordToClipborad = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passwordGenerate();
  },[length, numberAllowed, charAllowed, passwordGenerate]);



  return (
    <>
      <div className="w-full max-w-screen-md mx-auto py-5 px-8 my-8 shadow-md rounded-lg text-orange-500 bg-gray-800">
        <h1 className="text-center text-3xl text-white mb-4">
          Paasword Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="w-full p-4 text-lg text-gray-700 bg-gray-100 rounded-l-lg outline-none"
            placeholder="password"
            ref={passRef}
            readOnly
          />
          <button onClick={copyPasswordToClipborad} className="outline-none bg-blue-500 text-white px-10 text-xl cursor-pointer shrink-0">
            Copy
          </button>
        </div>

        <div className="flex items-center gap-x-5 text-2xl ">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
            <label className="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
               defaultChecked= {numberAllowed}
              onClick={()=> setnumberAllowed((prev)=> !prev)}
            />
            <label className="">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked= {charAllowed}
              onClick={() => setcharAllowed((prev)=> !prev) }
            />
            <label className="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
