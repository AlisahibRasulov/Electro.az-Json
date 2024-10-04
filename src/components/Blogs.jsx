import React from 'react';

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      title: 'Nələr Təqdim Edirik?',
      description: 'Geniş Məhsul Çeşidliyi: Elektron.az, müxtəlif sahələrdən olan elektronika məhsullarını bir araya gətirir.',
      image: '../images/about-page/adv-image-2.png', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Yüksək Keyfiyyətli Məhsullar',
      description: 'Texnologiya dünyasının qapılarını "Electro.az" ilə açın. Sizə mükəmməl elektronika təcrübəsi təmin etmək üçün buradayıq',
      image: '../images/about-page/blog-image-2.png', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Rahatlıq',
      description: 'Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.',
      image: '../images/about-page/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches.jpg', // Replace with your image URL
    },
    {
        id: 4,
        title: 'Keyfiyyət',
        description: 'Yalnızca yüksək keyfiyyətli məhsulları təqdim edirik və müştərilərimizin rahatlığı və razi olduğu məhsullar bizim üçün ən mühüm faktordur.',
        image: '../images/about-page/blog-image-2.png',  // Replace with your image URL
      },
      {
        id: 5,
        title: 'Təcrübə',
        description: 'Bir çox illik təcrübə və texnologiya sahəsindəki biliklərimizlə, müştərilərimizə ən yaxşı xidməti təqdim edirik.',
        image: '../images/about-page/seller-man-mobile-phone-professional-consultant-tech-store-shop-check-new-smart-watches.jpg', // Replace with your image URL
      },
  ];

  return (
    <div className='blogs'>
      <div className='container-fluid'>
        <div className="blogs-content">     
        {blogData.map((blog) => (
          <div className='blog-card 2xl:w-[22%] xl:w-[25%] lg:w-[100%]' key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className='cart-content'>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            <button className='mt-[40px] px-[40px] py-[10px] rounded-[10px] font-[500] bg-red-800 text-cyan-50'>Daha çox</button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
