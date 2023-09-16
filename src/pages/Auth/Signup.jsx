// import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate, } from "react-router-dom";
// import Input from '../../components/Input';
import Button from '../../components/library/Button';
import { Eye, EyeSlash } from '../../svg';

const Signup = () => {
  const navigate = useNavigate();
    const[signupData, setSignupData] = useState({
        username:"",
        email: "",
        password: "",
    });
    const [visible, setVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setVisible(!visible);
    };
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
  return (
    <div className='signup'>
            <div className='signup-cart'>
            <input type="text" onChange={onHandleChange} className="signup-username" name="username" placeholder="istifadəçi adını daxil edin..."/>
            <input type="text" onChange={onHandleChange} className="signup-email" name="email" placeholder="Email adresinizi daxil edin...."/>
            <div className="password-content">
            <input type={visible ? 'text' : 'password'} onChange={onHandleChange} className="signup-password" name="password" placeholder="Şifrənizi daxil edin..."/>
            <button className='password-btn' onClick={togglePasswordVisibility}>
            {visible ? <Eye/> : <EyeSlash/>}
            </button>
            </div>
            
            <Button onClick={register} className='signup-btn'>Qeydiyyat</Button> 
            <button className='loginPageBtn' onClick={loginPage}>Daxil ol</button>
           
            </div>
            
    </div>
  )
}

export default Signup