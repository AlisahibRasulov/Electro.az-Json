// import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '../../components/library/Button';
import { Eye, EyeSlash } from '../../svg';
import loginImage from '../../img/login-page/Mobile login-bro.png';

const Login = () => {
  const navigate = useNavigate();


    const[loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const login = () => {
      axios.post(`http://35.235.116.163:9095/login`, loginData).then((res)=>{
          console.log(res)
          if(res.data === true){
            localStorage.setItem('isLoggedIn', 'true');
            navigate("/");
            setLoginData(true);
            window.location.reload();
            // setUser(true);
          }else{
            alert("email ve yaxud password sehvdir")
          }
              
              // sessionStorage.setItem("token", res.data.data.token);
         
      });
     };
    const onHandleChange = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value});
       };

       const signupPage = () => {
       navigate("/signup");
            // setUser(false);
   };

   const [visible, setVisible] = useState(false);

   const togglePasswordVisibility = () => {
     setVisible(!visible);
   };

  //  ? login == true
     return (
    // <div className='login'>
    //         <div className='login-cart'>
    //           <div className="login-cart_header">Daxil ol</div>
    //           <div className="login-cart_content">
    //             <div className="login-cart_top"></div>
    //             <div className="login-cart_bottom"></div>
    //           </div>
    //         <input type="text" onChange={onHandleChange} className="login-email" name="email" placeholder="Email adresinizi daxil edin...."/>
    //         <input type="password" onChange={onHandleChange} className="login-password" name="password" placeholder="Şifrənizi daxil edin..."/>
    //         <Button onClick={login} className='login-btn'>Daxil ol</Button>  
            
    //         {/* <span>
    //         <Link to="/signup">Hesab Yarat</Link>
    //        </span> */}
    //        <button className='signupPageBtn' onClick={signupPage}>Hesab Yarat</button>
    //         </div>
            
    // </div>
    <div className='login'>
    <div className="container">
      <div className="login-content">
        <div className="login-img">
        <img  src={loginImage} alt="" />
        </div>
        
      <div className='login-cart'>
      <div className="login-cart_header">Daxil ol</div>
        <div className="login-cart_content">
      <div className="login-cart_top">
          <input type="text" onChange={onHandleChange} className="login-email" name="email" placeholder="Email adresinizi daxil edin...."/>
          <div className="password-content">
          <input type={visible ? 'text' : 'password'} onChange={onHandleChange} className="login-password" name="password" placeholder="Şifrənizi daxil edin..."/>
          <button className='password-btn' onClick={togglePasswordVisibility}>
          {visible ? <Eye/> : <EyeSlash/>}
          </button>
      </div>
          </div>
         <div className="login-cart_bottom">
         <Button onClick={login} className='login-btn'>Daxil ol</Button>  
         <button className='signupPageBtn' onClick={signupPage}>Hesab Yarat</button>
         </div>
        </div>
          </div>
      </div>
   
    </div>
          
          
  </div>
  )
}

export default Login