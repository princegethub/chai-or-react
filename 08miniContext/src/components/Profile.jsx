import React, { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);
  if (!user) return <div>Not logged in</div>;
  return <div>Welcome Mr. {user.username}</div>;
};

export default Profile;
