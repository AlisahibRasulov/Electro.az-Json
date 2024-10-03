import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import { Eye, EyeSlash } from "../../svg";
import loginImage from "../../img/login-page/Mobile login-bro.png";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css"; // Default theme
import "alertifyjs/build/css/themes/bootstrap.css"; // Bootstrap theme
import { LoginAlert } from "../../components/alerts/alerts";
import exclamation from "../../images/icons/icons8-exclamation-100.png"


// Customize alertify settings
alertify.set("notifier", "position", "top-right"); // Set the position of the alerts
alertify.set("notifier", "delay", 5); // Set the delay time in seconds

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "", 
    password: ""
  });
  const [loginError, setLoginError] = useState({
    email: "", 
    password: ""
  });
  const [visible, setVisible] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  const gmailRegex = /^[^\s@]+@gmail\.com$/;
  const pswRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  const validateInputs = () => {
    const {email, password } = loginData;
    let isValid = true;
    let errorObj = { email: "", password: "" };

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

    setLoginError(errorObj);
    return isValid;
  };

  const login = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!validateInputs()) {
      setTimeout(() => {
        setLoginError({ email: "", password: "" });
      }, 3000);
      return;
    }

    if (
      storedData &&
      storedData.email === loginData.email &&
      storedData.password === loginData.password
    ) {
      localStorage.setItem("login", "true");
      navigate("/");
    } else {
      setLoginError("");
      LoginAlert.fire({
        icon: "error",
        title: "Email və ya Şifrə yanlışdır",
      });
    }
  };

  const onHandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setLoginError({ ...loginError, [e.target.name]: "" }); // Clear error on input change
  };

  const signupPage = () => {
    navigate("/signup");
  };

 
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login-content">
          <div className="login-img">
            <img src={loginImage} alt="Login Illustration" />
          </div>
          <div className="login-cart">
            <div className="login-cart_header">Daxil ol</div>
            <div className="login-cart_content">
              <div className="login-cart_top">
              {loginError.email && (
                  <span className="text-[#D10024] text-[12px] font-[600] w-[350px] flex items-start">
                    <img src={exclamation} alt="" className="w-[15px]"/>
                  <span>
                    {loginError.email}
                  </span>
                  </span>
                )}
                <input
                  className={`login-email focus:ring-[#D10024] focus:border-[#D10024] focus:outline-none focus:ring-1 ${loginError && 'border-[#D10024]'}`}
                  type="email"
                  onChange={onHandleChange}
                  // className="login-email"
                  name="email"
                  placeholder="Email adresinizi daxil edin..."
                />
                  {loginError.password && (
                  <span className="text-[#D10024] text-[12px] font-[600] w-[350px] flex items-start">
                    <img src={exclamation} alt="" className="w-[15px]"/>
                  <span>
                    {loginError.password}
                  </span>
                  </span>
                )}
                <div className="password-content">
                  <input
                    type={visible ? "text" : "password"}
                    onChange={onHandleChange}
                    className={`login-password focus:ring-[#D10024] focus:border-[#D10024] focus:outline-none focus:ring-1 ${loginError && 'border-[#D10024]'}`}
                    name="password"
                    placeholder="Şifrənizi daxil edin..."
                  />
                  <button
                    className="password-btn"
                    onClick={togglePasswordVisibility}
                  >
                    {visible ? <Eye /> : <EyeSlash />}
                  </button>
                </div>
              </div>
              <div className="login-cart_bottom">
                <Button onClick={login} className="login-btn">
                  Daxil ol
                </Button>
                <button className="signupPageBtn" onClick={signupPage}>
                  Hesab Yarat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
