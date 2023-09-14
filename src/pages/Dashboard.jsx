import React from 'react';
import { useNavigate } from "react-router-dom";
// import { Route, Routes } from "react-router-dom"
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Home from "./Home";
// import Products from "./Products";
// import About from "./About";

const logoutBtn = {
  marginLeft: "90%",
  position: "absolute",
  top: "25px",
}


const Dashboard = ({ setUser }) => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
    setUser(false);
    // sessionStorage.removeItem("token");
  };
  return (
    <div className='dashboard'>
      <Header/>
      <Navbar/>
      <button style={logoutBtn} onClick={logOut}>
    Logout
      </button>
      <Footer/>
    </div>
  )
}

export default Dashboard