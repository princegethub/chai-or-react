import { useState, useEffect } from "react";
import axios, { isCancel } from "axios";
import "./App.css";

function App() {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  
  useEffect(() => {
    const controller = new AbortController();
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        let response = await axios.get(
          "/api/products?search="+search,
            {
              signal: controller.signal,
            }
        );
        console.log("response: ", response.data);
        setproducts(response.data);
        setLoading(false);

      } catch (error) {
        if (isCancel(error)) {
          console.log("Request Cancle", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();



    //Clean up 
    return () => {
      controller.abort();
    }
  }, [search]);

  if (error) {
    return <h1>Error fetching products</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="app">Chai or Code</div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h1>Number of products are : {products.length}</h1>
    </>
  );
}

export default App;
