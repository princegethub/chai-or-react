import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();
  return (
    <div className='flex flex-col text-center bg-gray-900 text-white text-2xl font-bold'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="" className='h-96 object-cover w-96' />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  let response = await fetch('https://api.github.com/users/princegethub')
  return response.json()
}