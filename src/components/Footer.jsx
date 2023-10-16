// import React from 'react';
// import { NavLink, Outlet, Link } from "react-router-dom";
// import { FooterFacebookIcon,FooterInstagramIcon,FooterTwitterIcon } from '../svg';
// // import './Footer.scss'; // SCSS stil dosyasının yolunu buraya ekleyin

// function Footer() {
//   return (
//     // <>
    
//     {/* <footer className="footer-container">
//       <div className="footer-content">
//         <div className="footer-logo">Electro.az</div>
//         <div className="footer-links">
//         <Link to="/">Əsas Səhifə</Link>
//         <Link to="product/all-products">Məhsullar</Link>
//         <Link to="/about">Haqqımızda</Link>
//         <Link to="/contact">Əlaqə</Link>
//         </div>
       
//       </div>
//       <div className="footer-copyright">
//         &copy; 2023 Electro.az. Bütün hüquqlar qorunur.
//       </div>
//       <div className="footer-social">
//           <Link href="#" className="social-icon">
//             <FooterFacebookIcon/>
//           </Link>
//           <Link href="#" className="social-icon">
//             <FooterTwitterIcon/>
//           </Link>
//           <Link href="#" className="social-icon">
//             <FooterInstagramIcon/>
//           </Link>
//         </div>
//     </footer>
//     </>
//   ); */}
//   <div className="footer">

//   </div>
//   )
// }



import React from 'react'
import { NavLink, Outlet, Link } from "react-router-dom";
import { FooterFacebookIcon,FooterInstagramIcon,FooterTwitterIcon } from '../svg';

const Footer = () => {
  return (
    <div className='footer'>
    
      <footer className="footer-container">
       <div className="footer-content">
         <div className="footer-logo">Electro.az</div>
         <div className="footer-links">
        <Link to="/">Əsas Səhifə</Link>
        <Link to="product/all-products">Məhsullar</Link>
         <Link to="/about">Haqqımızda</Link>
        <Link to="/contact">Əlaqə</Link>
      </div>
       
      </div>
       <div className="footer-copyright">
         &copy; 2023 Electro.az. Bütün hüquqlar qorunur.
       </div>
      <div className="footer-social">
           <Link href="#" className="social-icon">
             <FooterFacebookIcon/>
           </Link>
           <Link href="#" className="social-icon">
             <FooterTwitterIcon/>
          </Link>
         <Link href="#" className="social-icon">
             <FooterInstagramIcon/>
          </Link>
       </div>
     </footer>
    </div>
  )
}

export default Footer
