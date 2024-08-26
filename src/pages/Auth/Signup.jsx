import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/library/Button";
import { Eye, EyeSlash } from "../../svg";
import signupImage from "../../img/signup-page/Mobile login-pana.png";

const Signup = () => {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const register = () => {
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
                <input
                  type="text"
                  onChange={handleChange}
                  className="signup-username"
                  name="username"
                  placeholder="İstifadəçi adını daxil edin..."
                />
                <input
                  type="email"
                  onChange={handleChange}
                  className="signup-email"
                  name="email"
                  placeholder="Email adresinizi daxil edin..."
                />
                <div className="password-content">
                  <input
                    type={visible ? "text" : "password"}
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
