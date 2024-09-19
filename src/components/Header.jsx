// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { PlayLogo } from "../svg";

// const Header = () => {
//   const [isLogin, setLogin] = useState(false);
//   const [username, setUsername] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("login") === "true";
//     setLogin(loginStatus);

//     const userData = JSON.parse(localStorage.getItem("userData"));
//     setUsername(userData?.username || "");
//   }, [location]);

//   const logOut = () => {
//     localStorage.setItem("login", "false");
//     setLogin(false);
//     navigate("/login");
//   };

//   // const logIn = () => {
//   //   navigate("/login");
//   // };

//   const navigateTo = (path) => {
//     navigate(path);
//   };

//   const like = useSelector((state) => state.like.length);
//   const basket = useSelector((state) => state.basket.length);

//   return (
//     <>
//       <div className="header">
//         <div className="header_top">
//           <div className="header_logo">
//             <PlayLogo className="play-logo" />
//             <div className="logo-name">
//               <a href="/">Electro</a>
//             </div>
//           </div>
//           <ul className="header_menu">
//             <li className="menu_item">
//               <NavLink className="menu_link" to={"/"}>
//                 Əsas Səhifə
//               </NavLink>
//             </li>
//             <li className="menu_item">
//               <NavLink className="menu_link" to={"/products"}>
//                 Məhsullar
//               </NavLink>
//             </li>
//             <li className="menu_item">
//               <NavLink className="menu_link" to={"/about"}>
//                 Haqqımızda
//               </NavLink>
//             </li>
//           </ul>
//           <div className="header_user">
//             {isLogin ? (
//               <div className="flex items-center">
//                 {username && (
//                   <span className="username_display font-[600] mr-[10px]">
//                     {username}
//                   </span>
//                 )}
//                 <button className="login_btn" onClick={logOut}>
//                   Çıxış et
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <button
//                   className="login_btn"
//                   onClick={() => navigateTo("/login")}
//                 >
//                   Daxil ol
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="line"></div>
//         <div className="header_bottom">
//           <div className="header_catalog">
//             <img
//               className="menu_img"
//               src="../../images/icons/category.png"
//               alt=""
//             />
//             <div className="menu_title">Kataloq</div>
//           </div>
//           <div className="header_search">
//             <input
//               className="search_input focus:ring-slate-900 "
//               type="text"
//               placeholder="Axtarış..."
//             />
//             <button className="search_btn">Axtar</button>
//           </div>
//           <div className="header_icons">
//             <div className="header_like relative">
//               <button
//                 to="/like"
//                 className="like_header"
//                 onClick={() => navigateTo("/like")}
//               >
//                 <span className="like_header-counter px-[4px] py-[2px] bg-[#D10024] text-[#fff] text-[10px] rounded-[5px] absolute top-[-5px] right-[-5px]">
//                   {like}
//                 </span>
//                 <img src="../images/icons/like.png" alt="" />
//               </button>
//             </div>
//             <div className="line2"></div>
//             <div className="header_basket relative">
//               <button
//                 to="/basket"
//                 className="basket_header"
//                 onClick={() => navigateTo("/basket")}
//               >
//                 <span className="basket_header-counter px-[4px] py-[2px] bg-[#D10024] text-[#fff] text-[10px] rounded-[5px] absolute top-[-5px] right-[-5px]">
//                   {basket}
//                 </span>
//                 <img src="../images/icons/cart.png" alt="" />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="line"></div>
//       </div>
//       <Outlet />
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { PlayLogo } from "../svg";

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State for sidebar
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("login") === "true";
    setLogin(loginStatus);

    const userData = JSON.parse(localStorage.getItem("userData"));
    setUsername(userData?.username || "");
  }, [location]);

  const logOut = () => {
    localStorage.setItem("login", "false");
    setLogin(false);
    navigate("/login");
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  const like = useSelector((state) => state.like.length);
  const basket = useSelector((state) => state.basket.length);

  return (
    <>
      <div className="header">
        <div className="header_top">
          <div className="header_logo">
            <PlayLogo className="play-logo" />
            <div className="logo-name">
              <a href="/">Electro</a>
            </div>
          </div>
          <ul className="header_menu">
            <li className="menu_item hover-navbar">
              <NavLink className="menu_link hover:text-[#D10024]" to={"/"}>
                Əsas Səhifə
              </NavLink>
            </li>
            <li className="menu_item hover-navbar">
              <NavLink className="menu_link hover:text-[#D10024]" to={"/products"}>
                Məhsullar
              </NavLink>
            </li>
            <li className="menu_item hover-navbar">
              <NavLink className="menu_link hover:text-[#D10024]" to={"/about"}>
                Haqqımızda
              </NavLink>
            </li>
          </ul>
          <div className="header_user">
            {isLogin ? (
              <div className="flex items-center">
                {username && (
                  <span className="username_display font-[600] mr-[10px]">
                    {username}
                  </span>
                )}
                <button className="login_btn" onClick={logOut}>
                  Çıxış et
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="login_btn"
                  onClick={() => navigateTo("/login")}
                >
                  Daxil ol
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="line"></div>
        <div className="header_bottom">
          <div className="header_catalog" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <img
              className="menu_img"
              src="../../images/icons/category.png"
              alt=""
            />
            <div className="menu_title">Kataloq</div>
          </div>
          <div className="header_search">
            <input
              className="search_input focus:ring-slate-900 "
              type="text"
              placeholder="Axtarış..."
            />
            <button className="search_btn">Axtar</button>
          </div>
          <div className="header_icons">
            <div className="header_like relative">
              <button
                to="/like"
                className="like_header"
                onClick={() => navigateTo("/like")}
              >
                <span className="like_header-counter px-[4px] py-[2px] bg-[#D10024] text-[#fff] text-[10px] rounded-[5px] absolute top-[-5px] right-[-5px]">
                  {like}
                </span>
                <img src="../images/icons/like.png" alt="" />
              </button>
            </div>
            <div className="line2"></div>
            <div className="header_basket relative">
              <button
                to="/basket"
                className="basket_header"
                onClick={() => navigateTo("/basket")}
              >
                <span className="basket_header-counter px-[4px] py-[2px] bg-[#D10024] text-[#fff] text-[10px] rounded-[5px] absolute top-[-5px] right-[-5px]">
                  {basket}
                </span>
                <img src="../images/icons/cart.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>

      {/* Sidebar with Transition */}
      {/* <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2 className="text-xl font-semibold mb-4">Kataloq</h2>
        <ul>
          <li>Kategori 1</li>
          <li>Kategori 2</li>
          <li>Kategori 3</li>
        </ul>
      </div> */}

      {/* Overlay with Transition */}
      {/* {isSidebarOpen && (
        <div
          className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )} */}

      <Outlet />
    </>
  );
};

export default Header;
