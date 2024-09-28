import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import { Eye, EyeSlash } from "../../svg";
import loginImage from "../../img/login-page/Mobile login-bro.png";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css"; // Default theme
import "alertifyjs/build/css/themes/bootstrap.css"; // Bootstrap theme
import { LoginAlert } from "../../components/alerts/alerts";

// Customize alertify settings
alertify.set("notifier", "position", "top-right"); // Set the position of the alerts
alertify.set("notifier", "delay", 5); // Set the delay time in seconds

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const login = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (!loginData.email || !loginData.password) {
      setLoginError("Xanaları boş saxlamayın"); // Fields cannot be empty

      setTimeout(() => {
        setLoginError("");
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
    setLoginError(""); // Clear error on input change
  };

  const signupPage = () => {
    navigate("/signup");
  };

  const [visible, setVisible] = useState(false);
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
                <input
                  className={`login-email focus:ring-[#D10024] focus:border-[#D10024] focus:outline-none focus:ring-1 ${loginError && 'border-[#D10024]'}`}
                  type="email"
                  onChange={onHandleChange}
                  // className="login-email"
                  name="email"
                  placeholder="Email adresinizi daxil edin..."
                />
                {loginError && <span className="text-red-500">{loginError}</span>}
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
                {loginError && <span className="text-red-500">{loginError}</span>}
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
