import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("App.jsx :: Get Account ::  Error", error);
       
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex content-between flex-wrap bg-gray-400 ">
     <div className="w-full block">
      <Header/>
      <main>
        {/* Outlet AAyega  */}
       Todo:  <Outlet />
      </main>
      <Footer/>
     </div>
    </div>
  ) : null;
}

export default App;
