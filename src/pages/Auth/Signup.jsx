// import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate, } from "react-router-dom";
// import Input from '../../components/Input';
import Button from '../../components/library/Button';
import { Eye, EyeSlash,PlayLogo } from '../../svg';

import signupImage from '../../img/signup-page/Mobile login-pana.png';

const Signup = () => {
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
              // setUser(true);
         
      })
      .catch((error) => {
        if (error.response && error.response.status === 400 ) {
          // Handle the 400 Bad Request error here
          // alert("Bu email artiq istifade olunub");
          if (error.response.data && error.response.data.message) {
            // Extract and display the error message
            alert("Bu email artiq istifade olunub");
          } else {
            alert("Melumatlari duzgun daxil etdiyinize emin olun");
          }
        } else {
          // Handle other errors here
          console.error("Error:", error);
        }
      })
     };
    const onHandleChange = (e) => {
        setSignupData({...signupData, [e.target.name]:e.target.value});
       };
       const loginPage = () => {
        navigate("/login");
             // setUser(false);
    };

    const [visible, setVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setVisible(!visible);
    };
  return (
    <div className='signup'>
      <div className="container">
        <div className="signup-content">
          <div className="signup-img">
          <img  src={signupImage} alt="" />
          </div>
          
        <div className='signup-cart'>
        <div className="signup-cart_header">Qeydiyyat</div>
          <div className="signup-cart_content">
        <div className="signup-cart_top">
            <input type="text" onChange={onHandleChange} className="signup-username" name="username" placeholder="İstifadəçi adını daxil edin..."/>
            <input type="text" onChange={onHandleChange} className="signup-email" name="email" placeholder="Email adresinizi daxil edin...."/>
            <div className="password-content">
            <input type={visible ? 'text' : 'password'} onChange={onHandleChange} className="signup-password" name="password" placeholder="Şifrənizi daxil edin..."/>
            <button className='password-btn' onClick={togglePasswordVisibility}>
            {visible ? <Eye/> : <EyeSlash/>}
            </button>
        </div>
            </div>
           <div className="signup-cart_bottom">
           <Button onClick={register} className='signup-btn'>Qeydiyyat</Button> 
            <button className='loginPageBtn' onClick={loginPage}>Daxil ol</button>
           </div>
          </div>
            </div>
        </div>
     
      </div>
            
            
    </div>
  )
}

export default Signup