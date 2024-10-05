import React from 'react';

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: 'Ən Yaxşı Oyun Konsolları və Aksessuarlar:Nələr Təqdim Edirik?',
      description: '2024-cü ildə PlayStation 5 və Xbox Series X oyun həvəskarlarının ən çox sevdiyi konsollardandır.Oyun təcrübəsini daha da yaxşılaşdırmaq üçün keyfiyyətli qulaqlıqlar və joysticklər vacib aksessuarlardır.',
      image: '../images/about-page/adv-image-2.png', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Smartfon Alarkən Nəyə Diqqət Etməlisiniz?',
      description: 'Smartfon seçərkən prosessor, kamera keyfiyyəti və batareya ömrü kimi faktorlara diqqət yetirmək vacibdir. Həmçinin, Android və iOS arasında seçim də sizin tələblərinizə uyğun olmalıdır.',
      image: '../images/about-page/blog-image-2.png', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Elektro.az-dan Alınan Məhsullara Necə Qulluq Etməli?',
      description: 'Elektron cihazların uzunömürlü olması üçün onlara düzgün qulluq vacibdir. Məsələn, texniki xidmət və təmizlik işlərini vaxtında etmək cihazların ömrünü uzadır və daha effektiv işlə təmin edir.',
      image: '../images/about-page/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches.jpg', // Replace with your image URL
    },
    // {
    //     id: 4,
    //     title: 'Keyfiyyət',
    //     description: 'Yalnızca yüksək keyfiyyətli məhsulları təqdim edirik və müştərilərimizin rahatlığı və razi olduğu məhsullar bizim üçün ən mühüm faktordur.',
    //     image: '../images/about-page/blog-image-2.png',  // Replace with your image URL
    //   },
    //   {
    //     id: 5,
    //     title: 'Təcrübə',
    //     description: 'Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.',
    //     image: '../images/about-page/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches.jpg', // Replace with your image URL
    //   },
  ];

  return (
    <div className='blogs'>
      <div className='container-fluid'>
        <div className="blogs-content">     
        {blogData.map((blog) => (
          <div className='blog-card w-[30%]' key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className='cart-content'>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            {/* <button className='mt-[40px] px-[40px] py-[10px] rounded-[10px] font-[500] bg-red-800 text-cyan-50'>Daha çox</button> */}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
