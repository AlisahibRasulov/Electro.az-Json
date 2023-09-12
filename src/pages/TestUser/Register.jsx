// import axios from "axios";
// import React, { useState } from 'react';
// import { useNavigate,Link } from "react-router-dom";

// const Register = ({setUser}) => {
//     const navigate = useNavigate();
//     const[registerData, setRegisterData] = useState({
//         username: "",
//         password: "",
//         email:"",
//         gender:"",
        
//     });

//    const register = () => {
//     axios.post(`http://34.125.216.115:9095/api/user/register `, registerData).then((res)=>{
//         console.log(res)
       
//             navigate("/login");
//             setUser(true);
//             // sessionStorage.setItem("token", res.data.data.token);
       
//     });

//    };
//    const onHandleChange = (e) => {
//     setRegisterData({...registerData, [e.target.name]:e.target.value});
//    };
//   return (
//     <div className="register">
//         <div className="register-cart">
//         <input type="text" name="username" onChange={onHandleChange}/>
//         <input type="password" name="password" onChange={onHandleChange}/>
//         <input type="text" name="email" onChange={onHandleChange}/>
//         <input type="text" name="gender" onChange={onHandleChange}/>
//         {/* <select name="gender"  >
//     <option >Select gender</option>
//     <option value="MALE"  onChange={onHandleChange}>Male</option>
//     <option value="FEMALE"  onChange={onHandleChange}>Female</option>
//   </select> */}
//         <button onClick={register}>Login</button>
//         </div>
       
//     </div>
//   )
// }

// export default Register