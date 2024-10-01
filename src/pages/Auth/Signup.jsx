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

  const [signupError, setSignupError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pswError, setPswError] = useState("");
  const [visible, setVisible] = useState(false);
  const emailRegex = /^(.+)@(.+)$/;
  const pswRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

  const validateInputs = () => {
    const { username, email, password } = signupData;

    if (!username || !email || !password) {
      setSignupError("Xanaları boş saxlamayın");
      return false;
    }
    
    if (!emailRegex.test(email)) {
      setEmailError("@ və . simvolu olmalıdır");
      return false;
    }

    if (!pswRegex.test(password)) {
      setPswError("Şifrə 8-16 simvoldan ibarət olmalı, böyük və kiçik hərflər ehtiva etməlidir.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
    setSignupError("");
  };



  const register = () => {
    localStorage.setItem("userData", JSON.stringify(signupData));
    if (!validateInputs()) {
      setTimeout(() => {
        setSignupError("");
        setEmailError("");
        // setPswError("");
      }, 3000);
      return;
    }
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
                {signupError && <span className="text-red-500 text-[12px] font-[600]">{signupError}</span>}
                <input
                  type="text"
                  onChange={handleChange}
                  className="signup-username"
                  name="username"
                  placeholder="İstifadəçi adını daxil edin..."
                />
                {signupError && <span className="text-red-500 text-[12px] font-[600]">{signupError}</span>}
                {emailError && <span className="text-red-500 text-[12px] font-[600]">{emailError}</span>}
                <input
                  type="email"
                  onChange={handleChange}
                  className="signup-email"
                  name="email"
                  placeholder="Email adresinizi daxil edin..."
                />
                {signupError && <span className="text-red-500 text-[12px] font-[600]">{signupError}</span>}
                {pswError && <span className="text-red-500 text-[12px] font-[600]">{pswError}</span>}
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
