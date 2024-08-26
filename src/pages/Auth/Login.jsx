import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import { Eye, EyeSlash } from "../../svg";
import loginImage from "../../img/login-page/Mobile login-bro.png";

import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css"; // Default theme
import "alertifyjs/build/css/themes/bootstrap.css"; // Bootstrap theme

// Customize alertify settings
alertify.set("notifier", "position", "top-right"); // Set the position of the alerts
alertify.set("notifier", "delay", 5); // Set the delay time in seconds

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.email === loginData.email &&
      storedData.password === loginData.password
    ) {
      localStorage.setItem("login", "true");
      navigate("/");
    } else {
      alertify.error("Username or password incorrect!");
    }
  };

  const onHandleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const signupPage = () => {
    navigate("/signup");
  };

  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  //  ? login == true
  return (
    <div className="login">
      <div className="container">
        <div className="login-content">
          <div className="login-img">
            <img src={loginImage} alt="" />
          </div>
          <div className="login-cart">
            <div className="login-cart_header">Daxil ol</div>
            <div className="login-cart_content">
              <div className="login-cart_top">
                <input
                  type="text"
                  onChange={onHandleChange}
                  className="login-email"
                  name="email"
                  placeholder="Email adresinizi daxil edin...."
                />
                <div className="password-content">
                  <input
                    type={visible ? "text" : "password"}
                    onChange={onHandleChange}
                    className="login-password"
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
