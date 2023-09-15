// import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '../../components/library/Button';
const signupPageBtn = {
  // marginLeft: "90%",
  // position: "absolute",
  // top: "25px",
  border:"none",
}
const Login = ({setUser}) => {
  const navigate = useNavigate();


    const[loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const login = () => {
      axios.post(`http://35.235.116.163:9095/login`, loginData).then((res)=>{
          console.log(res)
              navigate("/");
              setUser(true);
              // sessionStorage.setItem("token", res.data.data.token);
         
      });
     };
    const onHandleChange = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value});
       };

       const signupPage = () => {
  
        // console.log(res)
       
          navigate("/signup");
            setUser(false);
            // sessionStorage.setItem("token", res.data.data.token);
       


   };
  return (
    <div className='login'>
            <div className='login-cart'>
            <input type="text" onChange={onHandleChange} className="login-email" name="email" placeholder="Email adresinizi daxil edin...."/>
            <input type="password" onChange={onHandleChange} className="login-password" name="password" placeholder="Şifrənizi daxil edin..."/>
            <Button onClick={login} className='login-btn'>Daxil ol</Button>  
            
            {/* <span>
            <Link to="/signup">Hesab Yarat</Link>
           </span> */}
           <button style={signupPageBtn} onClick={signupPage}>Qeydiyyatdan kec</button>
            </div>
            
    </div>
  )
}

export default Login