// import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate, } from "react-router-dom";
// import Input from '../../components/Input';
import Button from '../../components/library/Button';

const Signup = ({setUser}) => {
  const navigate = useNavigate();
    const[signupData, setSignupData] = useState({
        username:"",
        email: "",
        password: "",
    });
    const register = () => {
      axios.post(`http://35.235.116.163:9095/register`, signupData).then((res)=>{
          console.log(res)
         
              navigate("/login");
              setUser(true);
              // sessionStorage.setItem("token", res.data.data.token);
         
      });
  
     };
    const onHandleChange = (e) => {
        setSignupData({...signupData, [e.target.name]:e.target.value});
       };
  return (
    <div className='signup'>
            <div className='signup-cart'>
            <input type="text" onChange={onHandleChange} className="signup-username" name="username" placeholder="istifadəçi adını daxil edin..."/>
            <input type="text" onChange={onHandleChange} className="signup-email" name="email" placeholder="Email adresinizi daxil edin...."/>
            <input type="password" onChange={onHandleChange} className="signup-password" name="password" placeholder="Şifrənizi daxil edin..."/>
            <Button onClick={register} className='signup-btn'>Qeydiyyat</Button>  
            </div>
            
    </div>
  )
}

export default Signup