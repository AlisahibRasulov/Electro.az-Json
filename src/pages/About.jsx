import React from 'react'
import { useNavigate } from "react-router-dom";
import { PlayLogo } from '../svg'
import productImage1 from '../img/about-page/cyber-monday-shopping-sales.jpg'; // İlk ürün resminin yolunu düzenleyin
import productImage2 from '../img/about-page/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches.jpg';

const logoutBtn = {
    marginLeft: "90%",
    position: "absolute",
    top: "25px",
  }
const About = () => {
    
  return (
    
    // <div>
    //    <div className="about-container">
    //   <h2 className="about-title">Haqqımızda</h2>
    //   <p>
    //     Salam, Electro.az'da xoş gəldiniz!
    //     Biz Electro.az kimi, elektronika dünyasında bir adım ataraq, sizi innovativ məhsullarla tanış etmək və bu dünyada öz yerinizi tapmağınızı dəstəkləmək üçün buradayıq. Əsas missiyamız, sizə texnologiya dünyasının ən sonuncu və maraqli məhsullarını təqdim etmək və onları asanlıqla əldə etməyinizə kömək etməkdir. Bizim üçün ən önəmlisi, müştərilərimizin tələblərinə uyğun məhsullar təmin etmək və onlara yüksək səviyyəli xidmət göstərməkdir.
    //   </p>
    //   <h3>Nələr Təqdim Edirik?</h3>
    //   <ul>
    //     <li>Geniş Məhsul Çeşidliyi: Elektron.az, müxtəlif sahələrdən olan elektronika məhsullarını bir araya gətirir.</li>
    //     <li>Təcrübəli Komanda: Texnologiya sahəsində təcrübəli və mütəxəssis komandamız, müştərilərimizin tələblərinə uyğun mükəmməl məhsul seçimi və təcrübəli məsləhətlər təmin edir.</li>
    //     <li>Güvənilirlik: Elektronika aləmindəki ən güvənilir və tanınmış markaların məhsullarını təqdim edirik, bu da məhsullarımızın keyfiyyət və istedadını təmin edir.</li>
    //     <li>Müştəri Mərkəzlilik: Müştərilərimizin memnuniyyəti bizim üçün ən böyük prioritetdir. Biz hər addımda müştərilərimizə kömək etmək və onların suallarına cavab vermək üçün buradayıq.</li>
    //   </ul>
    //   <h3>Niyə Biz?</h3>
    //   <ul>
    //     <li>Təcrübə: Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.</li>
    //     <li>Keyfiyyət: Yalnızca yüksək keyfiyyətli məhsulları təqdim edirik və müştərilərimizin rahatlığı və razi olduğu məhsullar bizim üçün ən mühüm faktordur.</li>
    //     <li>Rahatlıq: Elektronik alış-verişinizi asanlaşdırırıq və hər addımda müştərilərimizə dəstək oluruq.</li>
    //   </ul>
    //   <p>
    //     Bizimlə birlikdə, elektronika dünyasının qapılarını aralayın və texnologiya sahəsində öz yerinizi tapın. Sizi veb saytımızda görmək və elektronika səyahətinizə dəstək olmaq üçün sabırsızlanırıq.
    //     Təşəkkürlər və elektronika dünyasında uğurlar!
    //   </p>
    // </div>
    // </div>
  //   <div className="about-container">
  //   <h2 className="about-title">Haqqımızda</h2>
  //   <p>
  //     "Electro.az" kimi, texnologiyalar dünyasında mükəmməl seçimlərlə təchiz etməyə gəlmək üçün buradayıq. Əsas missiyamız, ən sonuncu elektronika məhsullarını sizə təqdim etmək və asanlıqla əldə etmənizə imkan yaratmaqdır.
  //   </p>
  //   <div className="cards-container">
  //     <div className="card">
  //       <img src={productImage1} alt="Ürün 1" />
  //       <h3>Kart Başlığı 1</h3>
  //       <p>Bu kart hakkında açıklama yer alabilir.</p>
  //     </div>
  //     <div className="card">
  //       <img src={productImage2} alt="Ürün 2" />
  //       <h3>Kart Başlığı 2</h3>
  //       <p>Bu kartın açıklama kısmı da burada olabilir.</p>
  //     </div>
  //     {/* Yeni kartlar buraya ekleyebilirsiniz */}
  //   </div>
  //   <p>
  //     Texnologiya dünyasının qapılarını "Electro.az" ilə açın. Sizə mükəmməl elektronika təcrübəsi təmin etmək üçün buradayıq.
  //   </p>
  // </div>
<section id="aboutus">
{/* <button style={logoutBtn} onClick={logOut}>
    Logout
      </button> */}
        <div className="container-self">
            <div className="row">
                <div className="col-lg-6 title">
                    <h2>niyə</h2>
                    {/* <h1>Code Academy?</h1> */}
                    <PlayLogo className="play-logo"/>
                     {/* <img src={Logo} alt="Logo" /> */}
                    <h1 className='logo-name'>Electro.<span>az</span></h1>
                    <img src="" alt=""/>
                    <p>Biz Electro.az kimi, elektronika dünyasında bir adım ataraq, sizi innovativ məhsullarla tanış etmək və bu dünyada öz yerinizi tapmağınızı dəstəkləmək üçün buradayıq. Əsas missiyamız, sizə texnologiya dünyasının ən sonuncu və maraqli məhsullarını təqdim etmək və onları asanlıqla əldə etməyinizə kömək etməkdir. Bizim üçün ən önəmlisi, müştərilərimizin tələblərinə uyğun məhsullar təmin etmək və onlara yüksək səviyyəli xidmət göstərməkdir.</p>
                </div>
            </div>
            <div className="row">
                <div class="col-lg-6" style={{padding: "0"}}>
                    <div className="card-self reverse">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                        <h2>Nələr Təqdim Edirik?</h2>
                        <p>Geniş Məhsul Çeşidliyi: Elektron.az, müxtəlif sahələrdən olan elektronika məhsullarını bir araya gətirir.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{padding: "0"}}>
                    <div className="card-self ">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Yüksək Keyfiyyətli Məhsullar</h2>
                            <p>Texnologiya dünyasının qapılarını "Electro.az" ilə açın. Sizə mükəmməl elektronika təcrübəsi təmin etmək üçün buradayıq.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{padding: "0"}}>
                    <div className="card-self reverse">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div class="text">
                            <h2>Rahatlıq</h2>
                            <p>Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{padding: "0"}}>
                    <div className="card-self">
                        <div className="image">
                            <img src={productImage1} alt=""/>
                        </div>
                        <div className="text">
                            <h2>Keyfiyyət</h2>
                            <p>Yalnızca yüksək keyfiyyətli məhsulları təqdim edirik və müştərilərimizin rahatlığı və razi olduğu məhsullar bizim üçün ən mühüm faktordur.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6" style={{padding: "0"}}>
                    <div className="card-self reverse">
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
        </div>
    </section>
  
  )
}

export default About