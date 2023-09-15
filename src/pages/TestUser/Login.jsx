// import axios from "axios";
// import React, { useState } from 'react';
// import { useNavigate,Link } from "react-router-dom";

// const Login = ({setUser}) => {
//     const navigate = useNavigate();
//     const[loginData, setLoginData] = useState({
//         email: "",
//         password: "",
//     });

//    const login = () => {
//     axios.post(`http://35.235.116.163:9095/login`, loginData).then((res)=>{
//         console.log(res)
//             navigate("/");
//             setUser(true);
//             // sessionStorage.setItem("token", res.data.data.token);
       
//     });

//    };
//    const onHandleChange = (e) => {
//     setLoginData({...loginData, [e.target.name]:e.target.value});
//    };
//   return (
//     <div className="login">
//         <div className="login-cart">
//         <input type="text" name="email" onChange={onHandleChange}/>
//         <input type="password" name="password" onChange={onHandleChange}/>
//         <button onClick={login}>Login</button>
//         </div>
       
//     </div>
//   )
// }

// export default Login