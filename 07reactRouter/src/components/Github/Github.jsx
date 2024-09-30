import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/princegethub")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, []);
  
  return (
    <div className="bg-gray-900 text-white font-bold text-xl text-center py-4 my-10">
      Github Followers :{data.followers}
      <img src={data.avatar_url} alt="Github img" className="h-52 mx-6"  />
    </div>
  );
};

export default Github;


export const githubInfoLoader= async()=>{
  let response = await fetch("https://api.github.com/users/princegethub")
  return response.json()
}