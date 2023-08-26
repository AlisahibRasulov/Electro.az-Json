import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/library/Button';
const Login = () => {
    const[loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const onHandleChange = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value});
       };
  return (
    <div className='login'>
            <div className='login-cart'>
            <input type="text" onChange={onHandleChange} className="login-email" name="email" placeholder="Email adresinizi daxil edin...."/>
            <input type="password" onChange={onHandleChange} className="login-password" name="password" placeholder="Şifrənizi daxil edin..."/>
            <Button className='login-btn'>Daxil ol</Button>  
            
            <span>
            <Link to="/signup">Hesab Yarat</Link>
           </span>
            </div>
            
    </div>
  )
}

export default Login