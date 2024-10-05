import React, {useState, useEffect} from "react";
import  axios from 'axios';


const FetchData = (urlPath) => {
  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        let response = await axios.get(urlPath);
        console.log("response: ", response.data);
        setproducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return { products, error, loading };
};

export default FetchData;
