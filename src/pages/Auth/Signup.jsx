import React from 'react';
import { useState } from 'react';
// import Input from '../../components/Input';
import Button from '../../components/library/Button';

const Signup = () => {
    const[signupData, setSignupData] = useState({
        username:"",
        email: "",
        password: "",
    });
    const onHandleChange = (e) => {
        setSignupData({...signupData, [e.target.name]:e.target.value});
       };
  return (
    <div className='signup'>
            <div className='signup-cart'>
            <input type="text" onChange={onHandleChange} className="signup-username" name="username" placeholder="istifadəçi adını daxil edin..."/>
            <input type="text" onChange={onHandleChange} className="signup-email" name="email" placeholder="Email adresinizi daxil edin...."/>
            <input type="password" onChange={onHandleChange} className="signup-password" name="password" placeholder="Şifrənizi daxil edin..."/>
            <Button className='signup-btn'>Qeydiyyat</Button>  
            </div>
            
    </div>
  )
}

export default Signup