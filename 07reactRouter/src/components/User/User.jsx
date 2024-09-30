import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const {id} =  useParams();

  return (
    <div className="bg-gray-900 text-white font-bold text-xl py-4 my-10">
      User : {id}
    </div>
  );
}

export default User;
