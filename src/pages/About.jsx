import React from 'react';
import { useNavigate } from "react-router-dom";
import { PlayLogo } from '../svg'
import productImage1 from '../images/about-page/pexels-canvastudio-3194523.jpg'; // İlk ürün resminin yolunu düzenleyin
import productImage2 from '../images/about-page/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches.jpg';
import productImage3 from '../images/about-page/blog-image-2.png'
import productImage4 from '../images/about-page/istockphoto-1476897744-1024x1024.jpg'
import productImage5 from '../images/about-page/stock-photo-double-exposure-of-man-s-hands-holding-and-using-a-digital-device-and-tech-theme-hologram-drawing-2518021401.jpg'
// import "../styles/base/bootstrap.scss"
const logoutBtn = {
    marginLeft: "90%",
    position: "absolute",
    top: "25px",
  }
const About = () => {
    
  return (
    
<section id="aboutus">

        {/* <div className="container-self">
            <div className="row">
                <div className="col-12 title">
                    <div className="flex items-center">
                    <h2>niyə</h2>
                    <PlayLogo className="play-logo"/>
                    </div>
                    <h1 className='logo-name'>Electro.<span>az</span></h1>
                    <img src="" alt=""/>
                    <p>Biz Electro.az kimi, elektronika dünyasında bir adım ataraq, sizi innovativ məhsullarla tanış etmək və bu dünyada öz yerinizi tapmağınızı dəstəkləmək üçün buradayıq. Əsas missiyamız, sizə texnologiya dünyasının ən sonuncu və maraqli məhsullarını təqdim etmək və onları asanlıqla əldə etməyinizə kömək etməkdir. Bizim üçün ən önəmlisi, müştərilərimizin tələblərinə uyğun məhsullar təmin etmək və onlara yüksək səviyyəli xidmət göstərməkdir.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12" style={{padding: "0"}}>
                    <div className="card-self f_row-reverse f_column-reverse">
                        <div className="image">
                            <img src={productImage3} alt=""/>
                        </div>
                        <div className="text">
                        <h2>Nələr Təqdim Edirik?</h2>
                        <p>Geniş Məhsul Çeşidliyi: Elektron.az, müxtəlif sahələrdən olan elektronika məhsullarını bir araya gətirir.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{padding: "0"}}>
                    <div className="card-self f_row f_column">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Yüksək Keyfiyyətli Məhsullar</h2>
                            <p>Texnologiya dünyasının qapılarını "Electro.az" ilə açın. Sizə mükəmməl elektronika təcrübəsi təmin etmək üçün buradayıq.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{padding: "0"}}>
                    <div className="card-self f_row-reverse f_column-reverse">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Rahatlıq</h2>
                            <p>Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{padding: "0"}}>
                    <div className="card-self f_row f_column">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Keyfiyyət</h2>
                            <p>Yalnızca yüksək keyfiyyətli məhsulları təqdim edirik və müştərilərimizin rahatlığı və razi olduğu məhsullar bizim üçün ən mühüm faktordur.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12" style={{padding: "0"}}>
                    <div className="card-self f_row-reverse f_column-reverse">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Təcrübə</h2>
                            <p>Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    <div className="container-self">
      <div className="row">
        <div className="col-lg-6 title">
          <div className="flex items-center">
            <PlayLogo className="play-logo w-[]"/>
            <div className="flex flex-col">
              <h2>niyə</h2>
              <h1 className='logo-name'>Electro.<span>az</span></h1>
            </div>
          </div>
          {/* <img src="img/sep-line.png" alt="" /> */}
          <p>
            Biz Electro.az kimi, elektronika dünyasında bir adım ataraq, sizi innovativ məhsullarla tanış etmək və  
            bu dünyada öz yerinizi tapmağınızı dəstəkləmək üçün buradayıq. Əsas missiyamız, sizə texnologiya dünyasının ən 
            sonuncu və maraqli məhsullarını təqdim etmək və onları asanlıqla əldə etməyinizə kömək etməkdir.Bizim üçün ən önəmlisi, 
            müştərilərimizin tələblərinə uyğun məhsullar təmin etmək və onlara yüksək səviyyəli xidmət göstərməkdir.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6" style={{ padding: 0 }}>
          <div className="card-self">
            <div className="image">
             <img src={productImage2} alt=""/>
            </div>
            <div className="text">
              <h4>Nələr Təqdim Edirik?</h4>
              <p>
              Geniş Məhsul Çeşidliyi: Elektron.az, müxtəlif sahələrdən olan 
              elektronika məhsullarını bir araya gətirir.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{ padding: 0 }}>
          <div className="card-self">
            <div className="image">
            <img src={productImage3} alt=""/>
            </div>
            <div className="text">
              <h4>Yüksək Keyfiyyətli Məhsullar</h4>
              <p>
              Texnologiya dünyasının qapılarını "Electro.az" ilə açın. 
              Sizə mükəmməl elektronika təcrübəsi təmin etmək üçün buradayıq.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{ padding: 0 }}>
          <div className="card-self">
            <div className="image">
            <img src={productImage4} alt=""/>
            </div>
            <div className="text">
              <h4>Rahatlıq</h4>
              <p>
              Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, 
              müştərilərimizə ən yaxşı xidməti təqdim edirik.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{ padding: 0 }}>
          <div className="card-self">
            <div className="image">
            <img src={productImage1} alt=""/>
            </div>
            <div className="text">
              <h4>Keyfiyyət</h4>
              <p>
              Yalnızca yüksək keyfiyyətli məhsulları təqdim edirik və 
              müştərilərimizin rahatlığı və razı olduğu məhsullar bizim üçün 
              ən mühüm faktordur.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{ padding: 0 }}>
          <div className="card-self">
            <div className="image">
            <img src={productImage5} alt=""/>
            </div>
            <div className="text">
              <h4>Təcrübə</h4>
              <p>
              Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, 
              müştərilərimizə ən yaxşı xidməti təqdim edirik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    </section>
  
  )
}

export default About