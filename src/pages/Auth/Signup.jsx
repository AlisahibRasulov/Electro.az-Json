// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/library/Button";
// import { Eye, EyeSlash } from "../../svg";
// import signupImage from "../../img/signup-page/Mobile login-pana.png";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [signupData, setSignupData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [signupError, setSignupError] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [emailError, setEmailError] = useState("");
//   const [pswError, setPswError] = useState("");
//   const [visible, setVisible] = useState(false);
//   const emailRegex = /^(.+)@(.+)$/;
//   const pswRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

//   const validateInputs = () => {
//     const { username, email, password } = signupData;

//     if (!username || !email || !password) {
//       setSignupError("Xanaları boş saxlamayın");
//       return false;
//     }

//     if (!emailRegex.test(email)) {
//       // setEmailError("@ və . simvolu olmalıdır");
//       setSignupError("@ və . simvolu olmalıdır");
//       return false;
//     }

//     if (!pswRegex.test(password)) {
//       setSignupError("Şifrə 8-16 simvoldan ibarət olmalı, böyük və kiçik hərflər ehtiva etməlidir.");
//       // setPswError("Şifrə 8-16 simvoldan ibarət olmalı, böyük və kiçik hərflər ehtiva etməlidir.");
//       return false;
//     }

//     return true;
//   };

//   const handleChange = (e) => {
//     setSignupData({ ...signupData, [e.target.name]: e.target.value });
//     setSignupError("");
//   };

//   const register = () => {
//     localStorage.setItem("userData", JSON.stringify(signupData));
//     if (!validateInputs()) {
//       setTimeout(() => {
//         setSignupError({ username: "", email: "", password: "" });
//         // setEmailError("");
//         // setPswError("");
//       }, 3000);
//       return;
//     }
//     navigate("/login");

//   };

//   const togglePasswordVisibility = () => {
//     setVisible(!visible);
//   };

//   return (
//     <div className="signup">
//       <div className="container">
//         <div className="signup-content">
//           <div className="signup-img">
//             <img src={signupImage} alt="Signup" />
//           </div>
//           <div className="signup-cart">
//             <div className="signup-cart_header">Qeydiyyat</div>
//             <div className="signup-cart_content">
//               <div className="signup-cart_top">
//                 {signupError.username && <span className="text-red-500 text-[12px] font-[600]">{signupError}</span>}
//                 <input
//                   type="text"
//                   onChange={handleChange}
//                   className="signup-username"
//                   name="username"
//                   placeholder="İstifadəçi adını daxil edin..."
//                 />
//                 {signupError.email && <span className="text-red-500 text-[12px] font-[600]">{signupError}</span>}
//                 {/* {emailError && <span className="text-red-500 text-[12px] font-[600]">{emailError}</span>} */}
//                 <input
//                   type="email"
//                   onChange={handleChange}
//                   className="signup-email"
//                   name="email"
//                   placeholder="Email adresinizi daxil edin..."
//                 />
//                 {signupError.password && <span className="text-red-500 text-[12px] font-[600]">{signupError}</span>}
//                 {/* {pswError && <span className="text-red-500 text-[12px] font-[600]">{pswError}</span>} */}
//                 <div className="password-content">
//                   <input
//                     type={visible ? "text" : "password"}
//                     onChange={handleChange}
//                     className="signup-password"
//                     name="password"
//                     placeholder="Şifrənizi daxil edin..."
//                   />
//                   <button
//                     type="button"
//                     className="password-btn"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {visible ? <Eye /> : <EyeSlash />}
//                   </button>
//                 </div>
//               </div>
//               <div className="signup-cart_bottom">
//                 <Button onClick={register} className="signup-btn">
//                   Qeydiyyat
//                 </Button>
//                 <button
//                   className="loginPageBtn"
//                   onClick={() => navigate("/login")}
//                 >
//                   Daxil ol
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/library/Button";
// import { Eye, EyeSlash } from "../../svg";
// import signupImage from "../../img/signup-page/Mobile login-pana.png";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [signupData, setSignupData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [signupError, setSignupError] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [visible, setVisible] = useState(false);
//   // const emailRegex = /^(.+)@(.+)$/;
//   // const emailRegex = /^(.+)@(.+)\..+$/; 
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; 
//   const gmailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{3,}$/;
//   // const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,4}$/;
//   const pswRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

//   const validateInputs = () => {
//     const { username, email, password } = signupData;
//     let isValid = true;
//     let errorObj = { username: "", email: "", password: "" };

//     // Validate username
//     if (!username) {
//       errorObj.username = "İstifadəçi adı boş ola bilməz";
//       isValid = false;
//     }

//     // Validate email
//     if (!email) {
//       errorObj.email = "Email boş ola bilməz";
//       isValid = false;
//     } else if (!emailRegex.test(email)||!gmailRegex.test(email)) {
//       errorObj.email = "@ və . simvolu olmalıdır";
//       isValid = false;
//     }

//     // Validate password
//     if (!password) {
//       errorObj.password = "Şifrə boş ola bilməz";
//       isValid = false;
//     } else if (!pswRegex.test(password)) {
//       errorObj.password =
//         "Şifrə 8-16 simvoldan ibarət olmalı,böyük və kiçik hərflər ehtiva etməlidir.";
//       isValid = false;
//     }

//     setSignupError(errorObj);
//     return isValid;
//   };

//   const handleChange = (e) => {
//     setSignupData({ ...signupData, [e.target.name]: e.target.value });
//     setSignupError({ ...signupError, [e.target.name]: "" }); // Clear individual field error on input change
//   };

//   const register = () => {
//     if (!validateInputs()) {
//       setTimeout(() => {
//         setSignupError({ username: "", email: "", password: "" });
//       }, 3000);
//       return;
//     }

//     localStorage.setItem("userData", JSON.stringify(signupData));
//     navigate("/login");
//   };

//   const togglePasswordVisibility = () => {
//     setVisible(!visible);
//   };

//   return (
//     <div className="signup">
//       <div className="container">
//         <div className="signup-content">
//           <div className="signup-img">
//             <img src={signupImage} alt="Signup" />
//           </div>
//           <div className="signup-cart">
//             <div className="signup-cart_header">Qeydiyyat</div>
//             <div className="signup-cart_content">
//               <div className="signup-cart_top">
//                 {signupError.username && (
//                   <span className="text-red-500 text-[12px] font-[600]">
//                     {signupError.username}
//                   </span>
//                 )}
//                 <input
//                   type="text"
//                   value={signupData.username}
//                   onChange={handleChange}
//                   className={`signup-username ${
//                     signupError.username ? "border-red-500" : ""
//                   }`}
//                   name="username"
//                   placeholder="İstifadəçi adını daxil edin..."
//                 />

//                 {signupError.email && (
//                   <span className="text-red-500 text-[12px] font-[600]">
//                     {signupError.email}
//                   </span>
//                 )}

//                 <input
//                   type="email"
//                   value={signupData.email}
//                   onChange={handleChange}
//                   className={`signup-email ${
//                     signupError.email ? "border-red-500" : ""
//                   }`}
//                   name="email"
//                   placeholder="Email adresinizi daxil edin..."
//                 />
//                 {signupError.password && (
//                   <span className="text-red-500 text-[12px] font-[600] w-[350px]">
//                     {signupError.password}
//                   </span>
//                 )}
//                 <div className="password-content">
//                   <input
//                     type={visible ? "text" : "password"}
//                     value={signupData.password}
//                     onChange={handleChange}
//                     className={`signup-password ${
//                       signupError.password ? "border-red-500" : ""
//                     }`}
//                     name="password"
//                     placeholder="Şifrənizi daxil edin..."
//                   />
//                   <button
//                     type="button"
//                     className="password-btn"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {visible ? <Eye /> : <EyeSlash />}
//                   </button>
//                 </div>
//               </div>
//               <div className="signup-cart_bottom">
//                 <Button onClick={register} className="signup-btn">
//                   Qeydiyyat
//                 </Button>
//                 <button
//                   className="loginPageBtn"
//                   onClick={() => navigate("/login")}
//                 >
//                   Daxil ol
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import { Eye, EyeSlash } from "../../svg";
import signupImage from "../../img/signup-page/Mobile login-pana.png";
import exclamation from "../../images/icons/icons8-exclamation-100.png"

const Signup = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [signupError, setSignupError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const gmailRegex = /^[^\s@]+@gmail\.com$/;
  const pswRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  const validateInputs = () => {
    const { username, email, password } = signupData;
    let isValid = true;
    let errorObj = { username: "", email: "", password: "" };

    // Validate username
    if (!username) {
      errorObj.username = "İstifadəçi adı boş ola bilməz";
      isValid = false;
    }

    // Validate email with ternary
    if (!email) {
      errorObj.email = "Email boş ola bilməz";
      isValid = false;
    } else {
      const isEmailValid = email.includes("gmail") 
        ? gmailRegex.test(email) 
        : emailRegex.test(email);

      if (!isEmailValid) {
        errorObj.email = email.includes("gmail")
          ? "Lütfən, düzgün e-poçt ünvanı daxil edin (Məs: сustomer@domain.az)."
          : "Lütfən, düzgün e-poçt ünvanı daxil edin (Məs: сustomer@domain.az).";
        isValid = false;
      }
    }

    // Validate password
    if (!password) {
      errorObj.password = "Şifrə boş ola bilməz";
      isValid = false;
    } else if (!pswRegex.test(password)) {
      errorObj.password =
        "Şifrə 8-16 simvoldan ibarət olmalı, böyük və kiçik hərflər ehtiva etməlidir.";
      isValid = false;
    }

    setSignupError(errorObj);
    return isValid;
  };

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    setSignupError({ ...signupError, [e.target.name]: "" }); // Clear individual field error on input change
  };

  const register = () => {
    if (!validateInputs()) {
      setTimeout(() => {
        setSignupError({ username: "", email: "", password: "" });
      }, 3000);
      return;
    }

    localStorage.setItem("userData", JSON.stringify(signupData));
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-img">
            <img src={signupImage} alt="Signup" />
          </div>
          <div className="signup-cart">
            <div className="signup-cart_header">Qeydiyyat</div>
            <div className="signup-cart_content">
              <div className="signup-cart_top">
                {signupError.username && (
                  <span className="text-[#D10024] text-[12px] font-[600] w-[350px] flex items-start">
                    <img src={exclamation} alt="" className="w-[15px]"/>
                  <span>
                    {signupError.username}
                  </span>
                  </span>
                )}
                <input
                  type="text"
                  value={signupData.username}
                  onChange={handleChange}
                  className="signup-username"
                  name="username"
                  placeholder="İstifadəçi adını daxil edin..."
                />

                {signupError.email && (
                  <span className="text-[#D10024] text-[12px] font-[600] w-[350px] flex items-start">
                    <img src={exclamation} alt="" className="w-[15px]"/>
                  <span>
                    {signupError.email}
                  </span>
                  </span>
                )}

                <input
                  type="email"
                  value={signupData.email}
                  onChange={handleChange}
                  className= "signup-email"
                  name="email"
                  placeholder="Email adresinizi daxil edin..."
                />
                {signupError.password && (
                  <span className="text-[#D10024] text-[12px] font-[600] w-[350px] flex items-start">
                    <img src={exclamation} alt="" className="w-[15px]"/>
                  <span>
                    {signupError.password}
                  </span>
                  </span>
                )}
                <div className="password-content">
                  <input
                    type={visible ? "text" : "password"}
                    value={signupData.password}
                    onChange={handleChange}
                    className="signup-password"
                    name="password"
                    placeholder="Şifrənizi daxil edin..."
                  />
                  <button
                    type="button"
                    className="password-btn"
                    onClick={togglePasswordVisibility}
                  >
                    {visible ? <Eye /> : <EyeSlash />}
                  </button>
                </div>
              </div>
              <div className="signup-cart_bottom">
                <Button onClick={register} className="signup-btn">
                  Qeydiyyat
                </Button>
                <button
                  className="loginPageBtn"
                  onClick={() => navigate("/login")}
                >
                  Daxil ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
